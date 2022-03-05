import './App.css';

import React, { useState, useEffect } from 'react';

function useComstumCount(initCount) {
  console.log(112)
  let [count, setCount] = useState(initCount);
  // let [count1, setCount1] = useState(initCount);
  useEffect(() => {
    // setCount1(1);
    console.log(setCount)
  })
  setCount(2)

  return [count, setCount];
}

function templateCom() {
  return (
    <div>test</div>
  )
}

function Example() {
  console.log(223)
  let [count, setCount] = useState(0);
  const TemplateCom = templateCom();
  // setCount(1)
  // let [count, setCount] = useComstumCount(0);
  // const [count, setCount] = useState(0);

  return (
    <div>111111111{TemplateCom}</div>
  )
}

export default Example;
