import { combineReducers } from "redux";
import { albumFeatureKey,albumreducer } from "./albumreducer";

let rootReducer = combineReducers({
    [albumFeatureKey]: albumreducer,

})
export { rootReducer };