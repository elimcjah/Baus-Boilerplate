import { combineReducers } from 'redux';
import counter, { initialState as counterInitialState } from './counter';
import err, { initialState as errInitialState } from './err';
import posts, { } from './posts';

const reducers = {
  counter,
  err
};

export const initialState = {
  counter: counterInitialState,
  posts: posts,
  err: errInitialState
};

export default combineReducers(reducers);
