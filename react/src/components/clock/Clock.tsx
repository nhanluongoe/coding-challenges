import { useEffect, useState } from "react";
import "./Clock.css";

type HMS = {
  hour: number;
  minute: number;
  second: number;
};

export default function Clock() {
  const [time, setTime] = useState<HMS>({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondDeg = time.second * 6;
  const minuteDeg = time.minute * 6 + time.second * 0.1;
  const hourDeg = time.hour * 30 + time.minute * 0.5;

  return (
    <div className="clock__wrapper">
      <div className="clock__frame">
        <div
          className="clock__hour-hand clock__hand"
          style={{ transform: `rotate(${hourDeg - 90}deg)` }}
        ></div>
        <div
          className="clock__minute-hand clock__hand"
          style={{ transform: `rotate(${minuteDeg - 90}deg)` }}
        ></div>
        <div
          className="clock__second-hand clock__hand"
          style={{ transform: `rotate(${secondDeg - 90}deg)` }}
        ></div>
      </div>
    </div>
  );
}
