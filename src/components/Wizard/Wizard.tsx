import React from 'react';
import WizardTitle from './WizardTitle';
import WizardOptions from './WizardOptions';
import WizardControl from './WizardControl';
import WizardSummary from './WizardSummary';
import './Wizard.css';
import { IStep } from '../../models/IStep';
import { IStepOption } from '../../models/IStepOption';


interface IStepState {
  id: number,
  label?: string,
  isSummary?: boolean,
  value?: string
}

interface IWizardState {
  currentStepId: number,
  stepsStates: IStepState[]
}

interface IWizardProps {
  steps: IStep[]
}

class Wizard extends React.Component<IWizardProps, IWizardState> {
  public state = {
    currentStepId: this.getFirstStep(),
    stepsStates: this.getStepsStates()
  };

  private getFirstStep(): number {
    return this.props.steps[0].id;
  }

  private getStepsStates(): IStepState[] {
    const stepsStates = this.props.steps.map((step) => {
      return {
        id: step.id,
        label: step.label,
        isSummary: step.isSummary
      }
    });

    return stepsStates;
  }

  private handleNextStep = () => {
    const nextStepId = this.getNextStepId();
    this.setCurrentStepId(nextStepId);
    this.checkOptions(nextStepId);
  }

  private handlePrevStep = () => {
    const prevStepId = this.getPrevStepId();
    this.setCurrentStepId(prevStepId);
  }

  private handleOptionChange = (value: string) => () => {
    this.setStepValue(this.state.currentStepId, value);
  }

  private setCurrentStepId(newStepId: number) {
    this.setState({
      currentStepId: newStepId
    });
  }

  private setStepValue(stepId: number, value: string) {
    this.setState({
      stepsStates: this.state.stepsStates.map((state) => {
        if (state.id === stepId) {
          state.value = value;
        }
        return state;
      })
    });
  }

  private checkOptions(stepId: number) {
    const step = this.getStep(stepId);
    if (step.isSummary) {
      return;
    }

    const options = this.getStepOptions(stepId);
    const stepValue = this.state.stepsStates.find(x => x.id === stepId).value;
    const isParentChanged = !options.some(x => x.value === stepValue);

    if (isParentChanged && stepValue) {
      this.setStepValue(stepId, undefined);
    }
  }

  private getPrevStepId(): number {
    const prevStepId = this.getStep(this.state.currentStepId).prev;
    return prevStepId;
  }

  private getNextStepId(): number {
    const nextStepId = this.getStep(this.state.currentStepId).next;
    return nextStepId;
  }

  private getStep(stepId: number): IStep {
    return this.props.steps.find(x => x.id === stepId);
  }

  private getStepOptions(stepId: number): IStepOption[] {
    const step = this.getStep(stepId);
    if (!step.parent) {
      return step.values;
    }

    const parentValue = this.state.stepsStates.find(x => x.id === step.parent).value;
    const options = step.values.filter(x => x.parentValue === parentValue);

    return options;
  }

  private getStepState(stepId: number): IStepState {
    return this.state.stepsStates.find(x => x.id === stepId);
  }

  private getSummary(): IStepState[] {
    return this.state.stepsStates.filter(x => !x.isSummary);
  }

  public render() {
    const currentStep = this.getStep(this.state.currentStepId);
    const currentStepState = this.getStepState(this.state.currentStepId);
    const currentOptions = this.getStepOptions(this.state.currentStepId);

    return (
      <div className="wizard">
        <WizardTitle value={currentStep.title} />
        {currentStep.isSummary ? (
          <WizardSummary items={this.getSummary()} />
        ) : (
            <WizardOptions
              options={currentOptions}
              selected={currentStepState.value}
              optionChangeHandler={this.handleOptionChange} />
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