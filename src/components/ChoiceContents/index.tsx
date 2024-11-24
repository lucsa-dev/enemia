"use client"

import { Contents, Disciplina, Prova } from "../../contents/Contents";
import { useState } from "react";
import SubjectItem from "./SubjectItem";

const ChoiceContentsComponent = () => {
    const [subjects, setSubjects] = useState<Array<number>>([]);

    const addSubject = (id: number) => {
        if (!subjects.includes(id)) {
            setSubjects((prev) => [...prev, id]);
        }else {
            setSubjects((prev) => prev.filter((subjectId) => subjectId !== id));
        }
    };

    return (
        <div className="p-3 flex flex-col items-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Para qual prova você deseja estudar ?</h1>
        <div className="flex flex-col md:flex-row gap-4">
        {Contents.provas.map((prova: Prova, indexProva: number) => (
            <div key={indexProva} className="border-2 p-4 block">
                <div>
                    <h2 className="text-xl font-semibold mb-2 uppercase">{prova.nome}</h2>
                </div>
                <ul className="list-disc pl-5">
                    {prova.disciplinas.map((disciplina: Disciplina, indexDisciplina: number) => (
                        <li key={indexDisciplina}>
                            <button className="font-bold p-3">{disciplina.nome}</button>
                            <ul className="list-none pl-5">
                                {disciplina.conteudos.map((conteudo, indexConteudo) => (
                                    <li key={indexConteudo}>
                                        <SubjectItem subjects={subjects} conteudo={conteudo} addSubject={addSubject} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </div>
        </div>
    );
};

export default ChoiceContentsComponent;