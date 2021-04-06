import {Input, Row, Col, Button} from 'antd'; 

export default function PostCreator(){
    return (
        <div align="left" style={{backgroundColor: 'white', padding:'20px', borderRadius:'10px'}}>
            <img style={{borderRadius:'50%', width:'10%', marginTop:'-10px'}} src="https://media-exp1.licdn.com/dms/image/C4E03AQFS6ixly7-CZQ/profile-displayphoto-shrink_100_100/0/1617010489934?e=1623283200&v=beta&t=GZd3VT-qLt5hWMJG-vwCJF2qTXWYKDnlJa9aFjMOOqU"/>
            <input placeholder="Start a post" style={{border:'1px solid silver',marginLeft:'20px', width:'83%', borderRadius:'25px', padding:'12px'}}/>
            <Row style={{marginTop:'20px'}}>
                <Col align="center" style={{border:'0px solid black'}} span={6}>
                    <Button type="default">&#9728; Photo</Button>
                </Col>
                <Col align="center" style={{border:'0px solid black'}} span={6}>
                    <Button type="default">&#9730; Video</Button>
                </Col>
                <Col align="center" style={{border:'0px solid black'}} span={6}>
                    <Button type="default"> &#9728; Events</Button>
                </Col>
                <Col align="center" style={{border:'0px solid black'}} span={6}>
                    <Button type="default"> &#9728; write-article</Button>
                </Col>
            </Row>
        </div>
    )
}