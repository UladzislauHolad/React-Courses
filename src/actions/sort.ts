import { Action, ActionCreator } from "redux";
import { SortActions } from "./actions";
import { SortDirections } from "../enums/sortDirections";

export const changeSortDirection: ActionCreator<Action> = (direction: SortDirections) => {
    return {
        type: SortActions.CHANGE_DIRECTION,
        direction: direction
    }
}