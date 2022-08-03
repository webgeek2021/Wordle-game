import React from "react";
import Grid from "./components/grid";
import '../src/style.css'
import Keyboard from "./components/keyboard";
function App(){

    return(
        <div className="app">
            <Grid />
            <Keyboard/>
        </div>    
    )
}

export default App