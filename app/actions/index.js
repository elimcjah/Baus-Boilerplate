import { bindActionCreators } from 'redux';
import * as CounterActions from './counter';
import * as PostsActions from './posts';

export function bindActions (dispatch) {
  return {
    counter: bindActionCreators(CounterActions, dispatch),
    posts: bindActionCreators(PostsActions, dispatch)
  };
}
