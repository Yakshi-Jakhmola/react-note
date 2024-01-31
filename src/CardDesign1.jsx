import React from "react";

function CardDesign1(props){
    return(
        <div>
            <div className="card_design">
                <div className="card_image">
                    <img src={props.imgsrc}/>
                </div>
                <div className="card_bottom">
                    <div className="card_heading">
                        <h2>{props.cardhead}</h2>
                    </div>
                    <div className="card_para">
                        <p>{props.cardpara}</p>
                    </div>
                    <div className="card_button">
                        <a href={props.cardbtn}>Watch Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDesign1;
