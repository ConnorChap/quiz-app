import { useState } from "react";
import Results from "./results"

function Quiz(){
    const questionBank = [
        {
            question: "What is the capital of France",
            options: ["Berlin", "London", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "What language is used for web apps?",
            options: ["PHP", "Python", "Javascript", "All"],
            answer: "All"
        },
        {
            question: "What does jsx stand for?",
            options: ["Javascript XML", "Java Syntax eXtension", "Just a Simple eXample", "None of the above"],
            answer: "Javascript XML"
        }
    ]

    const initalAnswers = [null, null, null]
    const[userAnswers, setUserAnswers] = useState(initalAnswers);
    const[currQuestion, setCurrQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(0);
    const selectedAnswer = userAnswers[currQuestion]

    function restartQuiz(){
        setUserAnswers(initalAnswers)
        setCurrQuestion(0)
        setIsFinished(false)
    }

    function handleSelectOption(option){
        const newUserAnswers = [...userAnswers]
        newUserAnswers[currQuestion] = option
        setUserAnswers(newUserAnswers)
    }

    function goToNext(){
        if(currQuestion === questionBank.length - 1){
            setIsFinished(true)
        }
        else{
            setCurrQuestion(currQuestion + 1) 
        }

    }

    function goToPrev(){
        if(currQuestion > 0)
            setCurrQuestion(currQuestion - 1)
    }

    if(isFinished){
        return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>
    }

    return(
        <div>
            <h2>Question {currQuestion + 1}</h2>
            <p className="question">{questionBank[currQuestion].question}</p>

            {questionBank[currQuestion].options.map((option) => (
                <button 
                    className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}> {option}
                </button>
            ))}

            <p>Selected: {userAnswers[currQuestion]}</p>
            <div className="nav-buttons">
                <button onClick={() => goToPrev()} disabled={currQuestion === 0}>Previous</button>
                <button onClick={() => goToNext()} disabled={!(selectedAnswer)}>
                    {currQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                </button>
            </div>
        </div>
    )
}

export default Quiz