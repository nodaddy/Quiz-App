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
import Quiz from './components/quiz_components/Quiz';



function App() {
  return (
    <div className="App">
      <Quiz/>
    </div>
  );
}
 


export default App;
