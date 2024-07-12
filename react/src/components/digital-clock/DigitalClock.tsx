import { useEffect, useState } from "react";
import "./DigitalClock.css";

const CSS_MAP: Record<
  string,
  {
    top: string[];
    bottom: string[];
  }
> = {
  "0": {
    top: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-left",
    ],
    bottom: [
      "clock__digit-border-bottom",
      "clock__digit-border-right",
      "clock__digit-border-left",
    ],
  },
  "1": {
    top: ["clock__digit-border-right"],
    bottom: ["clock__digit-border-right"],
  },
  "2": {
    top: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-bottom",
    ],
    bottom: [
      "clock__digit-border-top",
      "clock__digit-border-bottom",
      "clock__digit-border-left",
    ],
  },
  "3": {
    top: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-bottom",
    ],
    bottom: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-bottom",
    ],
  },
  "4": {
    top: [
      "clock__digit-border-right",
      "clock__digit-border-left",
      "clock__digit-border-bottom",
    ],
    bottom: ["clock__digit-border-right", "clock__digit-border-top"],
  },
  "5": {
    top: [
      "clock__digit-border-top",
      "clock__digit-border-left",
      "clock__digit-border-bottom",
    ],
    bottom: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-bottom",
    ],
  },
  "6": {
    top: [
      "clock__digit-border-top",
      "clock__digit-border-left",
      "clock__digit-border-bottom",
    ],
    bottom: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-bottom",
      "clock__digit-border-left",
    ],
  },
  "7": {
    top: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-bottom",
    ],
    bottom: ["clock__digit-border-right", "clock__digit-border-top"],
  },
  "8": {
    top: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-bottom",
      "clock__digit-border-left",
    ],
    bottom: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-bottom",
      "clock__digit-border-left",
    ],
  },
  "9": {
    top: [
      "clock__digit-border-top",
      "clock__digit-border-right",
      "clock__digit-border-left",
      "clock__digit-border-bottom",
    ],
    bottom: [
      "clock__digit-border-right",
      "clock__digit-border-top",
      "clock__digit-border-bottom",
    ],
  },
};

export default function DigitalClock() {
  const { hour, minute, second } = useTime();
  return (
    <div className="clock">
      <Digit number={Math.floor(hour / 10)} />
      <Digit number={hour % 10} />

      <Separator />

      <Digit number={Math.floor(minute / 10)} />
      <Digit number={minute % 10} />

      <Separator />

      <Digit number={Math.floor(second / 10)} />
      <Digit number={second % 10} />
    </div>
  );
}

function Digit({ number }: { number: number }) {
  const { top, bottom } = CSS_MAP[number.toString()];

  return (
    <div>
      <div
        className={classNames("clock__digit clock__digit-top", ...top)}
      ></div>
      <div
        className={classNames("clock__digit clock__digit-bottom", ...bottom)}
      ></div>
    </div>
  );
}

function Separator() {
  return (
    <div className="clock__separator">
      <div className="clock__separator-dot"></div>
      <div className="clock__separator-dot"></div>
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function classNames(...classnames: string[]): string {
  return classnames.filter(Boolean).join(" ");
}
