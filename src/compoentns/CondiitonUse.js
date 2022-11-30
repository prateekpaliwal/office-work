import React, { useState } from 'react'

const CondiitonUse = () => {
    const [text, setText] = useState(false)
  return (
    <div>
        <h2>{text === true ? "sign in" : "sign up"}</h2>
        <button onClick={() => setText(!text)}>change Text</button>

    </div>
  )
}

export default CondiitonUse
