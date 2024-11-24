"use client"
import ChoiceContentsComponent from "@/components/ChoiceContents";
import { filteredContents } from "@/contents/Contents";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [subjects, setSubjects] = useState<Array<number>>([]);
  const [questions_qtd, setQuestions_qtd] = useState<number>(10);
  const [questions, setQuestions] = useState<{
    subject: string;
    questions: Array<{
      question: string;
      options: Array<string>;
      answer: string;
      }>;
  }>();
  
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

    const prompt = `A resposta deve ser apenas um json sem texto.
    de acordo com seu conhecimento das provas anteriores do enem, Gere ${questions_qtd} questões baseadas nos modelos das questões do ENEM.
      As matérias são: ${allSubjects.join(', ')}.
      O formato de saída deve ser em JSON, com as seguintes chaves:
    {
       "subject" : string,
       "questions": Array<{
          question: string,
          options: Array<string>,
          answer: string
        }>
    }`;

      try {
        const response = await axios.post('api/gemini', { prompt });
        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
  }



  return (
    <div className="p-3 flex flex-col items-center h-screen">
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
      {questions && <div>
        <h1 className="text-2xl text-center p-3 font-extrabold text-red-600">{questions.subject}</h1>
        {questions.questions.map((question, index) => (
          <div key={index} className="p-3">
            <p className="text-xl font-bold">{question.question}</p>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
      </div>
    ))}
    </div>}
    </div>
  )
}
