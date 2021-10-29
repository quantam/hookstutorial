import axios from 'axios';
import React, { useEffect } from 'react';

const EffectTutorial = () => {
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/comments').then((res) => {
      console.log(res.data);
    });
  });

  return <div>Hello</div>;
};

export default EffectTutorial;
