import React, { useState } from "react";
import Header from "./Appclone/Header";
import Createnote from "./Appclone/Createnote";
import Note from "./Appclone/Note";
import Footer from "./Appclone/Footer";
import CalC from "./Task/Calculator/calc";
const App = () =>{
	// This line initializes a state variable addItem using the useState hook. addItem represents an array where each element is a note object. setAddItem is a function used to update the state variable addItem
	const [addItem, setAddItem] = useState([]);
	const addNote = (note) =>{
		setAddItem((prevData) =>{
			return[...prevData, note];
		});
		console.log(note);
	};
	const onDelete = (id) =>{
		setAddItem((olddata) => 
			olddata.filter((currdData, indx) =>{
				return indx !== id;
			})
		);
	}
	return(
		<>
		<CalC/>
		</>
	)
}
export default App;