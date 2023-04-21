import React from "react"

export default function Counter() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
  
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    

    return (
        <>
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
                </div>

<style>
    {`
       .counter {
         display: flex;
         align-items: flex-end;
       }
       
       button {
         height: 30px;
         width: 30px;
         border-radius: 50%;
         border: none;
         cursor: pointer;
         background-color: #737373;
         color: #D9D9D9;
         font-size: 1.2rem;
       }
       
       button:hover {
         background-color: #404040;
         color: #D9D9D9;
       }
       
       button:focus {
         outline: none;
       }
       
       .counter--count {
         background-color: white;
         height: 40px;
         width: 70px;
         border-radius: 15%;
         display: flex;
         justify-content: center;
         align-items: center;
         color: #262626;
         font-size: 0.8rem;
       }
       
       .counter--plus {
         margin-left: -1rem;
       }
       
       .counter--minus {
         margin-right: -1rem;
         z-index: 1;
       }
        
    `}
</style>

</>
)
}