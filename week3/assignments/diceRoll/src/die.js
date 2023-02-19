//import React, {Component} from 'react'
import React from 'react';
import './die.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Tried this method of using FontAwesome but could not get it to work properly

// class Die extends Component{
//     render(){
// 	    const {face, rolling} = this.props
// 	    return (
// 			//attempt at using FontAwesome
// 			<div>
// 				<FontAwesomeIcon icon={[`fas fa-dice-${face}`]} className={`Die ${rolling && 'Die-shaking'}`} />
// 			</div >
// 		)
//     }
// }

// used FontAwesome for the Die faces
const Die =({face, rolling}) => {
	return <i className={`Die fas fa-dice-${face} ${rolling && "Die-shaking"}`} />
};

export default Die;