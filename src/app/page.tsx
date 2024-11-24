"use client"
import ChoiceContentsComponent from "@/components/ChoiceContents";
import SimulationComponent from "@/components/simulation";
import { filteredContents, Simulation } from "@/contents/Contents";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [subjects, setSubjects] = useState<Array<number>>([]);
  const [questions_qtd, setQuestions_qtd] = useState<number>(10);
  const [questions, setQuestions] = useState<Simulation[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  
  const generateSimulation = async () => {
    setIsLoading(true);
    const filteredContent = filteredContents(subjects);
    const allSubjects: string[] = [];
    filteredContent.provas.forEach(prova => {
        prova.disciplinas.forEach(disciplina => {
            disciplina.conteudos.forEach(conteudo => {
                if (!allSubjects.includes(conteudo.disciplina)) {
                    allSubjects.push(conteudo.disciplina);
                }
            });
        });
    });

    const prompt = `A resposta deve ser apenas um array com ${allSubjects.length} jsons sem formatação markdown.
    Cada json deve conter a matéria e um array de questões.
    Cada questão deve conter o enunciado, as opções de resposta e a resposta correta.
    Não deve conter nenhum texto de inicio e fim.
    a resposta Não deve conter formatação markdown.
    Deve ser um array de objetos json válido.
    Não deve repetir nenhum assunto
    de acordo com seu conhecimento das provas anteriores do enem, Gere ${questions_qtd} questões baseadas nos modelos das questões do ENEM.
      As matérias são: ${allSubjects.join(', ')}.
      O formato de saída deve ser em JSON, com as seguintes chaves:
      [
    {
       "subject" : string,
       "questions": Array<{
          question: string,
          options: Array<string>,
          answer: string
        }>
  }
        ]`;

      try {
        const response = await axios.post('api/gemini', { prompt });
        const dataQuestions = response.data;
        console.log("🚀 ~ generateSimulation ~ dataQuestions:", dataQuestions)
        
        setQuestions(dataQuestions);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
  }



  return (
    <div className="p-3 flex flex-col items-center h-screen">
      { isLoading && 
      <div id="loading" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="w-16 h-16 border-8 border-t-8 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
      </div>
 }
      <h1 className="text-6xl text-center p-3 font-extrabold text-red-600">ENEM.IA</h1>
      <ChoiceContentsComponent subjects={subjects} setSubjects={setSubjects} />
      {subjects.length > 0 && 
        <div className="flex flex-col p-3">
          <label htmlFor="questions_qtd"> Quantidade de questões 
            <input
              type="number"
              name="questions_qtd"
              className="p-2 ml-3"
              id="questions_qtd"
              value={questions_qtd}
              onChange={(e) => setQuestions_qtd(parseInt(e.target.value))}
            />
          </label>
          <button onClick={generateSimulation} className="p-3 bg-green-600 font-bold text-white hover:bg-green-500 mt-3">Gerar Simulado</button>
        </div>
      }
    { questions && <SimulationComponent questions={questions} /> }
    </div>
  )
}
