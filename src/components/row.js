
import React from 'react'
import { useSelector } from 'react-redux'
import Cell from './cell.js'
function Row(props){
    
    const arr = props.items
    console.log("ARR")
    
    console.log(typeof(arr))
    let cindex = 0;
    const display = arr.map((cell,index)=>{
        return(
            <Cell key={index}  val={cell} cindex={cindex++} rindex={props.rindex}/>
        )
    })
    console.log("DISPLAY")
    console.log(display)
    return(
        <>
            <div className='row'>
                {display}
            </div>
        </>
    )
}
export default Row;