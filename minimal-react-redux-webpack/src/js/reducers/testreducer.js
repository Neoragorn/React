import { TEST } from "../constants/action-types";

const testReducer  = (state = [], action) => {
    console.log("passed in reducer test");
    switch (action.type) {
      case TEST:
      {
        console.log("PASSED IN TEST")
        return [...state, action.t];
      }
      default:
      {
        console.log("PASSED IN DEFAULT")
        return state;
      }
    }
  };
  
  export default testReducer;
  