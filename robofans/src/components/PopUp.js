import react from "react";
import "./PopUp.css";

const PopUp = (props) =>{
    return(
        <div className="popup--back">
            <div className="popup--content">
                <div className="popup--close" onClick={props.closePopup} >x</div>
            </div>
        </div>
    )
}

export default PopUp;