import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setRunning(true);
    }
  };
  const handlePause = () => {
    setRunning(false);
  };

  const handleReaset = () => {
    setRunning(false);
    setRemainingTime(0);
    setTime(0);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };





  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center pt-0
       bg-slate-400 "
     
    >
      <h1 className="text-4xl font-extrabold mb-10 ">CountDown-Timer</h1>

      <input
        type="number"
        className=" hover:bg-slate-500 border-2 border-gray-9 rounded  bg-transparent p-3 mb-7
text-3xl text-black "
        placeholder="Enter Time In Seconds"
        value={time > 0 ? time : ""}
        onChange={(e) => setTime(Number(e.target.value))}
      />
      <div className="text-3xl font-semibold">
        {formatTime(remainingTime)}  Remaining
      </div>

      <div className="flex spacing-x-6">
        <button
          onClick={handleStart}
          className="text-white   mt-4 px-8 py-4 bg-gradient-to-r
     from-blue-600 to-teal-500 hover:to-teal-900
     rounded-lg"
        >
          Start
        </button>
      


     
     
        <button
          onClick={handlePause}
          className="text-white ml-4  mt-4 px-8 py-4 bg-gradient-to-r
     from-blue-600 to-orange-500 hover:to-orange-900
     rounded-lg"
        >
          Pause
        </button>
      

     
     
        <button
          onClick={handleReaset}
          className="text-white  ml-4 mt-4 px-8 py-4 bg-gradient-to-r
     from-red-600 to-pink-500 hover:to-teal-900
     rounded-lg"
        >
          Reset
        </button>
      </div>






    </div>
  );
};

export default CountdownTimer;
