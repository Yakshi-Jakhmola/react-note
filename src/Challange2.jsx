import React from "react";

const userName = "Yakshi Jakhmola";
const currentTime = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString();
function Challange2(){
    return(
        <>
        <h1>Hello {userName}, How Are You?</h1>
        <p>Current  Date is = {currentDate}</p>
        <p>Current Time is = {currentTime}</p>
        </>
    )
}
export default Challange2