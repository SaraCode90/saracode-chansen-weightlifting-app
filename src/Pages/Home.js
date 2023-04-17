import React from 'react';
import {nanoid} from "nanoid"

export default function Home() {

    function createNewWorkout() {
        const newWorkout = {
          id: nanoid(),
          exercise: "reps"
        }}

    return (
        <main>
        <h1>SaraCode-CHansen Weightlifting App</h1>
        <form>
            <button className="button" onClick={createNewWorkout}>Start new workout</button>
            <button className="button" onClick={createNewWorkout}>Make template</button>
            <button className="button" onClick={createNewWorkout}>See old workout</button>
        </form>
        <br />
        </main>
    )
}
