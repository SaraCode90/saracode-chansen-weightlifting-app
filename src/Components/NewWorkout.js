import React from "react"

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
            <select
                id="exercise"
                value={newWorkoutData.exercise}
                onChange={handleChange}
                name="exercise"
            >
                <option  value="---">---</option>
                <option  value="Squat">Squat</option>
                <option value="Deadlift">Deadlift</option>
                <option value="Clean">Clean</option>
                <option value="Snatch">Snatch</option>
                <option value="Press">Press</option>
            </select>
            <br />
            <br />
            <input
                type="text"
                placeholder="Reps"
                onChange={handleChange}
                name="reps"
                value={newWorkoutData.reps}
            />
            <input
                type="text"
                placeholder="Weight"
                onChange={handleChange}
                name="weight"
                value={newWorkoutData.weight}
            />
            <br />
            <button>Save</button>
        </form>
    )
}