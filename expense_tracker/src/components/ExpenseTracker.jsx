import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseTracker(){
    const {add,remove,amount,handleAmount,title,handleTitle,list,total} = useContext(ExpenseContext);

    return(
        <div>
            
            <input type="text" placeholder="Expense Title" value={title}
            onChange={handleTitle}
             />
        </div>
    )
}

export default ExpenseTracker;