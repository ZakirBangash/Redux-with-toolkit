import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    addTransaction,
    deleteTransaction,
    selectCount,
  } from './features/counter/counterSlice';

export const Transac = ({ transaction }) => {
    const dispatch = useDispatch();

  
console.log(transaction)

    return (
     

        <li>
            <span>{transaction.text}</span>
            <span>${transaction.amount}</span>
            <button onClick={() => dispatch(deleteTransaction(transaction.id))} className='btnX'>X</button>
        </li>


    )
}