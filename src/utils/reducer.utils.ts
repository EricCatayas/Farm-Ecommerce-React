export type Action<T extends string = string> = {
  type: T
}

export type ActionWithPayload<T extends string, P> = Action<T> & {
  payload: P;
};

export interface AnyAction extends Action {
  [extraProps: string]: any;
}
/**
 * A *Matchable* is provides a predicate function that matches an action argument to the corresponding action creator's return action type.
 * @argument ActionCreator that returns an AnyAction
 */
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends () => AnyAction>(actionCreator: AC): Matchable<AC>;
export function withMatcher<AC extends (...args:any[]) => AnyAction>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function){
  const type = actionCreator().type;
  return Object.assign(
    {      
      type,
      match(action: AnyAction){
        return action == type;
      }
    }
  )
}



// Function signature 1: No payload
export function createAction<T extends string>(type: T, payload:void): Action<T>;
// Function signature 2: With payload
export function createAction<T extends string, P>(type: T, payload:P ): ActionWithPayload<T,P>;

export function createAction<T,P>(type: T, payload: P){ 
  return { type, payload}
}


