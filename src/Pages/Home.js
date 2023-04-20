import React from 'react';
// import {nanoid} from "nanoid"
import { Link } from 'react-router-dom';


export default function Home() {

    // function createNewWorkout() {
    //     const newWorkout = {
    //       id: nanoid(),
    //       exercise: "reps"
    //     }}

    return (
        <>
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


<style>
    {`      
button {
    background-color: rgba(113, 162, 146, 0.822);
    padding: 0.5rem 1rem;
    margin: 1rem;
    border-radius: 0.25rem;
    border: 0.1rem solid black;
    box-shadow: rgba(153, 151, 151, 0.703) 0.1rem 0.1rem;
  }
    `}
</style>
</>
)
}