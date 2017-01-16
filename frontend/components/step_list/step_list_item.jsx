import React, { PropTypes } from 'react';

const toggleStep = step => {
  return Object.assign({}, step, { done: !step.done });
};

const StepListItem = ({ step, receiveStep, removeStep }) => (
  <li>
    {step.title} (done: { step.done ? 'true' : 'false' })
    <button onClick={() => receiveStep(toggleStep(step))}>
      {`Set ${step.done ? 'undone' : 'done'}`}
    </button>
    <button onClick={() => removeStep(step)}>
      Remove step
    </button>
  </li>
);

StepListItem.propTypes = {
  step:        PropTypes.object.isRequired,
  receiveStep: PropTypes.func.isRequired,
  removeStep:  PropTypes.func.isRequired
};

export default StepListItem;
