import React, { Component, PropTypes } from 'react';

import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { detail: false };

    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDetail(evt) {
    evt.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  toggleDone(evt) {
    evt.preventDefault();
    const { todo, receiveTodo } = this.props;
    const toggledTodo = Object.assign({}, todo, { done: !todo.done });

    receiveTodo(toggledTodo);
  }

  render() {
    const { todo } = this.props;
    const { title, done } = todo;

    let detail;

    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo} />;
    }

    return (
      <li>
        <a onClick={this.toggleDetail}>{title}</a>
        (done: { done ? 'true' : 'false'})
        <button onClick={this.toggleDone}>
          { done ? 'Mark undone' : 'Mark done' }
        </button>
        { detail }
      </li>
    );
  }
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  receiveTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoListItem;
