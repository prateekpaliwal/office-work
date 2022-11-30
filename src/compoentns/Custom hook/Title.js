import React, { useState } from 'react'
import useCustomTitle from './useCustomTitle';

const Title = () => {
    const [count, setCount] = useState(0);
   
useCustomTitle(count)
  return (
    <div>
        <button onClick={() => setCount (count+1)}>Count - {count}</button>
    </div>
  )
}

export default Title