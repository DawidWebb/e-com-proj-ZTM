import { AnyAction } from "redux";

// to jest typ który określa co będzie zwrócone z funkcji jako zwrot właśnie z tej funkcji - po to aby mieć otypowany zwrot z wybranej funkcji, AC to ActionCreator
type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string; }>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string; }>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction) {
            return action.type === type;
        }
    });
}

export type ActionWithPayload<T, P> = {
    type: T;
    //T bedzei jedna z akcji enum z categories types
    payload: P;
    // tu jnie możemy dać payload? - ponieważ jak nie będzei payload to P będzie udefined
};

//dla akcji bez payload
export type Action<T> = {
    type: T;
    // tu nie będzie payload - nie będzie tej właściwości, nie będzie też undefined
};

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload };
}


