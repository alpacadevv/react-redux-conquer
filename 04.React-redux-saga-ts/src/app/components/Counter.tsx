import React, { useState, useEffect, useRef } from 'react';

interface Props {
  name: string;
}

const Counter: React.FC<Props> = ({name}) => {
  const [count, setCount] = useState(0);
  const countInterval = useRef(0);

  useEffect(() => {
    increaseInterval();
    return () => {
      clearInterval(countInterval.current);
    };
  }, []);

  const increase = (): void => setCount(prevCount => prevCount + 1);

  const increaseInterval = (): void => {
    countInterval.current = window.setInterval(increase, 1000);
  };

  return (
    <>
      <h1>{name} counter</h1>
      <p>count value: {count}</p>
    </>
  )
};

export default Counter;
