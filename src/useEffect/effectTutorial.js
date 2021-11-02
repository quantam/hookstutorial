import axios from 'axios';
import { useEffect, useState } from 'react';

const EffectTutorial = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/comments').then((res) => {
      console.log('Api called');
      setData(res.data[0].email);
    });
  }, [count]);

  return (
    <div>
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default EffectTutorial;

// componentDidMount , []
//componentDidUpdate, [dependency]
//componentWillUnmount,
// useEffect(() => {
//   window.addEventListener('mousemove', () => {});
//   return () => {
//     window.removeEventListener('mousemove', () => {});
//   };
// }, []);
