import { useState, useEffect } from "react";

export default function HookClock() {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    console.log("tick");

    return () => {
      clearInterval(timerId);
      console.log("Unmounted");
    };
  });

  return <div>{time.toLocaleTimeString()}</div>;
}
