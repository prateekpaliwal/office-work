import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [num, setNum] = useState(1);
    const [num1, setNum1] = useState(1);

    useEffect(() => {
        alert('clicked me')
    }, [num])
    

  return (
    <div>
        <button onClick={() => setNum(num+1)}>Click Me {num}</button>
        <button onClick={() => setNum1(num1+1)}>Click Me2 {num1}</button>
    </div>
  )
}

export default Effect