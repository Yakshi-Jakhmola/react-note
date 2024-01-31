import React, { useState } from "react";

const Accordion3 = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return(
        <>
            <div className="accordion_card">
                <div className="top_card">
                    <div className="ques_open">
                        <h6 onClick={() => setShow(!show)}>{show? "-" : "+"}  </h6>
                    </div>
                    <div className="ques_head">
                        <h2>{question}</h2>
                    </div>
                </div>
                {show &&
                    <div className="bottom_card">
                        <div className="bottom_para">
                            <p>{answer}</p>
                        </div>
                        <div className="ques_close">
                            <h6> - </h6>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
export default Accordion3;