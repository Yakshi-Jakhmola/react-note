import React, { useState } from "react";
import Accordion2 from "./Accordion2";
import Accordion3 from "./Accordion3";

const Accordion1 = () => {
    const [data, setdata] = useState(Accordion2);
    return(
        <>
            <section>
                {
                    data.map((curElem) =>{
                        const {id} = curElem;
                        return <Accordion3 key={id} {...curElem}/>;
                    })
                }
            </section>
        </>
    )
}
export default Accordion1;