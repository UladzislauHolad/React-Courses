import { ActionCreator, Action, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Dispatch } from "react";
import { IArticle } from "../interfaces/IArticle";
import { ArticleActions } from "./actions";
import { sources } from "../collections/sources";

interface IState {
    type: string;
    articles: IArticle[];
}

export const load: any = (sourceId?: string) => {
    const articleSource = !!sourceId ? sourceId : sources.map((source) => source.id);
    return (dispatch: any): any => {
        dispatch({ type: ArticleActions.LOAD_START });
        fetch(`https://newsapi.org/v2/everything?sources=${articleSource}&apiKey=${process.env.REACT_APP_API_KEY}`).then(
            (response: any) => { 
                return response.json() 
            }).then(data => {
                const articles = data.articles as IArticle[];
                dispatch({ type: ArticleActions.LOAD_SUCCESS, articles: articles });
            });
    }
}