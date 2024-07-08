import { useEffect, useState } from "react";
import "./Clock.css";

type HMS = {
  hour: number;
  minute: number;
  second: number;
};

const FULL_CIRCLE = 360;
const FULL_HOUR = 12;
const FULL_MINUTE = 60;
const FULL_SECOND = 60;
const DEGREE_PER_SECOND = FULL_CIRCLE / FULL_SECOND;
const DEGREE_PER_MINUTE = FULL_CIRCLE / FULL_MINUTE;
const DEGREE_PER_HOUR = FULL_CIRCLE / FULL_HOUR;

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

  const secondDeg = time.second * DEGREE_PER_SECOND;
  const minuteDeg =
    time.minute * DEGREE_PER_MINUTE +
    (time.second / FULL_SECOND) * DEGREE_PER_MINUTE;
  const hourDeg =
    time.hour * DEGREE_PER_HOUR + (time.minute / FULL_MINUTE) * DEGREE_PER_HOUR;

  console.log(secondDeg, minuteDeg, hourDeg);

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
