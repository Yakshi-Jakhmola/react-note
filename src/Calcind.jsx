import React from 'react';
import {add,sub,mul,div} from './Calcfun';

function Calcind(){
    return(
        <>
        <ol>
        <li><p>This is a Use by Addition Function{add(44,4)}</p></li>
        <li><p>This is a Use by Subtract Function{sub(44,4)}</p></li>
        <li><p>This is a Use by Multiplication Function{mul(44,4)}</p></li>
        <li><p>This is a Use by Division Function{div(44,4)}</p></li>
        </ol>
        </>
    )
}
export default Calcind;