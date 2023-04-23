import React from "react"

export default function Clock(props) {
    return (
        <>
        <div className="Clock">
            <span className="digits">
                {("0"+Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0"+Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0"+((props.time / 10) % 100)).slice(-2)}
            </span>
        </div>

        <style>
            {`
            .Clock {
                margin: 3 rem 0;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .digits {
                font-family: Verdana, Geneva, sans-serif;
                font-size: 3rem;
                color: white;
            }
            `}
        </style>
        </>
    )
}