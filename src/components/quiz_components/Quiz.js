// this is 'one answer right' type questions
// 2 question sets : easy and difficult
// on submit -> calculate the score by comparing with a answer key of the set
// answer key of a set ~ array answerKeyArray ['a', 'b', 'd', 'd', 'b']

// onsubmit => week keep track of the answerOptions selected and we loop over the
// respective answer key to get the score
import {quizData} from './quizData'
import QuestionCard from './QuestionCard';
import {Row, Col, Card, Button} from 'antd'; 
import { useState } from 'react';
import './../../App.css'

export default function Quiz(props){

    const [score, setScore] = useState(0); 

    return (
        <div>
            <h1>Quiz</h1>
            <br/>
            <br/>
            {
                quizData.length != 0 ? quizData.map((ques)=>{ 
                   return <Row>
            <Col xs={{span:0}} lg={{span:2}}></Col>
            <Col xs={{span:24}} lg={{span:20}} align="center">
                <Card title={`${ques.index}. ${ques.question}`} style={{width:'70%',padding:'30px',margin:'40px', backgroundColor:'antiquewhite'}}> 
                        <div
                        className="optiondiv"
                        onClick={(e)=>{
                            if(e.target.innerHTML == ques.ans) {
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
                            {ques.answerOptions[0].answerText}
                        </div>


                        <div
                        className="optiondiv"

                        onClick={(e)=>{
                            if(e.target.innerHTML == ques.ans) {
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
                            {ques.answerOptions[1].answerText}
                        </div>


                        <div
                        className="optiondiv"

                        onClick={(e)=>{
                            if(e.target.innerHTML == ques.ans) {
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
                            {ques.answerOptions[2].answerText}
                        </div>


                        <div
                        className="optiondiv"

                        onClick={(e)=>{
                            if(e.target.innerHTML == ques.ans) {
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
                            {ques.answerOptions[3].answerText}
                        </div> 
                        <br/> 
                </Card> 
                
            </Col>
            <Col xs={{span:0}} lg={{span:2}}></Col>
        </Row>
                }) : "No Questions! Holiday"
            }
            <Button onClick={()=>{
                    alert(score);
                }}>Show Score</Button>
        </div>
    )
}

