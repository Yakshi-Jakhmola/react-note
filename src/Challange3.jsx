
import React from 'react';
import ReactDOM  from 'react';

let currentdate = new Date(2024, 1, 8, 16);
currentdate = currentdate.getHours();

let greetings = "";
const colorstyle = { };
if(currentdate >=1 && currentdate < 12){
    greetings ="Good Morning";
    colorstyle.color = "blue";
}
else if (currentdate >= 12 && currentdate < 18){
    greetings ="Good Afternoon";
    colorstyle.color = 'orange';
}
else{
    greetings ="Good Night";
    colorstyle.color = 'black';
}
function Challange3(){
    return(
        <>
            <h1>Sir / Madam <span style={colorstyle}>{greetings}</span></h1>
        </>
    )
}

export default Challange3;