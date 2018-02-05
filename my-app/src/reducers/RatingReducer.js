const initialState={
    GOT:0,
    siliconValley:0,
    Robot:0

}

export default function(state=initialState,action){

    switch(action.type){
        case "voteGOT":
      let valueOfGOT= Object.assign({},state,{
        GOT:state.GOT+1
      })
      console.log("Value of GOt is :",valueOfGOT);
        return valueOfGOT;

        case "voteSiliconValley":
       // console.log("Added to Silicon Valley");
       let valueOfSiliconValley= Object.assign({},state,{
        siliconValley:state.siliconValley+1
      });
      console.log("Value of valueOfSiliconValley is :",valueOfSiliconValley);
        return valueOfSiliconValley;

        case "voteRobot":
      //  console.log("Added to Robot Valley");
      let valueOfRobot= Object.assign({},state,{
        Robot:state.Robot+1
      })
      console.log("Value of valueOfRobot is :",valueOfRobot);

        return valueOfRobot;

        default:
        return state

    }

}