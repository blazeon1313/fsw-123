// Create a component RollDice that generates a random pair of dice

import React, { Component } from 'react';
import Die from './die'
import './RollDice.css'

class RollDice extends Component{
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props){
        super(props)
        this.setstate = {die1 : 'one', die2 : 'one', rolling : false};
        this.roll = this.roll.bind(this);
    }

    roll(){
        const newDie1 = this.props.sides[Math.floor(Math.random * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random * this.props.sides.length)];
        
        this.setstate({
            die1 : newDie1,
            die2 : newDie2,
            rolling: true
        })
        
        setTimeout(() => {
            this.setState({rolling: false})
        },1000);
    }
    
    render(){
        const {die1, die2, rolling} = this.state
        return(
            <div className="dice">
                <Die face={die1} rolling={rolling}/>
                <Die face={die2} rolling={rolling}/>
                <button className="button" disabled={this.state.rolling} onClick={this.roll}>
                    {this.state.rolling ? 'Rolling' : 'Roll Dice'}
                </button>
            </div>
        );
    }
}

export default RollDice