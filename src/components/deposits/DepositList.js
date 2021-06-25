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
import Dollar from "./images/Dollar.png"
import Five from "./images/Five.jpeg"
import Ten from "./images/Ten.jpeg"
import Twenty from "./images/Twenty.jpeg"
import Fifty from "./images/Fifty.jpeg"
import Hundred from "./images/Hundred.jpeg"
import PiggyBank from "./images/PiggyBank.png"
import { DepositEventContext } from "../deposits/DepositProvider"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import "./Deposit.css"

export const DepositList = () => {

    const { getProfile, profile } = useContext(ProfileContext)
    const { createDeposit } = useContext(DepositEventContext)
    const [ newDeposit, setNewDeposit ] = useState({
        name: "",
        date: "",
        sound_effect: [],
        currency: []
    })

    const [ currencyCount, setCurrencyCount ] = useState({
        penny: 0,
        nickel: 0,
        dime: 0,
        quarter: 0,
        dollar: 0,
        five: 0,
        ten: 0,
        twenty: 0,
        fifty: 0,
        hundred: 0
    })

    const [ denominationTotal, setDenominationTotal ] = useState({
        penny: 0,
        nickel: 0,
        dime: 0,
        quarter: 0,
        dollar: 0,
        five: 0,
        ten: 0,
        twenty: 0,
        fifty: 0,
        hundred: 0
    })

    const [ total, setTotal ] = useState(0)

    const history = useHistory()

    let object = {
        penny: .01,
        nickel: .05,
        dime: .10,
        quarter: .25,
        dollar: 1,
        five: 5,
        ten: 10,
        twenty: 20,
        fifty: 50,
        hundred: 100
    }

    const handleIncrement = (event) => {
        const denominationCount = { ...currencyCount }
        const moneyTotal = { ...denominationTotal }
        let counterValue = ++event.target.value
        denominationCount[event.target.name] = parseInt(counterValue)
        let math = counterValue * object[event.target.name]
        moneyTotal[event.target.name] = parseFloat(math.toFixed(2))
        setCurrencyCount(denominationCount)
        setDenominationTotal(moneyTotal)
        let objectTotals = Object.values(moneyTotal)
        let total = objectTotals.reduce((accumulator, currentValue) => accumulator + currentValue)
        setTotal(parseFloat(total.toFixed(2)))
    }

    
    const handleDecrement = (event) => {
        if (event.target.value > 0){
            const denominationCount = { ...currencyCount }
            const moneyTotal = { ...denominationTotal }
            let counterValue = --event.target.value
            denominationCount[event.target.name] = parseInt(counterValue)
            let math = counterValue * object[event.target.name]
            moneyTotal[event.target.name] = parseFloat(math.toFixed(2))
            setCurrencyCount(denominationCount)
            setDenominationTotal(moneyTotal)
            let objectTotals = Object.values(moneyTotal)
            let total = objectTotals.reduce((accumulator, currentValue) => accumulator + currentValue)
            setTotal(parseFloat(total.toFixed(2)))
        }
    }

    const handleInputChange = (event) => {
        const addName = { ...newDeposit }
        addName[event.target.id] = event.target.value
        setNewDeposit(addName)
    }

    const saveDeposit = () => {
        createDeposit({
            name: newDeposit.name,
            date: newDeposit.date,
            total: total,
            sound_effect: newDeposit.sound_effect,
            currencyCount: currencyCount
        })
        .then(() => history.push("/"))
    }

    useEffect(() => {
        getProfile()
    }, [])

    let totalDeposits = profile?.deposit_events?.reduce((total, event) => total+parseFloat(event.total), 0)
    // total is the accumulator which is what everything is going to be added to in the loop
    // zero at the end is telling total to start from 0
    // event.total is accessing the values we want to add together, parseFloat converts from strings to numbers with decimals
    let totalWithdrawals = profile?.withdrawal_events?.reduce((total, event) => total+parseFloat(event.total), 0)
    let allDeposits = profile?.deposit_events?.reduce((total, event) => total+parseFloat(event.total), 0)
    let currentSaved = allDeposits - totalWithdrawals

    return (
        <>
        <section className="depositList">
            <div className="imageDiv">
                <img className="milo image" alt="milo profile" src={Milo}></img>
            </div>
                <h1 className="impact">{profile.saver?.user.first_name} has saved ${currentSaved.toFixed(2)}!!</h1>
                <h2 className="impact">How much money would you like to deposit?</h2>
                <div className="depositHeaderDiv">
                    <div className="depositPiggyDiv">
                        <img className="depositPiggy" src={PiggyBank}></img>
                    </div>
                    <div className="currentDepositDiv">
                        <label htmlFor="name" className="nameInputLabel">Name Me: </label>
                        <input type="text" id="name" defaultValue={newDeposit.name}
                                required autoFocus placeholder="Name" 
                                onChange={handleInputChange}>
                        </input>
                        <div className="totalDepositDiv">
                            <h3>Total Deposit: $</h3>
                            <h3 className="currentDeposit">{parseFloat(total).toFixed(2)}</h3>
                            <h3> !!</h3>
                        </div>
                    </div>
            </div>
            <div className="saveCancelButtonDiv">
                <button className="saveDepositButton button" onClick={saveDeposit}>Save Deposit</button>
                <button className="cancelDepositButton button" onClick={() => history.push("/")}>Cancel</button>
            </div>
            <Carousel className="carousel">
                <Carousel.Item interval={50000000}>
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
                </Carousel.Item>
                <Carousel.Item interval={50000000}>
                        <Image className="currencyImg coinImg" src={Nickel} roundedCircle />
                        <section className="counterSection">
                            <label htmlFor="nickel">Nickel</label>
                            <div className="counterDiv">
                                <button onClick={handleDecrement} type="button" name="nickel" value={currencyCount.nickel} className="button-minus counterMinus" data-field="quantity">-</button>
                                <input type="number" id="nickel" step="1" max="500"
                                        value={currencyCount.nickel} name="quantity" 
                                        className="quantity-field" placeholder="0">
                                </input>
                                <button onClick={handleIncrement} type="button" name="nickel" value={currencyCount.nickel} className="button-plus counterPlus" data-field="quantity">+</button>
                            </div>
                        </section>
                </Carousel.Item>
                <Carousel.Item interval={50000000}>
                        <Image className="currencyImg coinImg" src={Dime} roundedCircle />
                        <section className="counterSection">
                            <label htmlFor="dime">Dime</label>
                            <div className="counterDiv">
                                <button onClick={handleDecrement} type="button" name="dime" value={currencyCount.dime} className="button-minus counterMinus" data-field="quantity">-</button>
                                <input type="number" id="dime" step="1" max="500"
                                        value={currencyCount.dime} name="quantity" 
                                        className="quantity-field" placeholder="0">
                                </input>
                                <button onClick={handleIncrement} type="button" name="dime" value={currencyCount.dime} className="button-plus counterPlus" data-field="quantity">+</button>
                            </div>
                        </section>
                </Carousel.Item>
                <Carousel.Item interval={50000000}>
                        <Image className="currencyImg coinImg" src={Quarter} roundedCircle />
                        <section className="counterSection">
                            <label htmlFor="quarter">Quarter</label>
                            <div className="counterDiv">
                                <button onClick={handleDecrement} type="button" name="quarter" value={currencyCount.quarter} className="button-minus counterMinus" data-field="quantity">-</button>
                                <input type="number" id="quarter" step="1" max="500"
                                        value={currencyCount.quarter} name="quantity" 
                                        className="quantity-field" placeholder="0">
                                </input>
                                <button onClick={handleIncrement} type="button" name="quarter" value={currencyCount.quarter} className="button-plus counterPlus" data-field="quantity">+</button>
                            </div>
                        </section>
                    </Carousel.Item>
                    <Carousel.Item interval={50000000}>
                            <Image className="currencyImg billImg" src={Dollar} />
                            <section className="counterSection">
                                <label htmlFor="dollar">Dollar</label>
                                <div className="counterDiv">
                                    <button onClick={handleDecrement} type="button" name="dollar" value={currencyCount.dollar} className="button-minus counterMinus" data-field="quantity">-</button>
                                    <input type="number" id="dollar" step="1" max="500"
                                            value={currencyCount.dollar} name="quantity" 
                                            className="quantity-field" placeholder="0">
                                    </input>
                                    <button onClick={handleIncrement} type="button" name="dollar" value={currencyCount.dollar} className="button-plus counterPlus" data-field="quantity">+</button>
                                </div>
                            </section>
                    </Carousel.Item>
                    <Carousel.Item interval={50000000}>
                            <Image className="currencyImg billImg" src={Five} />
                            <section className="counterSection">
                            <label htmlFor="five">Five</label>
                            <div className="counterDiv">
                                <button onClick={handleDecrement} type="button" name="five" value={currencyCount.five} className="button-minus counterMinus" data-field="quantity">-</button>
                                <input type="number" id="five" step="1" max="500"
                                        value={currencyCount.five} name="quantity" 
                                        className="quantity-field" placeholder="0">
                                </input>
                                <button onClick={handleIncrement} type="button" name="five" value={currencyCount.five} className="button-plus counterPlus" data-field="quantity">+</button>
                            </div>
                        </section>
                    </Carousel.Item>
                    <Carousel.Item interval={50000000}>
                            <Image className="currencyImg billImg" src={Ten} />
                            <section className="counterSection">
                                <label htmlFor="ten">Ten</label>
                                <div className="counterDiv">
                                    <button onClick={handleDecrement} type="button" name="ten" value={currencyCount.ten} className="button-minus counterMinus" data-field="quantity">-</button>
                                    <input type="number" id="ten" step="1" max="500"
                                            value={currencyCount.ten} name="quantity" 
                                            className="quantity-field" placeholder="0">
                                    </input>
                                    <button onClick={handleIncrement} type="button" name="ten" value={currencyCount.ten} className="button-plus counterPlus" data-field="quantity">+</button>
                                </div>
                            </section>
                    </Carousel.Item>
                    <Carousel.Item interval={50000000}>
                            <Image className="currencyImg billImg" src={Twenty} />
                            <section className="counterSection">
                                <label htmlFor="twenty">Twenty</label>
                                <div className="counterDiv">
                                    <button onClick={handleDecrement} type="button" name="twenty" value={currencyCount.twenty} className="button-minus counterMinus" data-field="quantity">-</button>
                                    <input type="number" id="twenty" step="1" max="500"
                                            value={currencyCount.twenty} name="quantity" 
                                            className="quantity-field" placeholder="0">
                                    </input>
                                    <button onClick={handleIncrement} type="button" name="twenty" value={currencyCount.twenty} className="button-plus counterPlus" data-field="quantity">+</button>
                                </div>
                            </section>
                    </Carousel.Item>
                    <Carousel.Item interval={50000000}>
                            <Image className="currencyImg billImg" src={Fifty} />
                            <section className="counterSection">
                                <label htmlFor="fifty">Fifty</label>
                                <div className="counterDiv">
                                    <button onClick={handleDecrement} type="button" name="fifty" value={currencyCount.fifty} className="button-minus counterMinus" data-field="quantity">-</button>
                                    <input type="number" id="fifty" step="1" max="500"
                                            value={currencyCount.fifty} name="quantity" 
                                            className="quantity-field" placeholder="0">
                                    </input>
                                    <button onClick={handleIncrement} type="button" name="fifty" value={currencyCount.fifty} className="button-plus counterPlus" data-field="quantity">+</button>
                                </div>
                            </section>
                    </Carousel.Item>
                    <Carousel.Item interval={50000000}>
                            <Image className="currencyImg billImg" src={Hundred} />
                            <section className="counterSection">
                                <label htmlFor="hundred">Hundred</label>
                                <div className="counterDiv">
                                    <button onClick={handleDecrement} type="button" name="hundred" value={currencyCount.hundred} className="button-minus counterMinus" data-field="quantity">-</button>
                                    <input type="number" id="hundred" step="1" max="500"
                                            value={currencyCount.hundred} name="quantity" 
                                            className="quantity-field" placeholder="0">
                                    </input>
                                    <button onClick={handleIncrement} type="button" name="hundred" value={currencyCount.hundred} className="button-plus counterPlus" data-field="quantity">+</button>
                                </div>
                            </section>
                    </Carousel.Item>
            </Carousel>
        </section>
        </>
    )
}
