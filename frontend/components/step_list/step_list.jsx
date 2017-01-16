import React, { PropTypes } from 'react';

import StepForm from './step_form';
import StepListItemContainer from './step_list_item_container';

const StepList = ({ steps, todo, receiveStep }) => (
  <div>
    Steps:
    <ul>
      { steps.map(step => <StepListItemContainer key={step.id} step={step} />) }
    </ul>
    <StepForm receiveStep={receiveStep} todo={todo} />
  </div>
);

StepList.propTypes = {
  receiveStep: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  todo: PropTypes.object.isRequired
};

export default StepList;
