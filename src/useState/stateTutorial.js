import React, { useState } from 'react';

const StateTutorial = () => {
  //variable name, use set and then variable name, function name
  const [name, setName] = useState('Natia');

  let changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input placeholder="Enter text" onChange={changeName} />
      {name}
    </div>
  );
};

export default StateTutorial;
