
import React from 'react'
import {useSelector ,useDispatch} from 'react-redux';
import {playAgain} from '../store/slices/location'
function GameOver(){
    
    let winner = useSelector((state)=>state.location.winner);
    let correct = useSelector((state)=>state.location.answer);
    correct = correct.toUpperCase();
    const dispatch = useDispatch();
    return(
        <div className='gameOver'>
            <h2 className='result'>{winner ? 'Hurray You Won ' : ' You Lost ' }  </h2>
            <div>Correct Word is  {correct}</div>
            <button  className="btn" onClick={()=>dispatch(playAgain())}>Play Again</button>
        </div>
    )
}

export default GameOver;