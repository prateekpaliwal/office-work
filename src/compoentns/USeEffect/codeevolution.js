import React, { useState , useEffect} from 'react'

const Codeevolution = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("useeffect");
     document.title= `title ${count}`
    
      
    },[count])
    
  return (
    <div>
        <input type='text' value= {name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>you click me {count}</button>

    </div>
  )
}

export default Codeevolution