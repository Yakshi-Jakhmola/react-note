import React from "react";
import ReactDOM from "react";
import CardDesign1 from "./CardDesign1";
import sData from './sData'

function Ncard(val){
    return(
        <>
        <CardDesign1 
            imgsrc = {val.imgsrc}
            cardhead = {val.cardhead}
            cardpara = {val.cardpara}
            cardbtn = {val.cardbtn}
        />
        </>
    );
}
export default Ncard;