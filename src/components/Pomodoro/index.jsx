/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from "react";

import { Button, Typography } from "neetoui";
import { Helmet } from "react-helmet";

const Pomodoro = () => {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [mode, setMode] = useState("Pomodoro");
  const hasDecremented = useRef(false);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      if (!hasDecremented.current) {
        setTime(prevTime => prevTime - 1);
        hasDecremented.current = true;
      }

      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      alert(`${mode} session is over!`);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, mode]);

  const handleModeChange = newMode => {
    setMode(newMode);
    setIsRunning(false);
    setHasStarted(false);
    hasDecremented.current = false;
    if (newMode === "Pomodoro") setTime(1500);

    if (newMode === "Short Break") setTime(300);

    if (newMode === "Long Break") setTime(900);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHasStarted(false);
    hasDecremented.current = false;
    if (mode === "Pomodoro") setTime(1500);

    if (mode === "Short Break") setTime(300);

    if (mode === "Long Break") setTime(900);
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
    setHasStarted(true);
  };

  return (
    <>
      <Helmet>
        <title>Pomodoro Mode</title>
      </Helmet>
      <div className="ml-10 flex flex-col gap-y-20">
        <header>
          <Typography className="mt-8" style="h1" weight="bold">
            Pomodoro Mode
          </Typography>
        </header>
        <div className="flex h-full flex-col items-center justify-center">
          <div
            className="rounded-lg border-2 border-gray-400 p-6 shadow-md"
            style={{ width: "500px" }}
          >
            <div className="mb-6 flex justify-between">
              <div
                className={`rounded-lg ${
                  mode === "Pomodoro" ? "border border-gray-800" : ""
                }`}
              >
                <Button
                  label="Pomodoro"
                  size="large"
                  style="tertiary"
                  onClick={() => handleModeChange("Pomodoro")}
                />
              </div>
              <div
                className={`rounded-lg ${
                  mode === "Short Break" ? "border border-gray-800" : ""
                }`}
              >
                <Button
                  label="Short Break"
                  size="large"
                  style="tertiary"
                  onClick={() => handleModeChange("Short Break")}
                />
              </div>
              <div
                className={`rounded-lg ${
                  mode === "Long Break" ? "border border-gray-800" : ""
                }`}
              >
                <Button
                  label="Long Break"
                  size="large"
                  style="tertiary"
                  onClick={() => handleModeChange("Long Break")}
                />
              </div>
            </div>
            <div className="mb-6 text-center">
              <h2 className="text-8xl font-bold">{formatTime(time)}</h2>
            </div>
            <div className="flex justify-center gap-4">
              <div className="rounded-lg border border-gray-800">
                <button
                  className="w-40 rounded-lg bg-white py-1 text-3xl font-bold text-gray-800"
                  onClick={handleStartPause}
                >
                  {isRunning ? "Pause" : hasStarted ? "Resume" : "Start"}
                </button>
              </div>
              {time !==
                (mode === "Pomodoro"
                  ? 1500
                  : mode === "Short Break"
                  ? 300
                  : 900) && (
                <div className="rounded-lg border border-gray-800">
                  <button
                    className="w-40 rounded-lg bg-white py-1 text-3xl font-bold text-gray-800"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pomodoro;
