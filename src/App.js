import { useState, useRef } from "react";
import "./styles.css";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const setTimerInterval = () => {
    timerRef.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
  };

  const startClickHandler = () => {
    clearTimer();
    setTimerInterval();
  };

  const resumeClickHandler = () => {
    clearTimer();
    setTimerInterval();
  };

  const pauseClickHandler = () => {
    clearTimer();
  };

  const restartClickHandler = () => {
    clearTimer();
    setTimer(0);
  };

  return (
    <div>
      <div>{timer}</div>
      <div className="button-container">
        <button onClick={startClickHandler}>Start</button>
        <button onClick={resumeClickHandler}>Resume</button>
        <button onClick={pauseClickHandler}>Pause</button>
        <button onClick={restartClickHandler}>Restart</button>
      </div>
    </div>
  );
};

export default function App() {
  return <StopWatch />;
}
