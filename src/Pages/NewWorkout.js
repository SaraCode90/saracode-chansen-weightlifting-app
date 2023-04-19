import React from "react"
import Counter from "../Components/Counter"
import '../style.css';

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
        const {name, value, type} = event.target
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
            <input
                className="textInput"
                type="text"
                placeholder="Weight"
                onChange={handleChange}
                name="weight"
                value={newWorkoutData.weight}
            />
            <Counter number={newWorkoutData.weight}/>
            <br />
            <button>Save</button>
        </form>
    )
}