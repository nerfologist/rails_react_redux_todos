import React, { PropTypes, Component } from 'react';

import uniqueId from '../../util/unique_id';

class StepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const newStep = Object.assign({},
      this.state, { id: uniqueId(), todo_id: this.props.todo.id });
    this.props.receiveStep(newStep);

    this.setState({
      title: '',
      done: false
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Add step:
          <input type="text" onChange={this.update('title')} value={this.state.title} />
        </label>
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

StepForm.propTypes = {
  receiveStep: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default StepForm;
