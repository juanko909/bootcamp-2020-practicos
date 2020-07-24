import React from "react";
import "../Style/Colum.css"

class Colum extends React.Component{
    render(){
        return(
            <div className=" xs-12 sm-6 md-4">
                <div>
                    <div className="mui-card">
                        <div className="mui-cardHead">
                            <span class="Free"> Free</span>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}
export default Colum;