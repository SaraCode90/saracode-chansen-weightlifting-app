import React from "react"

export default function ControlButtons(props) {
    const StartButton = (
        <button className="btn btn-one btn-start"
        onClick={props.handleStart}>
            Start
        </button>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <button className="btn btn-two"
        onClick={props.handleReset}>
            Reset
        </button>
        <button className="btn btn-one"
        onClick={props.handlePauseResume}>
            {props.isPaused ? "Resume" : "Pause"}
        </button>
        </div>
    );

    return (
        <>
        <div className="Control-Buttons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>

        <style>
            {`
            .Control-Buttons {
                margin: 1rem 0;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .btn.grp {
                display: flex;
                align-items: center;
                justify-content: space-around;
            }

            .btn {
               display: flex;
                justify-content: center;
                align-items: center;

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

            .btn > button:hover {
                background-color: #000000;
                color: #D9D9D9;
              }
              
              .btn > button:focus {
                outline: none;
              }

            .btn-one {
                background-color: rgba(113, 162, 146, 0.822);
            }
            `}
        </style>
        </>
    )
}