import myPic from './../assets/logo192.png';
import './ProfileCard.css';

export default function ProfileCard(){
    return (
        <div id="pc">
            <div id="pcbg">
                
            </div>
            <img id="pp" src={myPic}></img>
            <br/>
            <br/>
            <h3>Neelesh Sharma</h3>
            <p id="profilePara">
                College | etc | etc <br/>
                Address | skills | etc <br/>
                etc
            </p>
            <hr/>
            More Info.
            <hr/>
            ...
            <br/><br/>
        </div>
    )
}