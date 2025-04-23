import { useState } from "react";
import Quiz from "./quiz";

function Resuts({ userAnswers, questionBank, restartQuiz }){

    function getScore(){
        let finalScore = 0;
        userAnswers.forEach((answer, index) => {
            if(questionBank[index].answer === answer)
                finalScore++
        })

        return finalScore
    }

    const score = getScore()

    return (
        <div>
            <h2>Quiz Completed</h2>
            <p>Your Score: {score} / {questionBank.length}</p>
            <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default Resuts;