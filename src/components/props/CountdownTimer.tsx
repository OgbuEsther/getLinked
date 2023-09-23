import { useState, useEffect } from "react";

interface CountdownProps {
  targetTime: Date;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer({ targetTime }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetTime.getTime() - now.getTime();

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(timeDifference / 3600000); // 1 hour = 3600000 milliseconds
        const minutes = Math.floor((timeDifference % 3600000) / 60000); // 1 minute = 60000 milliseconds
        const seconds = Math.floor((timeDifference % 60000) / 1000); // 1 second = 1000 milliseconds
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000); // Update the countdown every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [targetTime]);

  return (
    <div className="countdown flex gap-1">
      <span className="countdown-item">
        {String(timeLeft.hours).padStart(2, "0")}
        <span className="text-xl">H</span>
      </span>
      :
      <span className="countdown-item">
        {String(timeLeft.minutes).padStart(2, "0")}
        <span className="text-xl">M</span>
      </span>
      :
      <span className="countdown-item">
        {String(timeLeft.seconds).padStart(2, "0")}
        <span className="text-xl">S</span>
      </span>
    </div>
  );
}

export default CountdownTimer;
