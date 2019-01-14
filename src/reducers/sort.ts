import { SortActions } from "../actions";
import { SortDirections } from "../enums/sortDirections";

export type SortState = SortDirections;

interface ISortAction {
    type: SortActions,
    direction: SortDirections
}

export default (state: SortState = SortDirections.ASC, action: ISortAction) => {
    const { type } = action;

    switch(type) {
        case SortActions.CHANGE_DIRECTION: {
            return action.direction;
        }
    }

    return state;
}