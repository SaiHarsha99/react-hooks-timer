import React, { memo, useCallback, useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import Timer from './timer'

const App = () => {
  const [start, setstart] = useState(true);
  const [pause, setpause] = useState(false);
  const [seconds, setseconds] = useState(0);
  const [storeinterval, setstoreinterval] = useState(null);

  const handleStart = (e) => {
    useInterval();
    setstart(false);
    setpause(true);
  };

  const handlePause = (e) => {
    useInterval();
    setstart(true);
    setpause(false);
  };

  const useInterval = () => {
    if (!start) {
      clearInterval(storeinterval);
    } else {
      let interval = setInterval(() => {
        setseconds((sec) => sec + 10);
      }, 10);
      setstoreinterval(interval);
    }
  };

  return (
    <div className='stop-watch'>
      <Timer time={seconds}/>
      <div className="Control-Buttons">
        <div ></div>
      {start && <button className="btn btn-one" onClick={handleStart}>Start</button>}
      {pause && <button className="btn btn-one" onClick={handlePause}>Pause</button>}
      <button className="btn btn-two" onClick={() => setseconds(0)}>Reset</button>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
