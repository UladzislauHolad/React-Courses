import { ActionCreator, Action } from "redux";
import { SearchActions } from "./actions";

export const changeSearchTerm: ActionCreator<Action> = (searchTerm: string) => {
    return {
        type: SearchActions.CHANGE_SEARCH_TERM,
        searchTerm: searchTerm
    }
}