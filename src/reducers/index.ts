import sortReducer, { SortState } from "./sort";
import { combineReducers } from "redux";

export interface IStoreState {
    sort: SortState
}

export default combineReducers({
    direction: sortReducer
});