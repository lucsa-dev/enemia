import { Disciplina } from "@/contents/Contents";
import { useState } from "react";

export default function SubjectItem({subjects, conteudo, handleChange } : { subjects: [], disciplina: Disciplina, handleChange: (tema: string, checked: boolean) => void }) {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
      setToggle(!toggle);
    };

  return (
    <div>
                    <button className="p-3" onClick={handleToggle}>{conteudo.disciplina}</button>
                    {toggle && 
                        <ul className="list-none">
                            {conteudo.temas.map((tema, indexTema) => (
                                    <li key={indexTema}>
                                        <label>
                                            <input
                                            type="checkbox"
                                            onChange={(e) =>
                                                handleChange(tema, e.target.checked)
                                            }
                                            />
                                            <span> {tema}</span>
                                        </label>
                                    </li>
                            ))}
                        </ul> }
                    </div> 
  );
}