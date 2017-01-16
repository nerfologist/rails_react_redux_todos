import React, { PropTypes, Component } from 'react';

import uniqueId from '../../util/unique_id';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const newTodo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.createTodo(newTodo)
      .then(() => this.setState({ title: '', body: '', done: false }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title: 
          <input type="text"
            name="title"
            value={this.state.title}
            onChange={this.update('title')} />
        </label>
        <label>
          Body: 
          <input type="text"
            name="body"
            value={this.state.body}
            onChange={this.update('body')} />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired
};

export default TodoForm;
