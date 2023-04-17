import React from "react"
import {nanoid} from "nanoid"
import './style.css';
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Layout from "./Pages/Layout"

export default function App() {
  return (
    <div className="App">
            <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
      </Routes>
  </BrowserRouter>

    </div>
  );
}

/**                  <h1>SaraCode-CHansen Weightlifting App</h1>
            <form>
                <button className="button" onClick={createNewWorkout}>Start new workout</button>
            </form>
            <br /> */


            /**    const [workout, setWorkout] = React.useState({})
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
    } */