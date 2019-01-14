import sortReducer, { SortState } from "./sort";
import sourceReducer, { SourceState } from "./source";
import { combineReducers } from "redux";
import articlesReducer, { ArticlesState } from "./articles";
import searchReducer, { SearchState } from "./search";

export default combineReducers({
    sortDirection: sortReducer,
    sourceId: sourceReducer,
    articles: articlesReducer,
    searchTerm: searchReducer
});