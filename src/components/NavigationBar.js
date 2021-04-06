import './NavigationBar.css';
import {Row, Col, Input} from 'antd';

export default function NavigationBar(){
    return ( 
            <Row id="nav">
                <Col span={1}></Col>
                <Col span={6}>
                <Input.Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    suffix={null}
                    onSearch={()=>{}}
                />
                </Col>
                <Col span={4}></Col>
                <Col span={2}>&#9730; Home</Col>
                <Col span={2}>Network</Col>
                <Col span={2}>&#9728; Jobs</Col>
                <Col span={2}>Messages</Col>
                <Col span={2} style={{borderRight:'1px solid grey'}}>Notif.</Col>
                <Col span={2}>try pre.</Col>
                <Col span={1}></Col>  
            </Row> 
    )
}