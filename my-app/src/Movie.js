import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {voteForGOT,voteForRobot,voteForSiliconValley} from "./actions";


class Movie extends Component {
    constructor(props){
            super(props);
            this.state={
                GOT:0,
                siliconValley:0,
                robot:0
            }
    }

    handleGOT(e){

        this.setState({
            GOT:this.state.GOT+1
        })
        console.log("GOT..",this.state.GOT );
        this.props.voteForGOT();
    }

    // handleGOTdecrease(e){
    //     this.setState({
    //         justice:this.state.justice-1
    //     })
    //     console.log("justice..",this.state.justice );
    // }

    handleSiliconValley(e){
        this.setState({
            siliconValley:this.state.siliconValley+1
        })
        console.log("siliconValley..",this.state.siliconValley );
        this.props.voteForSiliconValley();
    }

    handleMrRobot(e){

        this.setState({
            robot:this.state.robot+1
        })
        console.log("robot..",this.state.robot );
        this.props.voteForRobot();
    }


    render() {
      return (
<div>
<div className="jumbotron" style={{"textAlign":"center"}}>

    <img src="sabin.jpg" height="96" alt="sabin"></img>

    <h2> What is your favourite Series  in 2018?</h2>
    <h4> Click on the logo below to vote!!! </h4>

    <br/>

    <div className="row">
          <div className="col-xs-offset-3 col-xs-2">
            <button class="btn btn-primary btn-md" onClick={this.handleGOT.bind(this)} > Vote for Game Of thrones </button>
          </div>

          <div className="col-xs-2">
          <button class="btn btn-primary btn-md" onClick={this.handleSiliconValley.bind(this)}> Vote for Silicon Valley </button>
          </div>

          <div className="col-xs-2">
          <button class="btn btn-primary btn-md" onClick={this.handleMrRobot.bind(this)}> Vote for Mr. Robot </button>

          </div>
    </div>
</div>

</div>
      );
    }
  }

  function mapDispatchToProps(dispatch){
      return bindActionCreators({voteForGOT,voteForSiliconValley,voteForRobot},dispatch);
  }

  export default connect(null,mapDispatchToProps)(Movie) ;
