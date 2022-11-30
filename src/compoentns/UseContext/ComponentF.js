import React from 'react';
import {UserContext} from '../App';


const ComponentF = () => {
  return (
    <div>
        <UserContext.Consumer>
            {user => {
                return <div> user Context Value {user}</div>
            }}
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF