import { ActionReducer, Action } from "@ngrx/store";

export function logoutMetareducer(reducer: ActionReducer<any>) {
    return function(state: any, action: Action) {
      return reducer(state, action);
    };
}