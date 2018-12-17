import React from 'react';
import WizardTitle from './WizardTitle';
import WizardOptions from './WizardOptions';
import WizardControl from './WizardControl';
import WizardSummary from './WizardSummary';
import './Wizard.css';


class Wizard extends React.Component {
  state = {
    currentStepId: this.getFirstStep(),
    stepsStates: this.getStepsStates()
  };

  getFirstStep() {
    return this.props.steps[0].id;
  }

  getStepsStates() {
    const stepsStates = this.props.steps.map((step) => {
      return {
        id: step.id,
        label: step.label,
        isSummary: step.isSummary
      }
    });

    return stepsStates;
  }

  handleNextStep = () => {
    const nextStepId = this.getNextStepId();
    this.setCurrentStepId(nextStepId);
    this.checkOptions(nextStepId);
  }

  handlePrevStep = () => {
    const prevStepId = this.getPrevStepId();
    this.setCurrentStepId(prevStepId);
  }

  handleOptionChange = (value) => () => {
    this.setStepValue(this.state.currentStepId, value);
  }

  setCurrentStepId(newStepId) {
    this.setState({
      currentStepId: newStepId
    });
  }

  setStepValue(stepId, value) {
    this.setState({
      stepsStates: this.state.stepsStates.map((state) => {
        if (state.id === stepId) {
          state.value = value;
        }
        return state;
      })
    });
  }

  checkOptions(stepId) {
    const step = this.getStep(stepId);
    if(step.isSummary){
      return;
    }

    const options = this.getOptions(stepId);
    const stepValue = this.state.stepsStates.find(x => x.id === stepId).value;
    const isParentChanged = !options.some(x => x.value === stepValue);
    
    if(isParentChanged && stepValue) {
      this.setStepValue(stepId, undefined);
    }
  }

  getPrevStepId() {
    const prevStepId = this.getStep(this.state.currentStepId).prev;
    return prevStepId;
  }

  getNextStepId() {
    const nextStepId = this.getStep(this.state.currentStepId).next;
    return nextStepId;
  }

  getStep(stepId) {
    return this.props.steps.find(x => x.id === stepId);
  }

  getOptions(stepId) {
    const step = this.getStep(stepId);
    if (!step.parent) {
      return step.values;
    }

    const parentValue = this.state.stepsStates.find(x => x.id === step.parent).value;
    const options = step.values.filter(x => x.parentValue === parentValue);
  
    return options;
  }

  getStepState(stepId) {
    return this.state.stepsStates.find(x => x.id === stepId);
  }

  getSummary() {
    return this.state.stepsStates.filter(x => !x.isSummary);
  }

  render() {
    const currentStep = this.getStep(this.state.currentStepId);
    const currentStepState = this.getStepState(this.state.currentStepId);
    const currentOptions = this.getOptions(this.state.currentStepId);

    return (
      <div className="wizard">
        <WizardTitle value={currentStep.title} />
        {currentStep.isSummary ? (
          <WizardSummary items={this.getSummary()} />
        ) : (
          <WizardOptions
            options={currentOptions}
            selected={currentStepState.value}
            handleOptionChange={this.handleOptionChange} />
        )}
        <WizardControl
          handlePrev={this.handlePrevStep}
          handleNext={this.handleNextStep}
          prevHidden={!currentStep.prev && true}
          nextHidden={!currentStep.next && true}
          nextDisabled={!currentStepState.value && true} />
      </div>
    );
  }
}

export default Wizard;