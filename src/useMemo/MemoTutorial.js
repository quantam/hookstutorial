import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

const MemoTutorial = () => {
  const [data, setData] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data);
    });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longName.length) {
        longName = currentName;
      }
    }

    return longName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div>
      <p>{getLongestName}</p>

      <button onClick={() => setToggle(!toggle)}>Click</button>
    </div>
  );
};

export default MemoTutorial;
