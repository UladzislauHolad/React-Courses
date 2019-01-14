import { Dispatch } from "react";
import { IArticle } from "../interfaces/IArticle";
import { ArticleActions } from "./actions";
import { sources } from "../collections/sources";

interface IAction {
    type: ArticleActions;
    articles?: IArticle[];
}

export const loadArticles = (sourceId?: string) => {
    const articleSource = !!sourceId ? sourceId : sources.map((source) => source.id);
    const request = new Request(`https://newsapi.org/v2/everything?sources=${articleSource}&apiKey=${process.env.REACT_APP_API_KEY}`)
    return (dispatch: Dispatch<IAction>): any => {
        dispatch({ type: ArticleActions.LOAD_START });
        fetch(request)
            .then((response: Response) => { 
                return response.json() 
            })
            .then(data => {
                const articles = data.articles as IArticle[];
                dispatch({ type: ArticleActions.LOAD_SUCCESS, articles: articles });
            });
    }
}