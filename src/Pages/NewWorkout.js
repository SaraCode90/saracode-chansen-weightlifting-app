import React from "react"
import Counter from "../Components/Counter"
import Timer from "../Components/Timer"
import ExerciseOptions from "../Components/ExerciseOptions"


export default function NewWorkout() {
    const [newWorkoutData, setNewWorkoutData] = React.useState(
        {
            exercise: "",
            sets: "",
            reps: "",
            weight: "",
            Rest: "",
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
    function selectExercise(event) {
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
            <br />
            <div className="exercise--buttons">

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
            <ExerciseOptions 
              newWorkoutData={newWorkoutData} 
              handleChange={handleChange} 
              selectExercise={selectExercise}
            />
            <br />
            <br />
            <label className="radio-label" htmlFor="squat">
            <input 
              type="radio" 
              id="squat" 
              name="exercise" 
              value="squat" 
              checked={newWorkoutData.exercise === "squat"} 
              onChange={handleChange} 
              className="check-btn" 
              onClick={selectExercise}
              />
              {" "}
              <span className="text-inner">squat</span>
            </label>{" "}

            <label className="radio-label" htmlFor="deadlift">
              <input 
              type="radio" 
              id="deadlift" 
              name="exercise" 
              value="deadlift" 
              checked={newWorkoutData.exercise === "deadlift"} 
              onChange={handleChange} 
              className="check-btn" 
              onClick={selectExercise}
              />
              {" "}
              <span className="text-inner">deadlift</span>
            </label>{" "}

            <label className="radio-label" htmlFor="bench">
              <input 
              type="radio" 
              id="bench" 
              name="exercise" 
              value="bench" 
              checked={newWorkoutData.exercise === "bench"} 
              onChange={handleChange} 
              className="check-btn" 
              onClick={selectExercise}
              />
              {" "}
              <span className="text-inner">bench</span>
              </label>{" "}
            <br />
            <br />
            <div className="exercise--container">
              <button className="exercise--selected"> Squat </button>
            <div className="exercise--div">
                <label>Sets</label>
                <Counter number={newWorkoutData.sets}/>
            </div>
            <div className="exercise--div">
                <label>Reps</label>
                <Counter number={newWorkoutData.reps}/>
            </div>
            <div className="exercise--div">
                <label>Weight</label>
                <Counter number={newWorkoutData.weight} value={newWorkoutData.weight} onChange={handleChange} name="weight"/>
            </div>
            <div className="exercise--div">
                <label>Rest</label>
                <Timer />
            </div>
            </div>
            <br />
            <br />
            <br />
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