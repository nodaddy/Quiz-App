import {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Spin} from 'antd';

export default function PostContainer(){

    const [postArray, setPostArray] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res);
            setPostArray(res.data);
        })
    },[]) 

    return (
        <div>
            {
                postArray.length != 0 ? postArray.map((ele)=>{
                    return(
                    <Card style={{marginBottom:'15px', borderRadius:'15px'}} title={ele.title}>{ele.body}</Card>
                    )
                }) : <Spin/>
            }
        </div>
    )
}