import { SearchActions } from "../actions";

export type SearchState = string;

interface ISearchAction {
    type: SearchActions,
    searchTerm: string
}

export default (state: SearchState = '', action: ISearchAction) => {
    const { type } = action;

    switch(type) {
        case SearchActions.CHANGE_SEARCH_TERM: {
            return action.searchTerm;
        }
    }

    return state;
}