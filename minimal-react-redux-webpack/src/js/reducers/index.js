import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import testReducer from "./testreducer";

export default combineReducers({ articles: articleReducer , test: testReducer});
