import { SourceActions } from "../actions";
import { loadArticles } from "../actions/article";

export type SourceState = string;

interface ISourceAction {
    type: SourceActions,
    sourceId: string
}

export default (state: SourceState = '', action: ISourceAction) => {
    const { type } = action;

    switch(type) {
        case SourceActions.CHANGE_SOURCE: {
            return action.sourceId;
        }
    }

    return state;
}