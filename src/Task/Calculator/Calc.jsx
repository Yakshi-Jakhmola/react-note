import React, { useState } from "react";
import "../Calculator/Calc.css"
const CalC = () =>{
    const [input, setInput] = useState("");
    console.log(input);
    const handleClick = (event)=> {
        setInput(input.concat(event.target.name));
    }
    const clearInput = () => {
        setInput('');
    };
    const equalInput =() =>{
        setInput(eval(input).toString());
    }
    return(
        <>
            <div className="calc_box">
                <input type="text" value={input} className="input_design"/>
                <div className="calc_item">
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="Del" onClick={handleClick}>Del</button>

                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="+" onClick={handleClick}>+</button>

                <button name="3" onClick={handleClick}>3</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="-" onClick={handleClick}>-</button>

                <button name="." onClick={handleClick}>.</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="/" onClick={handleClick}>/</button>
                <button name="*" onClick={handleClick}>*</button>

                <button name="Reset" onClick={clearInput} className="reset">Reset</button>
                <button name="=" onClick={equalInput} className="equal">=</button>
                </div>
            </div>
        </>
    )
}
export default CalC;