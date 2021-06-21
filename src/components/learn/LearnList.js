import Quarter from "./images/Quarter.png"
import Dime from "./images/Dime.png"
import Nickel from "./images/Nickel.png"
import Penny from "./images/Penny.png"
import Dollar from "./images/Dollar.jpeg"
import Five from "./images/Five.jpeg"
import Ten from "./images/Ten.png"
import Twenty from "./images/Twenty.png"
import Fifty from "./images/Fifty.png"
import Hundred from "./images/Hundred.png"
import PiggyBank from "./images/PiggyBank.png"
import Image from 'react-bootstrap/Image'
import Milo from './images/Milo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Learn.css'
import React, { useContext, useEffect } from "react"
import { ProfileContext } from "../profile/ProfileProvider"

export const LearnList = () => {

    const  { getProfile, profile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
        <section>
            <article className="learnHeader">
                <div className="imageDiv">
                    <img className="milo image" alt="milo profile" src={Milo}></img>
                </div>
                    <h1>Hey {profile.saver?.user.first_name}!!</h1>
                    <h2>Let's Learn About Our Money</h2>
            </article>
            <Container fluid>
                <article className="learnArticle">
                <Row>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnCoinImg" alt="money" src={Penny} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>This is a penny</div>
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
                            <Card.Body>
                                <div>This is a nickel</div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
                <article className="learnArticle">
                <Row>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnCoinImg" alt="money" src={Dime} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>This is a dime</div>
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
                            <Card.Body>
                                <div>This is a quarter</div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
                <article className="learnArticle">
                <Row>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnBillImg" alt="money" src={Dollar} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>This is a dollar</div>
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
                            <Card.Body>
                                <div>This is five dollars</div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
                <article className="learnArticle">
                <Row>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnBillImg" alt="money" src={Ten} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>This is ten dollars</div>
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
                            <Card.Body>
                                <div>This is a twenty dollars</div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
                <article className="learnArticle">
                <Row>
                    <Col className="learnCol">
                    <Accordion>
                        <Accordion.Toggle as={Col} variant="link" eventKey="0">
                            <Image className="learnBillImg" alt="money" src={Fifty} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>This is fifty dollars</div>
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
                            <Card.Body>
                                <div>This is one hundred dollars</div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    </Col>
                </Row>
                </article>
            </Container>
        </section>
        </>
    )
}