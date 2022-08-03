
import React from 'react'
import Row from './row'
import {board}  from '../rawMaterail/material'
function Grid(){
    const [grid,setboard] = React.useState(board)
    console.log(grid)
    const ground  = grid.map((gd,index)=>{
        console.log("Inde" , gd)
        return(
            <Row key={index} items={gd} />
        )
    })
    return(
        <div className='grid'>
            {ground}
        </div>
    )
}
export default Grid