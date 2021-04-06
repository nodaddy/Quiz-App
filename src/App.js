import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ProfileCard from './components/ProfileCard';
import PostContainer from './components/post/PostContainer';
import {Row, Col} from 'antd';

import 'antd/dist/antd.css';
import PostCreator from './components/post/PostCreator';
import CommentsContainer from './components/CommentsContainer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>  
      <br/>
      <Row>
        <Col span={1}></Col>
        <Col span={5}>
          <ProfileCard/>
        </Col>

        <Col span={12} style={{padding: '20px'}}>
          <PostCreator/>
          <br/>  
          <br/>
          <PostContainer/>  
        </Col>

        <Col span={5}>
          <CommentsContainer/>
        </Col>

        <Col span={1}></Col>
      </Row>
    </div>
  );
}
 


export default App;
