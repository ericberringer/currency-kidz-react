import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "../profile/ProfileProvider"
// import { Deposit } from "./Deposit"
import PigPlus from "../profile/PigPlus.png"
import Milo from "../profile/Milo.png"
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
import { DepositEventContext } from "../deposits/DepositProvider"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Deposit.css"

export const DepositList = () => {

    const { getProfile, profile } = useContext(ProfileContext)
    const [ newDeposit, setNewDeposit ] = useState([])

    const [ currencyCount, setCurrencyCount ] = useState({
        penny: 0,
        nickel: 0,
        dime: 0,
        quarter: 0,
        one: 0,
        five: 0,
        ten: 0,
        twenty: 0,
        fifty: 0,
        hundred: 0,
        total: 0
    })

    const history = useHistory()

    const handleIncrement = (event) => {
        const denominationCount = { ...currencyCount }
        let counterValue = ++event.target.value
        denominationCount[event.target.name] = counterValue
        setCurrencyCount(denominationCount)
    }

    
    const handleDecrement = (event) => {
        if (event.target.value > 0){
            const denominationCount = { ...currencyCount }
            let counterValue = --event.target.value
            denominationCount[event.target.name] = counterValue
            setCurrencyCount(denominationCount)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
        <section className="depositList">
            <div className="imageDiv">
                <img className="milo image" alt="milo profile" src={Milo}></img>
            </div>
            <div className="headerDiv">
                <h1>{profile.saver?.user.first_name} has saved {"{total goes here}"}!!</h1>
                <img className="depositPiggy" src={PiggyBank}></img>
                <div className="currentDepositDiv">
                <h3>Total Deposit: $</h3>
                <h3 className="currentDeposit">{"3.50"}</h3>
                <h3> !!</h3>
                </div>
            </div>
            <Container className="coinContainer currencyContainer">
                <Row>
                    <Col>
                    <Image className="currencyImg coinImg" src={Penny} roundedCircle />
                    <section className="counterSection">
                        <label htmlFor="penny">Penny</label>
                        <div className="counterDiv">
                            <button onClick={handleDecrement} type="button" name="penny" value={currencyCount.penny} className="button-minus counterMinus" data-field="quantity">-</button>
                            <input type="number" id="penny" step="1" max="500"
                                    value={currencyCount.penny} name="quantity" 
                                    className="quantity-field" placeholder="0">
                            </input>
                            <button onClick={handleIncrement} type="button" name="penny" value={currencyCount.penny} className="button-plus counterPlus" data-field="quantity">+</button>
                        </div>
                    </section>
                    </Col>
                    <Col>
                    <Image className="currencyImg coinImg" src={Nickel} roundedCircle />
                    <p>Dime</p>
                    <div className="counterDiv">
                            <button onClick={handleDecrement} type="button" name="nickel" value={currencyCount.nickel} className="button-minus counterMinus" data-field="quantity">-</button>
                            <input type="number" id="penny" step="1" max="500"
                                    value={currencyCount.nickel} name="quantity" 
                                    className="quantity-field" placeholder="0">
                            </input>
                            <button onClick={handleIncrement} type="button" name="nickel" value={currencyCount.nickel} className="button-plus counterPlus" data-field="quantity">+</button>
                    </div>
                    </Col>
                </Row>
                <Row>       
                    <Col>
                    <Image className="currencyImg coinImg" src={Dime} roundedCircle />
                    <p>Nickel</p>
                    <div className="counterDiv">
                        <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                        <input type="number" id="dime" step="1" max="" name="quantity" className="quantity-field" placeholder="0"></input>
                        <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                    </div>
                    </Col>
                    <Col>
                    <Image className="currencyImg coinImg" src={Quarter} roundedCircle />
                    <p>Penny</p>
                    <div className="counterDiv">
                        <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                        <input type="number" id="quarter" step="1" max="" name="quantity" className="quantity-field" placeholder="0"></input>
                        <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Container className="dollarContainer currencyContainer">
                <Row>
                    <Col>
                        <Image className="currencyImg billImg" src={Dollar} />
                            <p>One Dollar</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" id="dollar" step="1" max="" name="quantity" className="quantity-field" placeholder="0"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                    <Col>
                        <Image className="currencyImg billImg" src={Five} />
                            <p>Five Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" id="five" step="1" max="" name="quantity" className="quantity-field" placeholder="0"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image className="currencyImg billImg" src={Ten} />
                            <p>Ten Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" id="ten" step="1" max="" name="quantity" className="quantity-field" placeholder="0"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                    <Col>
                        <Image className="currencyImg billImg" src={Twenty} />
                            <p>Twenty Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" id="twenty" step="1" max="" name="quantity" className="quantity-field" placeholder="0"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image className="currencyImg billImg" src={Fifty} />
                            <p>Fifty Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" id="fifty" step="1" max="" name="quantity" className="quantity-field" placeholder="0"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                    <Col>
                        <Image className="currencyImg billImg" src={Hundred} />
                            <p>One Hundred Dollars</p>
                            <div className="counterDiv">
                                <input type="button" value="-" className="button-minus counterMinus" data-field="quantity"></input>
                                <input type="number" id="hundred" step="1" max="" name="quantity" className="quantity-field" placeholder="0"></input>
                                <input type="button" value="+" className="button-plus counterPlus" data-field="quantity"></input>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}