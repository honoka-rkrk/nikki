import React from 'react';
import './App.css';
import StyledButton from './test';
import Test2 from './test2';

function App() {
  return (
    <>
      <StyledButton test={'これはテスト'}></StyledButton>
      <Test2 />
    </>
  );
}

export default App;
