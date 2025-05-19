/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";

import { Button, Typography, Modal } from "neetoui";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Pomodoro = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [mode, setMode] = useState("Pomodoro");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetTime = {
    Pomodoro: 1500,
    "Short Break": 300,
    "Long Break": 900,
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    if (!isRunning || time <= 0) {
      if (time === 0) {
        setIsRunning(false);
        setIsModalOpen(true);
      }

      return;
    }

    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleModeChange = newMode => {
    setMode(newMode);
    setIsRunning(false);
    setHasStarted(false);
    setTime(resetTime[newMode]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHasStarted(false);
    setTime(resetTime[mode]);
  };

  const handleStartPause = () => {
    if (!hasStarted) {
      setTime(prevTime => prevTime - 1);
    }
    setIsRunning(prevState => !prevState);
    setHasStarted(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    handleReset();
  };

  return (
    <>
      <Helmet>
        <title>{t("pomodoro.tabTitle")}</title>
      </Helmet>
      <div className="ml-10 flex flex-col gap-y-20">
        <header>
          <Typography className="mt-8" style="h1" weight="bold">
            {t("pomodoro.title")}
          </Typography>
        </header>
        <div className="flex h-full flex-col items-center justify-center">
          <div
            className="rounded-lg border-2 border-gray-400 p-6 shadow-md"
            style={{ width: "500px" }}
          >
            <div className="mb-6 flex justify-between">
              {Object.keys(resetTime).map(key => (
                <div
                  key={key}
                  className={`rounded-lg ${
                    mode === key ? "border border-gray-800" : ""
                  }`}
                >
                  <Button
                    label={key}
                    size="large"
                    style="tertiary"
                    onClick={() => handleModeChange(key)}
                  />
                </div>
              ))}
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
                  {isRunning
                    ? t("pomodoro.pause")
                    : hasStarted
                    ? t("pomodoro.resume")
                    : t("pomodoro.start")}
                </button>
              </div>
              {time !== resetTime[mode] && (
                <div className="rounded-lg border border-gray-800">
                  <button
                    className="w-40 rounded-lg bg-white py-1 text-3xl font-bold text-gray-800"
                    onClick={handleReset}
                  >
                    {t("pomodoro.reset")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          size="medium"
          onClose={() => handleModalClose()}
        >
          <div className="p-4">
            <Typography style="h2" weight="bold">
              {t("pomodoro.sessionComplete")}
            </Typography>
            <Typography className="mt-2 text-gray-600">
              {t("pomodoro.sessionCompleteMessage", {
                mode: mode.toLowerCase(),
              })}
            </Typography>
            <div className="mt-4 flex justify-end">
              <Button
                label={t("util.ok")}
                style="primary"
                onClick={() => handleModalClose()}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Pomodoro;
