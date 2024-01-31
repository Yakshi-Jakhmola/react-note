// This line imports the React library and the useState hook from React.
import React, { useState } from "react";

// This declares a functional component named Createnote which takes props as its argument.
const Createnote = (props) => {
    // This line initializes a state variable note using the useState hook. note is an object with two properties: title and contain, both initially set to an empty string. setNote is a function used to update the state variable note.
    const [note, setNote] = useState({
        title: "",
        contain: "",
    });
    // This defines a function inputEvent which takes an event as its argument. Inside the function, it extracts the name and value from the target of the event (usually an input field). It then uses the setNote function to update the note state, merging the previous state with the new value for the specified name. It also logs the current state of note to the console.
    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setNote((prevData) =>{
            return{
                ...prevData,
                [name]: value,
            };
        });
        console.log(note);
    }
    // This defines a function addEvent which is triggered when a user wants to add a note. It calls the passNote function passed through props (presumably from the parent component) with the current note as an argument. Then it resets the note state to its initial empty values.
    const addEvent = () =>{
        props.passNote(note)
        setNote({
            title: "",
            contain: "",
        });
    }
    return(
        <>
            <div className="main_note">
                <form>
                    <input 
                    type="text" 
                    placeholder="Title" 
                    value={note.title} 
                    onChange={inputEvent} 
                    name="title"/>
                    <textarea 
                    placeholder="Write a note....." 
                    value={note.contain} 
                    onChange={inputEvent} 
                    name="contain"></textarea>
                    <i class="fa-solid fa-plus" id="circle-plus" onClick={addEvent}></i>
                </form>
            </div>
        </>
    )
}
export default Createnote;