'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';

interface CounterProps {
  initialCount?: number;
  someOtherInput?: string;
}

function Counter({ initialCount = 99, someOtherInput }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (

    <div className={styles.counter}>
      <div>{someOtherInput}</div>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
