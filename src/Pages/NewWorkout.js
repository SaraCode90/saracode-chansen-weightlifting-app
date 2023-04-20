import React from "react"
import Counter from "../Components/Counter"


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
            <button className="exerciseSelector" > Squat </button>
            <button className="exerciseSelector" > Deadlift </button>
            <button className="exerciseSelector" > Press </button>
            <button className="exerciseSelector" > Bench </button>
            <button className="exerciseSelector" > Clean </button>
            <button className="exerciseSelector" > Snatch </button>
            <button className="exerciseSelector" > Row </button>
            <button className="exerciseSelector" > More... </button>
            <br />
            <br />
            <br />
            <br />
            <button className="exerciseSelector"> Squat </button>
            <br />
            <div className="exercise--div">
            <div className="exercise--title">
                <label>Reps</label>
            </div>
            <div className="exercise--input">
            <input
                className="textInput"
                type="text"
                placeholder="Reps"
                onChange={handleChange}
                name="reps"
                value={newWorkoutData.reps}
            />
            </div>
            <div className="exercise--counter">
            <Counter number={newWorkoutData.reps}/>
            </div>
            </div>
            <br />
            <label>Weight</label>
            <Counter number={newWorkoutData.weight}/>
            <br />
            <button className="button--save">Save</button>
        </form>



<style>
    {`

    .button--save {
      width: 3rem;
      font-size: 1rem;
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
    justify-content: center;
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
    font-size: 0.6rem;
    padding: 0rem;
    margin: 0;
    margin-bottom: 1rem;
    text-indent: 0.75rem;
    border: 1px solid #444;
    border-radius: 0.25rem;
    display: block;
  }

  .exercise--div {
    display: flex;
    justify-content: flex-start;
  }

    `}
</style>
</>
)
}