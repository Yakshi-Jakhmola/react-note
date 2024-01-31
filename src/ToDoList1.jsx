import React, { useState } from "react";
import Todolistcompo from "./Todolistcompo";

const ToDoList1 = () => {
    const [item, setItem] = useState("");
    const [addItem, setAddItem] = useState([]);
    const itemEvent = (event) =>{
        setItem(event.target.value);
    };
    const addEvent = () =>{
        setAddItem((oldItems) =>{
            return [...oldItems, item];
        });
        setItem("");
    }
    const deleteEvent = (id) => {
        console.log("deleted");
        setItem((oldItems) =>{
            return  oldItems.filter(_,index)
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="head_div">
                    <h2>ToDo List</h2>
                </div>
                <div className="input_div">
                    <input type="text" placeholder="Add a Items" onChange={itemEvent} value={item}/>
                </div>
                <div className="addbutton">
                    <button onClick={addEvent}>+</button>
                </div>
                <div className="ul-list">
                    <ol>
                        {addItem.map((itemMake, index) =>{
                            return <Todolistcompo  key={index} id={index} onSelect={deleteEvent} text={itemMake}/>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default ToDoList1;