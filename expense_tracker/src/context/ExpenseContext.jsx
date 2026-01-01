import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext()

function ExpenseProvider({children}){
    const[title,setTitle]=useState("");
    const[list,setList] = useState([]);
    const[amount,setAmount] = useState("");
    let[total,setTotal]=useState(0);
    function handleTitle(e){
        setTitle(e.target.value);
    }
    function handleAmount(e){
        setAmount(e.target.value)
    }
    function add(){
        if(title.trim()==""||amount===""){
            return;

        }
        setList(prev=>[...prev,{title,amount:Number(amount)}]);
        setAmount("");
        setTitle("");
    }
    function remove(idx){
        setList(prev=>prev.filter((_,i)=>i!==idx));
    }
    useEffect(()=>{
        const sum = list.reduce((acc,item)=>acc+item.amount,0);
        setTotal(sum);
    },[list])

    
    return(
        <ExpenseContext.Provider value={{add,remove,amount,handleAmount,title,handleTitle,list,total}}>{children}</ExpenseContext.Provider>
    )
}

export default ExpenseProvider;