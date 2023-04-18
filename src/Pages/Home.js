import React from 'react';
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
                <button className="button">Start new workout</button>
            </Link>
            <Link to="/newtemplate">
                <button className="button">Make template</button>
            </Link>
            <Link to="/history">
                <button className="button">See old workout</button>
            </Link>
        </form>
        <br />
        </main>
    )
}
