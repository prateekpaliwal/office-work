import React, { useEffect, useState } from 'react'

const Cleanup = () => {
    const [count, setCount] = useState(window.screen.width);

    const actualwidth = () => {
        setCount(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener("resize", actualwidth)
    }, )
    




  return (
    <div>Window size {count}
    </div>
  )
}

export default Cleanup