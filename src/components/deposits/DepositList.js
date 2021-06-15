import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "../profile/ProfileProvider"
// import { Deposit } from "./Deposit"
import PigPlus from "../profile/PigPlus.png"
import Milo from "../profile/Milo.png"
import { DepositEventContext } from "../deposits/DepositProvider"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Deposit.css"

export const DepositList = () => {

    const { getProfile, profile } = useContext(ProfileContext)
    const [ newDeposit, setNewDeposit ] = useState([])

    const history = useHistory()

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
        <section className="depositList">
            <div className="imageDiv">
                <img className="milo image" alt="milo profile picture" src={Milo}></img>
            </div>
            <div className="headerDiv">
                <h1>{profile.saver?.user.first_name} has saved {"{total goes here}"}!!</h1>
                <h3>Welcome {profile.saver?.user.first_name}!!</h3>
            </div>
            <Container className="coinContainer">
                <Row>
                    <Col xs={6} md={4}>
                    <Image className="carouselImg" src={Milo} roundedCircle />
                    <p>Quarter</p>
                    <div className="counterDiv">
                        <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                        <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                        <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                    </div>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image className="carouselImg" src={Milo} roundedCircle />
                    <p>Dime</p>
                    <div className="counterDiv">
                        <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                        <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                        <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                    </div>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image className="carouselImg" src={Milo} roundedCircle />
                    <p>Nickel</p>
                    <div className="counterDiv">
                        <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                        <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                        <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                    </div>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image className="carouselImg" src={Milo} roundedCircle />
                    <p>Penny</p>
                    <div className="counterDiv">
                        <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                        <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                        <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Container className="dollarContainer">
                <Row>
                    <Col xs={6} md={4}>
                        <Image className="carouselImg" src={Milo} roundedCircle />
                            <p>One Dollar</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="carouselImg" src={Milo} roundedCircle />
                            <p>Five Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="carouselImg" src={Milo} roundedCircle />
                            <p>Ten Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="carouselImg" src={Milo} roundedCircle />
                            <p>Twenty Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="carouselImg" src={Milo} roundedCircle />
                            <p>Fifty Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="carouselImg" src={Milo} roundedCircle />
                            <p>One Hundred Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}