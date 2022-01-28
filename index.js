import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Timer from './timer';

const App = () => {
  const [active, setactive] = useState(true);
  const [time, settime] = useState(0);
  const [storeinterval, setstoreinterval] = useState(null);

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

  return (
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
  );
};

render(<App />, document.getElementById('root'));
