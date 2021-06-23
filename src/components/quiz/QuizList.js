import QuarterQuestion from "./images/QuarterQuestion.png"
import Washington from "./images/WashingtonQuestion.png"
import Lincoln from "./images/AbrahamLincolnQuestion.png"
import Bob from "./images/BobDeclaration.png"
import Benjamin from "./images/BenjaminAnswer.png"
import AbrahamAnswer from "./images/AbrahamAnswer.png"
import WashingtonAnswer from "./images/WashingtonAnswer.png"
import WashingtonAnswer2 from "./images/WashingtonAnswer2.png"
import GrantAnswer from "./images/GrantAnswer.png"
import UncleSam from "./images/UncleSamTry.png"
import Grant from "./images/Grant.png"
import './Quiz.css'
import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

export const QuizList = () => {

    const history = useHistory()

    const [ questionImg, setQuestionImg ] = useState({
        question1: QuarterQuestion,
        question2: Grant,
        question3: Washington,
        question4: Lincoln,
        question5: Bob
    })

    const [ correctAnswer, setCorrectAnswer ] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: ""
    })

    const [ incorrectAnswer, setIncorrectAnswer ] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: ""
    })

    const correctObject = {
        question1: WashingtonAnswer2,
        question2: GrantAnswer,
        question3: WashingtonAnswer,
        question4: AbrahamAnswer,
        question5: Benjamin
    }

    const incorrectObject = {
        question1: UncleSam,
        question2: UncleSam,
        question3: UncleSam,
        question4: UncleSam,
        question5: UncleSam
    }


    const handleMultipleChoice = (event) => {
        if (event.target.id === "correct"){
            const correctState = { ...correctAnswer }
            const incorrectState = { ...incorrectAnswer }
            const questionState = { ...questionImg }
            correctState[event.target.name] = correctObject[event.target.name]
            incorrectState[event.target.name] = ""
            questionState[event.target.name] = ""
            setQuestionImg(questionState)
            setIncorrectAnswer(incorrectState)
            setCorrectAnswer(correctState)
        } else {
            const incorrectState = { ...incorrectAnswer }
            const correctState = { ...correctAnswer }
            const questionState = { ...questionImg }
            incorrectState[event.target.name] = incorrectObject[event.target.name]
            correctState[event.target.name] = ""
            questionState[event.target.name] = ""
            setQuestionImg(questionState)
            setCorrectAnswer(correctState)
            setIncorrectAnswer(incorrectState)
        }
    }

    
    return (
        <section className="quizSection">
            <h1 className="quizTitle">Let's Put Your Knowledge To The Test!!</h1>
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
                        <img className="quizImage correctImg questionImg" src={questionImg.question1}></img>
                        <img className="quizImage answerImg correctImg correctImg1" src={correctAnswer.question1}></img>
                        <img className="quizImage answerImg incorrectImg fade-out" src={incorrectAnswer.question1}></img>
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
                        <img className="quizImage correctImg questionImg" src={questionImg.question2}></img>
                        <img className="quizImage answerImg correctImg correctImg2" src={correctAnswer.question2}></img>
                        <img className="quizImage answerImg incorrectImg" src={incorrectAnswer.question2}></img>
                    </div>
                </fieldset>
                <fieldset className="question" id="question3">
                    <article className="questionArticle">
                        <h2>George Washington was America's 1st president?</h2>
                        <div>
                            <input id="correct" name="question3" type="radio" value={correctAnswer.question3} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option1">True</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question3" type="radio" value={incorrectAnswer.question3} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option2">False</label>
                        </div>
                    </article>
                    <div className="quizImgDiv">
                        <img className="quizImage correctImg questionImg" src={questionImg.question3}></img>
                        <img className="quizImage answerImg correctImg correctImg3" src={correctAnswer.question3}></img>
                        <img className="quizImage answerImg incorrectImg" src={incorrectAnswer.question3}></img>
                    </div>
                </fieldset>
                <fieldset className="question" id="question4">
                    <article className="questionArticle">
                        <h2>Which coin is Abraham Lincoln on?</h2>
                        <div>
                            <input id="incorrect" name="question4" type="radio" value={incorrectAnswer.question4} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option1">Dime</label>
                        </div>
                        <div>
                            <input id="correct" name="question4" type="radio" value={correctAnswer.question4} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option2">Penny</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question4" type="radio" value={incorrectAnswer.question4} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option4">Sacagawea Dollar</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question4" type="radio" value={incorrectAnswer.question4} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option3">Bicentennial Quarter</label>
                        </div>
                    </article>
                    <div className="quizImgDiv">
                        <img className="quizImage correctImg questionImg" src={questionImg.question4}></img>
                        <img className="quizImage answerImg correctImg" src={correctAnswer.question4}></img>
                        <img className="quizImage answerImg incorrectImg" src={incorrectAnswer.question4}></img>
                    </div>
                </fieldset>
                <fieldset className="question" id="question5">
                    <article className="questionArticle">
                        <h2>Which person helped draft the Declaration of Independence?</h2>
                        <div>
                            <input id="correct" name="question5" type="radio" value={correctAnswer.question5} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option1">Benjamin Franklin</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question5" type="radio" value={incorrectAnswer.question5} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option2">Abraham Lincoln</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question5" type="radio" value={incorrectAnswer.question5} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option4">Alexander Hamilton</label>
                        </div>
                        <div>
                            <input id="incorrect" name="question5" type="radio" value={incorrectAnswer.question5} onClick={handleMultipleChoice}></input>
                            <label htmlFor="option3">Richard Pryor</label>
                        </div>
                    </article>
                    <div className="quizImgDiv">
                        <img className="quizImage correctImg questionImg" src={questionImg.question5}></img>
                        <img className="quizImage answerImg correctImg" src={correctAnswer.question5}></img>
                        <img className="quizImage answerImg incorrectImg" src={incorrectAnswer.question5}></img>
                    </div>
                </fieldset>
            </form>
            <button className="button" onClick={() => history.push("/")}>Return to Home</button>
        </section>
    )
}