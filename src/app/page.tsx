"use client"
import ChoiceContentsComponent from "@/components/ChoiceContents";
import { filteredContents } from "@/contents/Contents";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [subjects, setSubjects] = useState<Array<number>>([]);
  const [questions_qtd, setQuestions_qtd] = useState<number>(10);
  const [ prompt, setPrompt ] = useState<string>("");
  
  const generateSimulation = async () => {
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

    setPrompt(`
      A resposta deve ser apenas um json sem texto com ${questions_qtd} questões baseadas nas provas oficiais do ENEM, divididas em matérias.
      As matérias são: ${allSubjects.join(', ')}.
      O formato de saída deve ser em JSON, com as seguintes chaves:
    {
       "subject" : string,
       "questions": Array<{
          question: string,
          options: Array<string>,
          answer: string
        }>
    }
      `)

      try {
        const response = await axios.post('api/gemini', { prompt });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  }



  return (
    <div className="p-3 flex flex-col items-center h-screen">
      <h1 className="text-6xl text-center p-3 font-extrabold text-red-600">ENEM.IA</h1>
      <ChoiceContentsComponent subjects={subjects} setSubjects={setSubjects} />
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
      <div>
        {prompt && <pre>{prompt}</pre>}
      </div>
    </div>
  );
}
