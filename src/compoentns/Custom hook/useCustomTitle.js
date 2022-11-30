import {useEffect} from 'react'


const useCustomTitle = (count) => {
  useEffect(()=>{
    document.title = `count ${count}`
  },[count])
}

export default useCustomTitle