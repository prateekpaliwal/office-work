import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchByClick = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [click, setClick] = useState(1);

    const handleclick = () =>{
        setClick(id)
    }

    useEffect(()=>{
        console.log('useeffect called');
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPost(res.data)
        }).catch(err => {
            console.log(err);
        })
    },[click])
  return (
    <div>
        <input type='text' value={id} onChange={e=> setId(e.target.value)} />
        <button type='button' onClick={handleclick} >Fetch</button>
        <div>{post.title}</div>
    </div>
  )
}

export default FetchByClick