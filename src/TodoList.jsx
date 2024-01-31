import React, { useState } from "react";
import './index.css';

const TodoList = () => {
    const [name, setName] = useState(0);

    const incNum = () =>{
        setName(name + 1);
    }
    const decNum =() => {
        if(name > 0){
            setName(name - 1);
        }
        else{
            alert('Negative Number Not Available')
            name(0);
        }
    }
    return(
        <>
            <div className="main_div"> 
                <div className="center_div">
                    <div className="heading_div">
                        <h1>{name}</h1>
                    </div>
                    <div className="button_div">
                        <button onClick={incNum}>Increment</button>
                        <button onClick={decNum}>Decrement</button>
                    </div>
                </div> 
            </div>
        </>
    )
}
export default TodoList;