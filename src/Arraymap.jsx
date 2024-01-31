import React from "react";

const Arraymap = () =>{
    const employee = [
        {id: 1, Name: "Yakshi Jakhmola", Age: 21, Company: "Brandingwaale"},
        {id: 2, Name: "Yogesh Negi", Age: 21, Company: "Locad"},
        {id: 3, Name: "Divyanshu Arya", Age: 22, Company: "Brandingwaale"},
        {id: 4, Name: "Kalpana Patwal", Age: 21, Company: "Brandingwaale"},
        {id: 5, Name: "Vicky Koshal", Age: 21, Company: "Brandingwaale"},
        {id: 6, Name: "Khemchand", Age: 21, Company: "Brandingwaale"},
        {id: 7, Name: "Pragati Jakhmola", Age: 18, Company: "Brandingwaale"},
        {id: 8, Name: "Dhuruv", Age: 18, Company: "Brandingwaale :smile"}
    ]
    return(
        <div>
            <h1>Using Map Function Collect Employee Data</h1>
            <ul>{employee.map((cvalue,index)=>(
                <li>{cvalue.id},{cvalue.Name}, {cvalue.Age},{cvalue.Company}</li>
            ))}</ul>
        </div>
    )
}
export default Arraymap;