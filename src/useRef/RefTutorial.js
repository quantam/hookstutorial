import React, { useRef } from 'react';

function RefTutorial() {
  const inputRef = useRef(null);

  const nameChange = () => {
    inputRef.current.value = 'Training';
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Hello</h1>
      <input type="text" placeholder="type here..." ref={inputRef} />
      <button onClick={nameChange}>Change Name</button>
    </div>
  );
}

// const name = document.getElementById('name');
// console.log(name.value);

export default RefTutorial;
