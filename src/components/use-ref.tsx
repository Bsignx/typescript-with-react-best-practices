import { useRef, useEffect, useState } from "react";

export const DomRef = () => {
  // const inputRef = useRef<HTMLInputElement | null>(null); optional
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    // inputRef?.current?.focus(); optional chaining
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
    }
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

// example of use

export const UseRefExample = () => (
  <>
    <DomRef />
    <MutableRef />
  </>
);
