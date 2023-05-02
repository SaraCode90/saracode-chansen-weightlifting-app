import React from 'react';
import Clock from './Clock';
import ControlButtons from './ControlButtons';

export default function Timer() {
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(true);
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((t) => t + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <>

      <div className="timer">
        <Clock time={time} />
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>

      <style>
        {`
        .timer {
            height: 3rem;
            weidth: 1rem;
            color: green;
            background-color: "#0d0c1b";
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
    `}
      </style>
    </>
  );
}
