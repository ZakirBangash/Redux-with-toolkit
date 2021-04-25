import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    addTransaction,
    deleteTransaction,
    selectCount,
  } from './features/counter/counterSlice';


export const Transaction = () => {
    let [text, settext] = useState('');
    let [Amount, setAmount] = useState(0);
  
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

    

    // console.log(addTransaction)
    const oSubmit = e => {
            e.preventDefault();
            
            Amount=Number(Amount)
            let id = Math.floor(Math.random ()* 33383838);
                dispatch(addTransaction({
                    amount: Amount,
                    text: text,
                    id: id
                }
                ));

            // console.log(id)  ;       
            // addTransaction({
            //     Amount: Amount,
            //     text: text,
            //     id: id
            // })
    }

    return (

        <div className="transaction_container">
            <h2>Add new Transaction</h2>
            <hr/>
            <form  className="transaction-form" onSubmit={oSubmit}>
                <label>Enter Description
                <input type="text"  onChange={e => settext(e.target.value)} placeholder="Enter Desc..." required/>
                </label><br/>

                <label>Enter Amount
                <input type="number"   onChange={e => setAmount(e.target.value)} placeholder="Enter Amount" required/>
                </label><br/>

                <input className="btn" type="submit" value="Add Transaction"/>
            </form>
        </div>
    )
}