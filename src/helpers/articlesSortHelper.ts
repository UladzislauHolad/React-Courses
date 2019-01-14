import { SortDirections } from "../enums/sortDirections";
import { IArticle } from "../interfaces/IArticle";
import { filterByTerm } from "./articlesFilterHelper";

export const sortByDirection = (articles: IArticle[], direction: SortDirections): IArticle[] => {
    switch(direction) {
        case SortDirections.ASC: {
            articles.sort((a: IArticle, b: IArticle) => {
                if (a.title < b.title) { return -1; }
                if (a.title > b.title) { return 1; }
                return 0;
            });
            return articles;
        }
        case SortDirections.DESC: {
            articles.sort((a: IArticle, b: IArticle) => {
                if (a.title > b.title) { return -1; }
                if (a.title < b.title) { return 1; }
                return 0;
            });

            return articles;
        }
    }

    return articles;
}