import React from "react"
import data from "../data"

export default function ExerciseOptions(props) {
    return data.map((x) => {
        return (
            <>
            <div className="exercise--buttons">
                
            <label className="radio-label" htmlFor={x}>
              <input
                type="radio"
                name="exercise"
                id={x}
                value={x}
                className="check-btn"
                checked={props.newWorkoutData.exercise === "{x}"} 
                onChange={props.handleChange} 
              />
              <span className="text-inner">{x}</span>
            </label>
            </div>



<style>
    {`
.exercise--buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 0.1rem;
    overflow: hidden;
  }

    .check-btn {
      opacity: 0;
      position: relative;
      top: 2px;
    }

    .radio-label {
      background-color: rgba(113, 162, 146, 0.822);
      padding: 0.25rem;
      margin: 0.5rem;
      border-radius: 0.25rem;
      border: 0.07rem solid black;
      box-shadow: rgba(153, 151, 151, 0.703) 0.1rem 0.1rem;
      cursor: pointer;
      font-size: 0.7rem;
      color: black;

      display: block;
      align-items: center;
      justify-content: center;
      
    }

    .radio-label:hover {
        background-color: #000000;
        color: #D9D9D9;
      cursor: pointer;
    }

    .radio-label > button:focus {
        outline: none;
      }

    .text-inner {
        position: relative;
        right: 10px;
    }
      

  
      
`}
</style>
</>

    )
}
    ) }