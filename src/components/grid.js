
import React from 'react'
import Row from './row'
import {board}  from '../rawMaterail/material'
import { useSelector, useDispatch } from 'react-redux'
function Grid(){
    const grid = useSelector((state)=>state.location.board)
    
    console.log("GRID")
    console.log(grid)
    const ground  = grid.map((gd,index)=>{
        return(
            <Row key={index} items={gd} rindex={index}/>
        )
    })
    return(
        <div className='grid'>
            {ground}
        </div>
    )
}
export default Grid