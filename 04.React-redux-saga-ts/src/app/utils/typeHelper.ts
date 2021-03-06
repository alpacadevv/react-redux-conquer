import { Action as ReduxAction } from 'redux';

export interface Action<T extends string, P = undefined> extends ReduxAction {
  type: T;
  payload: P;
}
