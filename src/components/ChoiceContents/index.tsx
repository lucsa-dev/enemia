"use client"

import { Contents, Disciplina, Prova } from "../../contents/Contents";
import { useState } from "react";
import SubjectItem from "./SubjectItem";

const ChoiceContentsComponent = () => {
    const [subjects, setSubjects] = useState([]);

    const handleChange = (tema: string, isChecked: boolean) => {
        setSubjects((prev) => ({
            ...prev,
            [tema]: isChecked
            }));
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
                            <button className="font-bold cursor-pointer p-3">{disciplina.nome}</button>
                            <ul className=" pl-5">
                                {disciplina.conteudos.map((conteudo, indexConteudo) => (
                                    <li key={indexConteudo}>
                                        <SubjectItem subjects={subjects} conteudo={conteudo} handleChange={handleChange} />
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