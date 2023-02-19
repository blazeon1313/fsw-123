// Create a component RollDice that generates a random pair of dice

//import { Component } from "react";
import React, { useState } from 'react'
import Die from "./die";
import "./RollDice.css";

// tried to get this code to work but never could get the dice to show on the screen
// I abandoned this try and went more simple to me which ended up working

// --------------------------------------------------------------------------

// class RollDice extends Component {
//     static defaultProps = {
//         sides: ["one", "two", "three", "four", "five", "six"],
//     };
    
//     constructor(props) {
//         super(props);

//         this.state = { 
//             die1: "one", 
//             die2: "one", 
//             rolling: false 
//         };
//         this.roll = this.roll.bind(this);
//     }

//     roll() {
//         // changing state on click
//         const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
//         const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
//         this.setState({ die1: newDie1, die2: newDie2, rolling: true });
        
//         // set timeout for roll or it goes infinite
//         setTimeout(() => {
//             this.setState({ rolling: false });
//         }, 1000);
//     }
//     render() {
//         const button = this.state.rolling ? 'RollDice-rolling' : ''
//         const {die1, die2, rolling} = this.state
//         return (
//             <div className="RollDice">
//                 <div className="RollDice-container">
//                     <Die face={die1} rolling={rolling}/>
//                     <Die face={die2} rolling={rolling}/>
//                 </div>
//                 <button className={button} onClick={this.roll} disabled={rolling}>
//                     {this.state.rolling ? "Rolling..." : "Roll Dice!"}
//                 </button>
//             </div>
//         );
//     }
// }

//----------------------------------------------------------------

const RollDice = ({ sides }) => {
    const [state, setState] = useState({
        die1: "one", 
        die2: "four", 
        rolling: false
    });

    const {die1, die2, rolling} = state;

    const roll = () => {
        // changing state on click
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        setState({ die1: newDie1, die2: newDie2, rolling: true });
        
        // set timeout for roll or it goes infinite
        setTimeout(() => {
            setState((prevState) =>({...prevState, rolling: false }));
        }, 1000);
    }

    return (
        <>
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={die1} rolling={rolling} />
                    <Die face={die2} rolling={rolling} />
                </div>
                <button onClick={roll} disabled={rolling}>
                    {rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>

        </>
    )
}

RollDice.defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
};

export default RollDice;