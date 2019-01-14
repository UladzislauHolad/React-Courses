import { IArticle } from "../interfaces/IArticle";

export const filterByTerm = (articles: IArticle[], searchTerm: string): IArticle[] => {
    return searchTerm === '' 
        ? articles
        : articles.filter((article) => {
            const searchArea = (article.title + article.description).toLowerCase();
            return searchArea.includes(searchTerm.toLowerCase())
        })
}