import React from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { useState, useEffect } from 'react';

const TimerView = observer(() => {
  const timer = useLocalObservable(() => ({
    secondsPassed: 0,
    increaseTimer() {
      this.secondsPassed++;
    },
  }));
  useEffect(() => {
    const handle = setInterval(() => {
      timer.increaseTimer();
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, [timer]);
  return <span>Seconds passed: {timer.secondsPassed}</span>;
});

function index5(props) {
  return (
    <div>
      <TimerView />
    </div>
  );
}

export default index5;
