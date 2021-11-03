import React, { useMemo, useState } from 'react';

export function MemoTutorial2() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);
  // const factorial = factorialOf(number);

  const changeFunc = (event) => {
    setNumber(event.target.value);
  };

  const clickMe = () => {
    console.log('button clicked');
    setInc((i) => i + 1);
  };

  function factorialOf(num) {
    console.log('Called');
    return num <= 0 ? 1 : num * factorialOf(num - 1); //5 = 5 * 4 * 3*2 *1
  }

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={changeFunc} /> is {factorial}
      <hr />
      <button onClick={clickMe}>Click me</button>
    </div>
  );
}
