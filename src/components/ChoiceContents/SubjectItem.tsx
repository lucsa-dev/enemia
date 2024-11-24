import { Conteudo } from "@/contents/Contents";
import { useEffect, useState } from "react";

export default function SubjectItem({ subjects, conteudo, addSubject } : { subjects: number[], conteudo: Conteudo, addSubject: (id:number) => void }) {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        if (subjects.includes(conteudo.id)) {
            setToggle(true);
        }
    }, [subjects]);
    const handleToggle = () => {
        setToggle(!toggle);
        addSubject(conteudo.id);
    };

  return (
    <div>
        <button className={`p-1 m-1 pl-4 hover:bg-red-200 border border-red-100 ${ toggle ? 'bg-red-300' : '' } w-full text-left`} onClick={handleToggle}>{conteudo.disciplina}</button>
        {toggle && 
            <ul className="list-none">
                {/* {conteudo.temas.map((tema, indexTema) => (
                        <li key={indexTema}>
                            <label>
                                <input type="checkbox" />
                                <span> {tema}</span>
                            </label>
                        </li>
                ))} */}
            </ul> }
    </div> 
  );
}