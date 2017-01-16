import { connect } from 'react-redux';

import { destroyTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch, { todo }) => ({
  destroyTodo: () => dispatch(destroyTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
