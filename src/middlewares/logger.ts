import { Middleware, MiddlewareAPI, Dispatch } from "redux";

export const logger: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => action => {
    console.group(action.type);

    console.log('previous state', store.getState());
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());

    console.groupEnd();
    return result;
};
