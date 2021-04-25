import React,{useContext} from 'react'



export const IncomeExpense = () => {
    
    // let Amount = Transaction.transactions.map(Transaction => Transaction.Amount)
    // const income = Amount.filter(item => item > 0).reduce( (acc,item) => (acc+=item),0).toFixed(2);
    // let expense = Amount.filter(item => item < 0).reduce( (acc,item)=> (acc+=item),0).toFixed(2);
    
    return (
        <div className="Expense">
            <h3 >Income <br/> <span className="incomeC">$394</span></h3>
    <h3>Expense <br/> <span className="expenseC">$3993</span></h3>
        </div>
    )
}