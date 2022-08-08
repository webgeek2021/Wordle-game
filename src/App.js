import React from "react";
import Grid from "./components/grid";
import '../src/style.css'
import Keyboard from "./components/keyboard";
import Finish from "./components/gameOver";
import {useSelector , useDispatch} from 'react-redux';
import {setAnswer} from './store/slices/location'
// import { wordList }from './rawMaterail/material'
import data from './wordData.js'

function App(){

    const dispatch = useDispatch();
  
    React.useEffect(()=>{
        console.log(data)
        let answer = data[Math.floor(Math.random()*data.length)]
        const sendData = {answer , data}
        dispatch(setAnswer(sendData))
    },[])
    const gameOver = useSelector((state)=>state.location.gameOver)
    return(
        <div className="app">
          
         <Grid />
         {gameOver === false ? <Keyboard/> : <Finish/>}
                    
        </div>    
    )
}

export default App