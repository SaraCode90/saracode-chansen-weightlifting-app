import React from "react"

export default function ControlButtons(props) {
    const StartButton = (
        <div className="btn btn-one btn-start"
        onClick={props.handleStart}>
            StartButton
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two"
        onClick={props.handleReset}>
            Reset
        </div>
        <div className="btn btn-one"
        onClick={props.handlePauseResume}>
            {props.isPaused ? "Resume" : "Pause"}
        </div>
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
                margin: 3rem 0;
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
                font-family: Verdana, Geneva, sans-serif;
                width: 10vw;
                height: 5vh;
                border-radius: 14px;
                margin: 0px 6px;
                display: flex;
                border: 2px solid #e42a2a;
                justify-content: center;
                align-items: center;
                cursor: poiner;
                color: white;
            }

            .btn-one {
                background-color: #e42a2a;
            }
            `}
        </style>
        </>
    )
}