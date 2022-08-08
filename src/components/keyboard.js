import React from "react";
import { useDispatch} from "react-redux";
import {handleClick, handleEnter, handleErase} from '../store/slices/location'
import {row1 , row2 , row3} from '../rawMaterail/material'
function Keyboard(){

    const dispatch = useDispatch()
    const Row1 = row1.map((key,index)=>{
        return(
            <div className="keycell" key={index} onClick={()=>dispatch(handleClick(key))}>{key}</div>
        )
    })
    const Row2 = row2.map((key,index)=>{
        return(
            <div className="keycell" key={index}onClick={()=>dispatch(handleClick(key))}>{key}</div>
        )
    })
    const Row3 = row3.map((key,index)=>{
        return(
            <div className="keycell" key={index}onClick={()=>dispatch(handleClick(key))}>{key}</div>
        )
    })

    const handleKeyPress = React.useCallback((e)=>{
        // console.log(e)
        console.log(e);
        if(e.key === 'Enter')
        {
            dispatch(handleEnter());
        }
        else if(e.key === 'Backspace'){
            dispatch(handleErase());
        }
        else{
            console.log(e.key)
            dispatch(handleClick(e.key));
        }
    })
    React.useEffect(()=>{
        document.addEventListener("keydown",handleKeyPress)
        console.log("HELO")
        return ()=>{ document.removeEventListener("keydown",handleKeyPress)}
    },[handleKeyPress])





    return(
        <div className="keyboard" onKeyDown={handleKeyPress}>  
            <div className="row-1">{Row1}</div>
            <div className="row-1">{Row2}</div>
            <div className="row-3">
            <div className="enter" onClick={()=>dispatch(handleEnter())}>Enter</div>
            <div className="row-1">{Row3}</div>
            <div className="erase" onClick={()=>dispatch(handleErase())}>Erase</div>
            </div>
        </div>
    )
}
export default Keyboard