import React from 'react';
import PropTypes from 'prop-types';

export default function Counter({ onCounterChange }) {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);
    onCounterChange(newCount);
  }

  return (
    <>
      <div className="counter">
        <button
          type="button"
          className="counter--minus"
          onClick={handleClick}
        >
          –

        </button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button
          type="button"
          className="counter--plus"
          onClick={handleClick}
        >
          +
        </button>
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
  );
}

Counter.propTypes = {
  onCounterChange: PropTypes.func.isRequired,
};
