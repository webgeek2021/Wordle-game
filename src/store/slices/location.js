import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit'
import { Board } from '../../rawMaterail/material'
import {wordList} from '../../rawMaterail/material'
export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    row:0,
    col:0,
    board:Board,
    gameOver : false,
    winner:false,
    answer:"",
    dataset:[]
  },
  reducers: {
    setAnswer:(state,action)=>{
      state.answer = action.payload.answer.toLowerCase()
      const set = action.payload.data;
      state.dataset = set;
      console.log(action.payload)
      console.log("GET ANSWER")
      console.log(state.answer)
      console.log(state.dataset)
    },
    incrementRow: (state,action) => {
      
      state.board[state.row][state.col] = action.payload;
    
    
      state.row+=1;
    },
    decrementRow: (state,action) => {
      state.board[state.row][state.col] = action.payload;
      state.row -= 1
    },
    incrementCol: (state,action) => {
      state.board[state.row][state.col] = action.payload;
      state.col += 1
    },
    decrementCol : (state,action)=>{
      state.board[state.row][state.col] = action.payload;
      state.col -=1
    },
    handleClick:(state,action)=>{
      console.log("LOCATION")
      console.log(action.payload)
      if(state.col < 5)
      {
        console.log("END") 
      let r = state.row
      let c = state.col
      state.board[state.row][state.col] = action.payload
      console.log(typeof(state.board))
      state.col+=1;
      }
    },
    handleErase: (state)=>{
      console.log("ERASE")
      if(state.col >= 0)
      {
        state.col -= 1;
      state.board[state.row][state.col] = "";
      }
      
    },
    handleEnter:(state)=>{
      console.log("Enter")
      console.log(state.answer)
      // console.log(state.dataset)
      if(state.col == 5 && state.row <= 6)
      {
        let i = state.row;
        let count = 0;
        for(let j=0;j<5;j++)
        {
          if(state.answer.includes(state.board[i][j]))
          {
            console.log("YES INCLUDES")
            console.log(state.board[i][j])
            count+=1;
          }
        }
        if(count == 5)
        {
          state.gameOver = true;
          state.winner = true;
        }
        state.row += 1;
        if(state.row > 5)
        {
          state.gameOver = true;
        }
        state.col = 0;
        // state.gameOver = true;
      }
    
    },
    playAgain: (state)=>{
      
      state.row = 0 
      state.col = 0 
      state.board = Board 
      state.gameOver  =  false
      state.winner = false
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementRow, decrementRow, incrementCol,decrementCol,handleClick,handleEnter,handleErase,playAgain , setAnswer} = locationSlice.actions

export default locationSlice.reducer