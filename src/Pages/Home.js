import React from 'react';
import "../style.css"
import {nanoid} from "nanoid"
import { BrowserRouter, Route, Link } from 'react-router-dom';


export default function Home() {

    function createNewWorkout() {
        const newWorkout = {
          id: nanoid(),
          exercise: "reps"
        }}

    return (
        <main>
        <h3>Welcome!</h3>
        <form>
            <Link to="/newworkout">
                <button className="largeButton">Start new workout</button>
            </Link>
            <Link to="/newtemplate">
                <button className="largeButton">Make template</button>
            </Link>
            <Link to="/history">
                <button className="largeButton">See old workout</button>
            </Link>
        </form>
        <br />
        </main>
    )
}
