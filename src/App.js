import React from "react"
import {nanoid} from "nanoid"
import './style.css';
import NewWorkout from "./Components/NewWorkout";

export default function App() {
    const [workout, setWorkout] = React.useState({})
    const [currentWorkoutId, setCurrentWorkoutId] = React.useState(
      (workout[0] && workout[0].id) || ""
    )

    function createNewWorkout() {
      const newWorkout = {
        id: nanoid(),
        exercise: "reps"
      }
      setWorkout(prevWorkout => [newWorkout, ...prevWorkout])
      setCurrentWorkoutId(newWorkout.id)
    }


   
  return (
    <div className="App">
                  <h1>SaraCode-CHansen Weightlifting App</h1>
            <form>
                <button className="button" onClick={createNewWorkout}>Start new workout</button>
            </form>
            <br />
            <NewWorkout />

    </div>
  );
}