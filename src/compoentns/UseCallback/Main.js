import React, {useState,useCallback} from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';
const Main = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000)
  const incrementAge = useCallback(() =>{
    setAge(age+1)
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary+ 1000)
  }, [salary])
  return (
    <div>
      <Title />
      <Count text = "age" count={age} />
      <Button handleClick={incrementAge}>increment Age</Button>
      <Count text = "Salary" count={salary} />
      <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  )
}

export default Main