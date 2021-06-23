import Quarter from "./images/Quarter.png"
import Quarter2 from "./images/Quarter2.png"
import Dime from "./images/Dime.png"
import Dime2 from "./images/Dime2.png"
import Nickel from "./images/Nickel.png"
import Nickel2 from "./images/Nickel2.png"
import Penny from "./images/Penny.png"
import Penny2 from "./images/Penny2.png"
import Dollar from "./images/Dollar.png"
import Dollar2 from "./images/Dollar2.jpeg"
import Five from "./images/Five.jpeg"
import Five2 from "./images/Five2.jpeg"
import Ten from "./images/Ten.jpeg"
import Ten2 from "./images/Ten2.jpeg"
import Twenty from "./images/Twenty.jpeg"
import Twenty2 from "./images/Twenty2.jpeg"
import Fifty from "./images/Fifty.jpeg"
import Fifty2 from "./images/Fifty2.jpeg"
import Hundred from "./images/Hundred.jpeg"
import Hundred2 from "./images/Hundred2.jpeg"
import PiggyBank from "./images/PiggyBank.png"
import Great from "./images/GreatJob.png"
import TryAgain from "./images/TryAgain.png"
import Nice from "./images/Nice.png"
import UhOh from "./images/UhOh.png"
import Image from 'react-bootstrap/Image'
import Milo from './images/Milo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Quiz.css'
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

export const QuizList = () => {

    const [ correctAnswer, setCorrectAnswer ] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: ""
    })

    const [ incorrectAnswer, setIncorrectAnswer ] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: ""
    })

    const correctObject = {
        question1: Great,
        question2: Nice,
        question3: Quarter,
        question4: Dime,
        question5: Nickel,
        question6: Penny,
        question7: Dollar,
        question8: Fifty,
    }

    const incorrectObject = {
        question1: TryAgain,
        question2: UhOh,
        question3: Hundred,
        question4: Dollar,
        question5: Nickel,
        question6: Penny,
        question7: Dollar,
        question8: Fifty,
    }


    const handleMultipleChoice = (event) => {
        if (event.target.id === "correct"){
            const correctState = { ...correctAnswer }
            const incorrectState = { ...incorrectAnswer }
            correctState[event.target.name] = correctObject[event.target.name]
            incorrectState[event.target.name] = ""
            setIncorrectAnswer(incorrectState)
            setCorrectAnswer(correctState)
        } else {
            const incorrectState = { ...incorrectAnswer }
            const correctState = { ...correctAnswer }
            incorrectState[event.target.name] = incorrectObject[event.target.name]
            correctState[event.target.name] = ""
            setCorrectAnswer(correctState)
            setIncorrectAnswer(incorrectState)
        }
    }

    
    return (
        <section className="quizSection">
            <h1>Let's Put Your Knowledge To The Test!!</h1>
            <form className="quizForm">
                <fieldset className="question" id="question1">
                    <article className="questionArticle">
                        <h2>Who is on the Quarter?</h2>
                        <div>
                            <input id="incorrect" name="question1" type="radio" value={incorrectAnswer.question1} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option1">Bob Loblaw</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question1" type="radio" value={incorrectAnswer.question1} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option2">Abraham Lincoln</label>
                        </div>
                        <div>
                            <input id="correct" name="question1" type="radio" value={correctAnswer.question1} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option3">George Washington</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question1" type="radio" value={incorrectAnswer.question1} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option4">John Adams</label>
                        </div>
                    </article>
                    <div className="quizImgDiv">
                        <img className="answerImg correctImg" src={correctAnswer.question1}></img>
                        <img className="answerImg incorrectImg fade-out" src={incorrectAnswer.question1}></img>
                    </div>
                </fieldset>
                <fieldset className="question" id="question2">
                    <article className="questionArticle">
                        <h2>Who is on the $50 bill?</h2>
                        <div>
                            <input id="incorrect" name="question2" type="radio" value={incorrectAnswer.question2} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option1">Steve Martin</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question2" type="radio" value={incorrectAnswer.question2} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option2">John Hancock</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question2" type="radio" value={incorrectAnswer.question2} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option4">George Bush</label>
                        </div>
                        <div>
                            <input id="correct" name="question2" type="radio" value={correctAnswer.question2} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option3">Ulyssees S. Grant</label>
                        </div>
                    </article>
                    <div className="quizImgDiv">
                        <img className="answerImg correctImg" src={correctAnswer.question2}></img>
                        <img className="answerImg incorrectImg" src={incorrectAnswer.question2}></img>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}