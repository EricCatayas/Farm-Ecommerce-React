
export type Action<T> = {
  type: T
}
export type ActionWithPayload<T,P> = {
  type: T;
  payload: P
}

// Function signature 1: No payload
export function createAction<T extends string>(type: T, payload:void): Action<T>;
// Function signature 2: With payload
export function createAction<T extends string, P>(type: T, payload:P ): ActionWithPayload<T,P>;

export function createAction<T,P>(type: T, payload: P){ 
  return { type, payload}
}


