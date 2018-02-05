import React, { Component } from 'react';
import {connect} from "react-redux";

class Ratings extends Component{

    voteGOT(){

        if(this.props.movieRatings.GOT ){
            return (this.props.movieRatings.GOT/(this.props.movieRatings.GOT+this.props.movieRatings.siliconValley+this.props.movieRatings.Robot)*100);
        }

    }

    voteGOTStyles(){
        return {
            width:this.voteGOT()+"%"
        }
    }

    voteSiliconValley(){
        if(this.props.movieRatings.siliconValley ){
            return (this.props.movieRatings.siliconValley/(this.props.movieRatings.GOT+this.props.movieRatings.siliconValley+this.props.movieRatings.Robot)*100);
        }

    }

    voteSiliconValleyStyles(){
        return {
            width:this.voteSiliconValley()+"%"
        }
    }

    voteRobot(){
        if(this.props.movieRatings.Robot ){
            return (this.props.movieRatings.Robot/(this.props.movieRatings.GOT+this.props.movieRatings.siliconValley+this.props.movieRatings.Robot)*100);
        }

    }


    voteRobotStyles(){
        return {
            width:this.voteRobot()+"%"
        }

    }

    render(){
        return(
            <div>
                    <h3> The result is given below: </h3>
                    {/* <h3> {this.props.movieRatings.GOT}  </h3>
                    <h3> {this.props.movieRatings.siliconValley}  </h3>
                    <h3> {this.props.movieRatings.Robot}  </h3>
                    <h3> {this.voteGOT()} </h3>
                    <h3> {this.voteSiliconValley()} </h3>
                    <h3> {this.voteRobot()} </h3> */}



                    <div>
                    <span className="label label-success"> Game Of Thrones :{this.voteGOT()} </span>
                        <div className="progress progress-striped active">
                             <div className= "progress-bar progress-bar-danger" style={this.voteGOTStyles()} >
                     </div>
                </div>
            </div>


            <div>
                    <span className="label label-success"> Silicon Valley :{this.voteSiliconValley()} </span>
                        <div className="progress progress-striped active">
                             <div className= "progress-bar progress-bar-danger" style={this.voteSiliconValleyStyles()} >
                     </div>
                </div>
            </div>

            <div>
                    <span className="label label-success"> Mr. Robot :{this.voteRobot()} </span>
                        <div className="progress progress-striped active">
                             <div className= "progress-bar progress-bar-danger" style={this.voteRobotStyles()} >
                     </div>
                </div>
            </div>
            </div>

        )
    }

}

function mapStateToProps(state){
    return{
        movieRatings:state.ratingSeries
    }
}



export default connect(mapStateToProps)(Ratings)  ;

