import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ProfileCard from './components/ProfileCard';
import PostContainer from './components/post/PostContainer';
import {Row, Col} from 'antd';

import 'antd/dist/antd.css';
import PostCreator from './components/post/PostCreator';
import CommentsContainer from './components/CommentsContainer';
import CardComp from './components/cardComp';



function App() {
  const arr = ["fsefss", "llp", "fsfs"];
  return (
    <div className="App">
      <NavigationBar/>  
      <CardComp studentName="Neelesh" classs="12" rollNo="33" anyName={true}/>
      <br/>
      <CardComp studentName="person2" classs="12ikdfsbi" rollNo="r34w53q33" anyName={false}/>
  

    </div>
  );
}
 


export default App;
