import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import './style.css';
import Timer from './timer';

const App = () => {
  const [active, setactive] = useState(true);
  const [time, settime] = useState(0);
  const [storeinterval, setstoreinterval] = useState(null);
  const [delayCount, setdelayCount] = useState('');
  const countRef = useRef(null);
  const [counter, setCounter] = useState(0);

  const handleactive = (e) => {
    useInterval();
    setactive(!active);
  };

  const useInterval = () => {
    if (!active) {
      clearInterval(storeinterval);
    } else {
      let interval = setInterval(() => {
        settime((sec) => sec + 10);
      }, 10);
      setstoreinterval(interval);
    }
  };

  const handledelay = (delay) => {
    countRef.current = setInterval(() => {
      setCounter((x) => x + 1);
    }, 1000);
    // Displaying the value after particular delaay as mentioned in input
    setTimeout(() => {
      console.log('hi');
      clearInterval(countRef.current);
      setCounter(0);
    }, 1000 * delayCount);
  };

  return (
    <>
      <div className="stop-watch">
        <Timer time={time} />
        <div className="Control-Buttons">
          <button className="btn btn-one" onClick={handleactive}>
            {' '}
            {active ? 'Start' : 'Pause'}
          </button>
          <button className="btn btn-two" onClick={() => settime(0)}>
            Reset
          </button>
        </div>
      </div>
      <h3> Counter Using Useref </h3>
      <input
        type="text"
        value={delayCount}
        onChange={(e) => setdelayCount(e.target.value)}
      />
      <button onClick={handledelay}>submit</button>
      {counter}
    </>
  );
};

render(<App />, document.getElementById('root'));
