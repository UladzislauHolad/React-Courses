import { IArticle } from "../interfaces/IArticle";
import { ArticleActions } from "../actions";

export type ArticlesState = {
    articles?: IArticle[],
    isLoading: boolean
}

interface IArticlesAction {
    type: ArticleActions;
    articles?: IArticle[];
}

const initialState: ArticlesState = {
    isLoading: false
}

export default (state: ArticlesState = initialState, action: IArticlesAction) => {
    const { type } = action;

    switch(type) {
        case ArticleActions.LOAD_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ArticleActions.LOAD_SUCCESS: {
            return {
                ...state,
                articles: action.articles,
                isLoading: false
            }
        }
    }

    return state
}