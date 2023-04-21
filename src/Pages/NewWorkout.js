import React from "react"
import Counter from "../Components/Counter"
import Timer from "../Components/Timer"


export default function NewWorkout() {
    const [newWorkoutData, setNewWorkoutData] = React.useState(
        {
            exercise: "",
            reps: "",
            weight: "",
        }
    )
    function handleChange(event) {
        console.log(event)
        const {name, value} = event.target
        setNewWorkoutData(prevWorkoutData => {
            return {
                ...prevWorkoutData,
                [name]: value
            }
        })
    }
     function handleSubmit() {
        /** submitToApi(newWorkoutData) */
        console.log(newWorkoutData)
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="exercise">Select exercise</label>
            <br />
            <div className="exercise--buttons">
            <button className="exerciseSelector" > Squat </button>
            <button className="exerciseSelector" > Deadlift </button>
            <button className="exerciseSelector" > Press </button>
            <button className="exerciseSelector" > Bench </button>
            <button className="exerciseSelector" > Clean </button>
            <button className="exerciseSelector" > Snatch </button>
            <button className="exerciseSelector" > Row </button>
            <button className="exerciseSelector" > More... </button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="exercise--container">
              <button className="exercise--selected"> Squat </button>
            <div className="exercise--div">
                <label>Reps</label>
                <Counter number={newWorkoutData.reps}/>
            </div>
            <div className="exercise--div">
                <label>Weight</label>
                <Counter number={newWorkoutData.weight} value={newWorkoutData.weight} onChange={handleChange} name="weight"/>
            </div>
            </div>
            <br />
            <br />
            <br />
            <div className="timer--container">
              <Timer />
            </div>
            <br />
            <div className="save-button-div">
            <button className="button--save">Save</button>
            </div>
        </form>

<style>
    {`

    .button--save {
      width: 3rem;
      font-size: 1rem;
      position: center;
      display: inline-block;
      text-align: center;
    }

    .save-button-div {
      display: flex;
      justify-content: center;
    }

  .exercise--buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 0.1rem;
  }

  .exerciseSelector {
    background-color: rgba(113, 162, 146, 0.822);
    padding: 0.25rem 0.5rem;
    margin: 0.5rem;
    border-radius: 0.25rem;
    border: 0.07rem solid black;
    box-shadow: rgba(153, 151, 151, 0.703) 0.1rem 0.1rem;
    cursor: pointer;
    font-size: 0.7rem;
    color: black;
    width: 3.2rem;
  }
  
  .exerciseSelector > button:hover {
    background-color: #000000;
    color: #D9D9D9;
  }
  
  .exerciseSelector > button:focus {
    outline: none;
  }
  
  .textInput {
    width: 3rem;
    font-size: 0.9rem;
    padding: 0rem;
    margin: 0;
    text-indent: 0.3rem;
    border: 1px solid #444;
    border-radius: 0.25rem;
  }

  .exercise--div {
    // display: flex;
    // justify-content: center;
    // flex-direction: row;
    // align-items: center;
    text-align:center;display:inline-block; margin:10px;}

  .exercise--container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: left;
  }

  .exercise--selected {
    background-color: rgba(113, 162, 146, 0.822);
    padding: 0.25rem 0.5rem;
    margin: 2.2rem;
    border-radius: 0.25rem;
    border: 0.07rem solid black;
    box-shadow: rgba(153, 151, 151, 0.703) 0.1rem 0.1rem;
    font-size: 0.7rem;
    color: black;
    width: 3.2rem;
    display: block;
  }

  .exercise--counter {

  }

    `}
</style>
</>
)
}