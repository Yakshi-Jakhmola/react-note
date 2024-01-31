import React from "react";

const Note = (props) => {
    const  deletNote = () => {
        props.deletItem(props.id);
    }
    return(
        <>
            <div className="note_div">
                <h4>{props.title}</h4>
                <p>{props.contain}</p>
                <i class="fa-solid fa-trash" id="circle-delete" onClick={deletNote}></i>
            </div>
        </>
    )
}
export default Note;