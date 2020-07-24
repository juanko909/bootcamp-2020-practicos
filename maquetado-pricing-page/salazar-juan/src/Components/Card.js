import React from "react";
import "../Style/Card.css"

class Card extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-5">
                    <h1>Pricing</h1>
                    <p>Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.</p>
                </div>
            </div>
        )
    }
}
export default Card;

