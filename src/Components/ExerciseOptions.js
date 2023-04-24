import React from "react"
import data from "../data"

export default function ExerciseOptions(props) {
    return data.map((x) => {
        return (
            <>
            <div>
            <label className="radio-labale" htmlFor={x}>
              <input
                type="radio"
                name="exercise"
                id={x}
                value={x}
                className="check-btn"
                checked={props.newWorkoutData.exercise === "{x}"} 
                onChange={props.handleChange} 
                onClick={props.selectExercise}
              />{" "}
              <span className="text-inner">{x}</span>
            </label>{" "}
            &nbsp; &nbsp;
            </div>

<style>
    {`
    .check-btn {
      opacity: 0;
      position: relative;
      top: 2px;
    }

    .radio-label {
      border-radius: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-heigh: 12px;
      text-align: center;
      width: 100%;
      transition: 0.3s ease;

      background: blue;
      border: 0.8px solid white;
      box-sizing: border-box;
      border-radius: 8px;

      padding-top: 5px;
      padding-bottom: 5px;
      padding; 5px 10px 5px 10px;

    }

    .radio-label:hover {
      background-color: #d6dbf5;
      cursor: pointer;
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