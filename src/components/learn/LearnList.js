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
import Col from 'react-bootstrap/Col'
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
                    <h2>Let's Select a Coin</h2>
            </article>
            <Container className="learnCoinContainer">
                <Row className="learnCoins">
                    <Col className="learnCol">
                        <Image className="learnImg learnCoinImg learnPenny" alt="money" src={Penny} />
                    </Col>
                    <Col className="learnCol">
                        <Image className="learnImg learnCoinImg learnNickel" alt="money" src={Nickel} />
                    </Col>
                    <Col className="learnCol">
                        <Image className="learnImg learnCoinImg learnDime" alt="money" src={Dime} />
                    </Col>
                    <Col className="learnCol">
                        <Image className="learnImg learnCoinImg learnQuarter" alt="money" src={Quarter} />
                    </Col>
                </Row>
                <div>
                    
                </div>
                <Row>
                    <Col className="learnCol">
                        <Image className="learnImg learnBillImg learnDollar" alt="money" src={Dollar} />
                    </Col>
                    <Col className="learnCol">
                        <Image className="learnImg learnBillImg learnFive" alt="money" src={Five} />
                    </Col>
                </Row>
                <Row className="middleRowBillsLearn">
                    <Col className="learnCol">
                        <Image className="learnImg learnBillImg learnTen" alt="money" src={Ten} />
                    </Col>
                    <Col className="learnCol">
                        <Image className="learnImg learnBillImg learnTwenty" alt="money" src={Twenty} />
                    </Col>
                </Row>
                <Row>
                    <Col className="learnCol">
                        <Image className="learnImg learnBillImg learnFifty" alt="money" src={Fifty} />
                    </Col>
                    <Col className="learnCol">
                        <Image className="learnImg learnBillImg learnHundred" alt="money" src={Hundred} />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}