import { ActionCreator, Action } from "redux";
import { SourceActions } from "./actions";

export const changeSource: ActionCreator<Action> = (sourceId: string) => {
    return {
        type: SourceActions.CHANGE_SOURCE,
        sourceId: sourceId
    }
}