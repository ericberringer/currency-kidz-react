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
import Image from 'react-bootstrap/Image'
import Milo from './images/Milo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './Learn.css'
import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { ProfileContext } from "../profile/ProfileProvider"

export const LearnList = () => {

    const  { getProfile, profile } = useContext(ProfileContext)

    const history = useHistory()

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
        <section className="learnSection">
            <article className="learnHeader">
                <div className="imageDiv">
                    <img className="milo image" alt="milo profile" src={Milo}></img>
                </div>
                    <h1>Hey {profile.saver?.user.first_name}!!</h1>
                    <h2>Let's Learn About Our Money</h2>
                    <h6>Click The Money To Learn More</h6>
            </article>
            <Container fluid>
                <article className="learnArticle">
                <Row className="learnRow">
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnCoinImg" alt="money" src={Penny} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="learnCardBody">
                                <Image className="learnCoinImg2" alt="money" src={Penny2} />
                                <div className="learnBlurb">
                                    <h5>The United States one-cent coin, called a penny, is worth $0.01. It features the face of Abraham Lincoln, America's 16th president.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="1">
                            <Image className="learnCoinImg" alt="money" src={Nickel} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="learnCardBody">
                                <Image className="learnCoinImg2" alt="money" src={Nickel2} />
                                <div className="learnBlurb">
                                    <h5>The United States five-cent coin, called a nickel, is worth $0.05. It features the face of Thomas Jefferson, America's 3rd president.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
                <article className="learnArticle">
                <Row className="learnRow">
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnCoinImg" alt="money" src={Dime} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="learnCardBody">
                                <Image className="learnCoinImg2" alt="money" src={Dime2} />
                                <div className="learnBlurb">
                                    <h5>The United States ten-cent coin, called a dime, is worth $0.10. It features the face of Franklin D. Roosevelt, America's 32nd president.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="1">
                            <Image className="learnCoinImg" alt="money" src={Quarter} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="learnCardBody">
                                <Image className="learnCoinImg2" alt="money" src={Quarter2} />
                                <div className="learnBlurb">
                                    <h5>The United States twenty-five-cent coin, called a quarter, is worth $0.25. It features the face of George Washington, America's 1st president.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
                <article className="learnArticle">
                <Row className="learnRow">
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnBillImg" alt="money" src={Dollar} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="learnCardBody">
                                <Image className="learnBillImg2" alt="money" src={Dollar2} />
                                <div className="learnBlurb">
                                    <h5>The United States one-dollar bill, called a dollar, is worth $1.00. Like the Quarter, the one-dollar bill features the face of George Washington.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="1">
                            <Image className="learnBillImg" alt="money" src={Five} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="learnCardBody">
                                <Image className="learnBillImg2" alt="money" src={Five2} />
                                <div className="learnBlurb">
                                    <h5>The United States five-dollar bill is worth $5. Like the Penny, the five-dollar bill features the face of Abraham Lincoln.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
                <article className="learnArticle">
                <Row className="learnRow">
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnBillImg" alt="money" src={Ten} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="learnCardBody">
                                <Image className="learnBillImg2" alt="money" src={Ten2} />
                                <div className="learnBlurb">
                                    <h5>The United States ten-dollar bill is worth $10. The ten-dollar bill features the face of Alexander Hamilton, America's first Secretary of the Treasury.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="1">
                            <Image className="learnBillImg" alt="money" src={Twenty} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="learnCardBody">
                                <Image className="learnBillImg2" alt="money" src={Twenty2} />
                                <div className="learnBlurb">
                                    <h5>The United States twenty-dollar bill is worth $20. Like the Quarter, the twenty-dollar bill features the face of Andrew Jackson, America's 7th president.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
                <article className="learnArticle">
                <Row className="learnRow">
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnBillImg" alt="money" src={Fifty} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="learnCardBody">
                                <Image className="learnBillImg2" alt="money" src={Fifty2} />
                                <div className="learnBlurb">
                                    <h5>The United States fifty-dollar bill is worth $50. The fifty-dollar bill features the face of Ulyssees S. Grant, America's 18th president.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="1">
                            <Image className="learnBillImg" alt="money" src={Hundred} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="learnCardBody">
                                <Image className="learnBillImg2" alt="money" src={Hundred2} />
                                <div className="learnBlurb">
                                <h5>The United States one-hundred-dollar bill is worth $100. It features the face of Benjamin Franklin, one of America's 8 Founding Fathers. He helped draft the Decleration of Independence and U.S. Constitution.</h5>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
            </Container>
            <article className="quizPiggyArticle" onClick={() => history.push("/quiz")}>
                <h6>QUIZ</h6>
                <Image className="quizPiggy" alt="piggy bank" src={PiggyBank} />
                <h6>LET'S SEE WHAT WE LEARNED!!</h6>
            </article>
        </section>
        </>
    )
}