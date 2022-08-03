import React from "react";

function Cell(props){
    return(
        <>
            <div className="cell" >{props.val}</div>
        </>
    )
}
export default Cell