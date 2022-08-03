import React from "react";
import {row1 , row2 , row3} from '../rawMaterail/material'
function Keyboard(){

    const handleClick = ()=>{
        console.log("Click")
    }
    
    const Row1 = row1.map((key,index)=>{
        return(
            <div className="keycell" key={index} onClick={handleClick}>{key}</div>
        )
    })
    const Row2 = row2.map((key,index)=>{
        return(
            <div className="keycell" key={index}onClick={handleClick}>{key}</div>
        )
    })
    const Row3 = row3.map((key,index)=>{
        return(
            <div className="keycell" key={index}onClick={handleClick}>{key}</div>
        )
    })
    return(
        <div className="keyboard">  
            <div className="row-1">{Row1}</div>
            <div className="row-1">{Row2}</div>
            <div className="row-3">
            <div className="enter">Enter</div>
            <div className="row-1">{Row3}</div>
            <div className="erase">Erase</div>
            </div>
        </div>
    )
}
export default Keyboard