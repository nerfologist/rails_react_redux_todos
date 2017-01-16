import React, { Component, PropTypes } from 'react';

import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends Component {
  render() {
    const { removeTodo } = this.props;
    const { id, body } = this.props.todo;

    return (
      <div>
        <label>Id: {id} </label>
        <label>Body: {body}</label>
        <button onClick={removeTodo}>
          Remove todo
        </button>
        <StepListContainer todo={this.props.todo} />
      </div>
    );
  }
}

TodoDetailView.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoDetailView;
