import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spin, Card } from 'antd';

export default function CommentsContainer(props){

   const [commentsArray, setCommentsArray] = useState([]);

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>{
    console.log(res.data);
    setCommentsArray(res.data);
   })
   }, [])

    return(
        <div style={{overflowY:'scroll', height:'80vh'}}>
            <h3>Latest comments</h3>
            {
                commentsArray.length == 0 ?<Spin/> : commentsArray.map((comment)=>{
                  return  <Card>{comment.name}</Card>
                })
            }
        </div>
    )
} 