import React from "react";
import {useSelector} from 'react-redux'

function Cell(props){

    const Board = useSelector((state)=>state.location.board)

    let ans  = useSelector((state)=>state.location.answer);
   
    let r = useSelector((state)=>state.location.row)
    let ans_arr = ans.split("")
    
    const i = props.rindex
    const j = props.cindex
    const correct =props.rindex !== r &&  (Board[i][j] === ans_arr[j]);

    const almost = props.rindex !== r && !correct && Board[i][j] !== "" && ans_arr.includes(Board[i][j])
    
    const style = props.rindex !== r && Board[i][j] != "" ? correct ? "green" : almost ? "yellow"  : "normal" : ""

    return(
        <>
            <div className="cell" id={style}>{props.val}</div>
        </>
    )
}
export default Cell