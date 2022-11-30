import React, { useState } from 'react'

const ObjectUpdate = () => {
    const [name, setName] = useState({firstname:"", lastname: ""});
    
    // const setFirstname = (e) => {
    //     setName(exixstingValues => ({
    //         ...exixstingValues,
    //         firstname: e.target.value
    //     }))
    // }
    // const setLastname = (e) => {
    //     setName(exixstingValues => ({
    //         ...exixstingValues,
    //         lastname: e.target.value
    //     }))
    // }

    const updateName = (e) => {
        const fieldName = e.target.name
        setName(exisitingValues => ({
            ...exisitingValues,
            [fieldName]: e.target.value
        }))
    }


  return (
    <>
    <div>
        <label>First Name : </label>
        <input type='text' name='firstName' id='firstname' value={name.firstname} onChange={updateName}/>
    </div>
    <div>
        <label>Last Name : </label>
        <input type='text' name='lastname' id='lastname' value={name.lastname} onChange={updateName}/>
    </div>
    <div>
        Name is : {name.firstname} {name.lastname}
    </div>
    </>
    
  )
}

export default ObjectUpdate