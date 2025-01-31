import { useState } from 'react';

import { useAppSelector, useAppThunks, selectors } from '../hooks';
import styles from './Counter.module.css';

function Counter() {
  const { count } = useAppSelector(selectors.counter.count);
  const { counterThunks } = useAppThunks();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => counterThunks.decrement()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => counterThunks.increment()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => counterThunks.incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => counterThunks.incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => counterThunks.incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </>
  );
}

export default Counter;
