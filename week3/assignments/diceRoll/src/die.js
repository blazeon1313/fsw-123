import React, {Component} from 'react'
import './die.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// attempt at using fontAwesome
class Die extends Component{
    render(){
	    const {face, rolling} = this.props
	    return (
			<div>
				<FontAwesomeIcon icon={`fa-dice-${face}`} className={`Die ${rolling && 'Die-shaking'}`} />
			</div >
		)
    }
}

export default Die