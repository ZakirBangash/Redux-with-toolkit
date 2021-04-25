import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  user : [
    // {
    //   id: 1,
    //   text: 'shahzain',
    //   amount: 2434
    // }
  ]
 
};



export const counterSlice = createSlice({
  name: 'expense',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTransaction: (state, action) => {
      
      state.user.push(action.payload)
    },

    deleteTransaction: (state, action) => {
      
          let newState = state.user.filter(user => user.id !== action.payload);
       state.user = newState;
        
    },

    // Use the PayloadAction type to declare the contents of `action.payload
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
 
});

export const { addTransaction, deleteTransaction} = counterSlice.actions;


export const selectCount = (state) => state.counter.user ;



export default counterSlice.reducer;
