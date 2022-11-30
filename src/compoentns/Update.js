import React, { useState } from 'react'

const Update = () => {
    const [Count, setCount] = useState(1);
    const [age, setAge] = useState(21);
    const [sibling, setSibling] = useState(5)

    const addcounthandler = () => {
        setCount(Count+1);
    }
    const removecounter =() =>{
        if(Count === 0){
            return 0;
        }
        setCount (Count-1)
    }
    const handlechangeage = () =>{
            setAge(age+1)
    }
    const handlesibings = () => {
        if (sibling >= 10) {
            return sibling
        }
        setSibling(sibling + 1)
    }

  return (
    <>
    <h1>{Count}</h1>
    <h1>{age}  $$ {sibling}</h1>
    <button onClick={addcounthandler}>Click Me</button>
    <button onClick={removecounter}>Don't Click Me</button>
    <button onClick={handlechangeage}>Do age Me</button>
    <button onClick={handlesibings}>sibling Me</button>
    </>
  )
}

export default Update