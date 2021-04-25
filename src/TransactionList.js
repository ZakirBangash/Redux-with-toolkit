import { Transac } from './Transac';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount
} from './features/counter/counterSlice';


export const TransactionList = () => {
    const count = useSelector(selectCount);

    
    return (
        
        <div>
        <h2>HISTORY</h2>

        <hr/>
        <ul className="transaction">
            {count?.map((transaction,id) => ( 
                
            <Transac key={id} transaction={transaction}/>
         
                ))}
             {/* <Transac key={334} /> */}
         
        </ul>

        </div>
    )
}