import React from "react"
import Counter from "../Components/Counter"
import Timer from "../Components/Timer"
import ExerciseOptions from "../Components/ExerciseOptions"
import Save from "../Components/Save"

export default function NewWorkout() {
    const [newWorkoutData, setNewWorkoutData] = React.useState(
        {
            exercise: "",
            sets: "",
            reps: "",
            weight: "",
            rest: "",
        }
    )

    console.log(newWorkoutData)

    function handleChange(event) {
        const {name, value} = event.target
        setNewWorkoutData(prevWorkoutData => {
            return {
                ...prevWorkoutData,
                [name]: value
            }
        })
    }

    //  function handleSubmit() {
    //     /** submitToApi(newWorkoutData) */
    //     console.log(newWorkoutData)
    // }


    return (
        <>
        <form onSubmit={e=>e.preventDefault()}>
        <label htmlFor="exercise">Select exercise</label>
            <ExerciseOptions 
              newWorkoutData={newWorkoutData}
              handleChange={handleChange} 
            />
            <br />
            <br />
            <div className="exercise--container">
              <button className="exercise--selected"> {newWorkoutData.exercise} </button>
            <div className="exercise--div">
                <label>Sets</label>
                <Counter 
                  setNewWorkoutData={setNewWorkoutData}
                  newWorkoutData={newWorkoutData}
                  name="sets"
                  value={newWorkoutData.sets}
                />
            </div>
            <div className="exercise--div">
                <label>Reps</label>
                <Counter 
                  setNewWorkoutData={setNewWorkoutData}
                  newWorkoutData={newWorkoutData}
                  handleChange={handleChange}
                  name="reps"
                  value={newWorkoutData.reps}
                />
            </div>
            <div className="exercise--div">
                <label>Weight</label>
                <Counter 
                  setNewWorkoutData={setNewWorkoutData}
                  newWorkoutData={newWorkoutData} 
                  onChange={handleChange} 
                  name="weight"
                  value={newWorkoutData.weight}
                  />
            </div>
            <div className="exercise--div">
                <label>Rest</label>
                <Timer />
            </div>
            <Save
              handleChange={handleChange}
            />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
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
    text-align:center;
    display:inline-block; 
    margin:10px;
  }

  .exercise--container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: left;
    flex-wrap: wrap;
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


    `}
</style>
</>
)
}