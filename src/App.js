import React from "react"
import './style.css';
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Layout from "./Pages/Layout"
import NewWorkout from "./Pages/NewWorkout"
import NewTemplate from "./Pages/NewTemplate";
import History from "./Pages/History";

export default function App() {
  return (
    <div className="App">
            <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="newworkout" element={<NewWorkout />} />
          <Route path="newtemplate" element={<NewTemplate />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
  </BrowserRouter>

    </div>
  );
}



            /**    const [workout, setWorkout] = React.useState({})
    const [currentWorkoutId, setCurrentWorkoutId] = React.useState(
      (workout[0] && workout[0].id) || ""
    )

    
      setWorkout(prevWorkout => [newWorkout, ...prevWorkout])
      setCurrentWorkoutId(newWorkout.id)
    } */