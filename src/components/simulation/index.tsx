import { Simulation } from "@/contents/Contents";

export default function SimulationComponent({questions}: {questions: Simulation[]}) {
    return (
        <div>
            {questions.map((question, index) => (
                <div key={index} className="p-3">
                    <h3 className="text-xl font-bold text-red-600 text-3xl p-3">{question.subject}</h3>
                    <ul>
                        {question.questions.map((question, index) => (
                            <li key={index}><h4 className="text-xl p-2 text-bold list-disc">{question.question}</h4>
                                <ul>
                                    {question.options.map((option, index) => (
                                        <li key={index}>
                                            {option}
                                            </li>
                                    ))}

                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>))}
        </div>
    )
}