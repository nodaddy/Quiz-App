import {Row, Col, Card, Button} from 'antd';
import { useState } from 'react';

export default function QuestionCard(props){

    const [score, setScore] = useState(0);
    const [ans, setAns] = useState(null);

    return (
        <Row>
            <Col xs={{span:0}} lg={{span:2}}></Col>
            <Col xs={{span:24}} lg={{span:20}} align="center">
                <Card title={`${props.index}. ${props.question}`} style={{width:'70%',padding:'30px',margin:'40px', backgroundColor:'antiquewhite'}}> 
                        <div
                        onClick={(e)=>{
                            if(e.target.innerHTML == props.ans) {
                                let sc = score + 1;
                                setScore(sc);
                                e.target.style.backgroundColor = 'green';
                                e.target.style.color = 'white';
                            } else {
                                e.target.style.backgroundColor = 'red';
                                e.target.style.color = 'white';
                            }
                        }}
                        style={{margin:'10px'}}>
                            {props.options[0].isCorrect}
                        </div>


                        <div
                        onClick={(e)=>{
                            if(e.target.innerHTML == props.ans) {
                                let sc = score + 1;
                                setScore(sc);
                                e.target.style.backgroundColor = 'green';
                                e.target.style.color = 'white';

                            } else {
                                e.target.style.backgroundColor = 'red';
                                e.target.style.color = 'white';
                            }
                        }}
                        style={{margin:'10px'}}>
                            {props.options[1].answerText}
                        </div>


                        <div
                        onClick={(e)=>{
                            if(e.target.innerHTML == props.ans) {
                                let sc = score + 1;
                                setScore(sc);
                                e.target.style.backgroundColor = 'green';
                                e.target.style.color = 'white';

                            } else {
                                e.target.style.backgroundColor = 'red';
                                e.target.style.color = 'white';
                            }
                        }}
                        style={{margin:'10px'}}>
                            {props.options[2].answerText}
                        </div>


                        <div
                        onClick={(e)=>{
                            if(e.target.innerHTML == props.ans) {
                                let sc = score + 1;
                                setScore(sc);
                                e.target.style.backgroundColor = 'green';
                                e.target.style.color = 'white';

                            } else {
                                e.target.style.backgroundColor = 'red';
                                e.target.style.color = 'white';
                            }
                        }}
                        style={{margin:'10px'}}>
                            {props.options[3].answerText}
                        </div> 
                        <br/> 
                </Card> 

                <Button onClick={()=>{
                    alert(score);
                }}>Show Score</Button>
                
            </Col>
            <Col xs={{span:0}} lg={{span:2}}></Col>
        </Row>
    )
}