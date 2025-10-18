// import React, { useEffect, useState, useRef } from "react";

//  function Timer() {
//     const [time, setTime] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const intervalRef = useRef(null);

//     useEffect(() => {
//         if (isRunning) {
//             intervalRef.current = setInterval(() => {
//                 setTime((prevTime) => prevTime + 1);
//             }, 1000);
//         } else {
//             clearInterval(intervalRef.current);
//         }

//         return () => clearInterval(intervalRef.current);
//     }, [isRunning]);

//     const startTimer = () => {
//         setIsRunning(true);
//     };

//     const stopTimer = () => {
//         setIsRunning(false);
//     };

//     const resetTimer = () => {
//         setIsRunning(false);
//         setTime(0);
//     };

//     return (
//         <div style={{ textAlign: "center" }}>
//             <h1>Timer: {time}</h1>
//             <button onClick={startTimer} disabled={isRunning}>Start</button>
//             <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
//             <button onClick={resetTimer}>Reset</button>
//         </div>
//     );
// }

// export default Timer;




import React, { useEffect, useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("");
  const intervalRef = useRef(null);

  // Start/stop the timer
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Show message at 10 seconds
  useEffect(() => {
    if (time === 10) {
      setMessage("⏰ Time's up!");
      setIsRunning(false);
    }
  }, [time]);

  const startTimer = () => {
    setIsRunning(true);
    setMessage(""); // Clear old message
  };

  const stopTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setMessage(""); // Clear message on reset
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Timer: {time}</h1>

      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
      <button onClick={resetTimer}>Reset</button>

      {message && <h2 style={{ color: "red", marginTop: "20px" }}>{message}</h2>}
    </div>
  );
}

export default Timer;