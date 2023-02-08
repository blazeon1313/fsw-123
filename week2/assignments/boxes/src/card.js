// export function for card to APP.js

function Card(props) {
    return(
        <div className="container" style={{backgroundColor: props.bgColor, width: props.width}}>
            <div className="info">
                <h1>{props.info}</h1>
                <h3>{props.subtitle}</h3>
            </div>
            <div className="hello">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;