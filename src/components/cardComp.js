import React, {Component} from 'react';

export default class CardComp extends Component{

    render(){
    return (
        <div style={{width:'200px', backgroundColor:'maroon', color:'white'}}>
            question: {this.props.questionBody}
            <br/>
            std : {this.props.classs}
            <br/>
            RollNo : {this.props.rollNo}
            <br/>
            {this.props.anyName ? "anyname available" : "" }
        </div>
    )
}
}