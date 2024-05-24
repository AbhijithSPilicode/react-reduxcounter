import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './assets/redux/counter'
import './App.css';

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <div className='App'>
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Like</button>
      <button onClick={() => dispatch(decrement())}>UnLike</button>
    </div>
  );
}
