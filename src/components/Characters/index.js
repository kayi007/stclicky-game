import React from "react";
import "./style.css";
// import { url } from "inspector";

function Card(props) {
    return (
        <div className="charCard float-right" key={props.key} alt={props.name} style={{backgroundImage: `url(${props.image})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}} onClick={() => props.handleClicked(props.id)}>
            {/* <div className="img-container"> */}
                {/* <img className="img" key={props.key} alt={props.name} src={props.image} /> */}
            {/* </div> */}
        </div>
    );
}

export default Card;