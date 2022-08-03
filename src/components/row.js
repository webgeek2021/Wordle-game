import React from 'react'
import Cell from './cell.js'
function Row(props){
    const [cellsArr,setcellArr] = React.useState(props.items)
    
    const display = cellsArr.map((cell,index)=>{
        return(
            <Cell key={index}  val={cell} />
        )
    })
    return(
        <>
            <div className='row'>
                {display}
            </div>
        </>
    )
}
export default Row;