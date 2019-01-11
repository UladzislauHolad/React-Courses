import { IState } from "../interfaces/IState";
import { Operations } from "../Enums/Operations";

export type CalcAction = {
  type: string,
  label: string
}

const initState: IState = {
  output: '',
  isMustBeClear: false
};

const doOperation = (firstNumber: number, secondNumber: number, operation: Operations): number => {
  switch (operation) {
    case Operations.Addition:
      return firstNumber + secondNumber;
    case Operations.Substraction:
      return firstNumber - secondNumber;
    case Operations.Multiplication:
      return firstNumber * secondNumber;
    case Operations.Division:
      return secondNumber === 0 ? 0 : firstNumber / secondNumber;
  }
}

const changeStateWithOperation = (state: IState, operation:Operations): IState => {
  if (state.output.length == 0) {
    if (!!state.firstNumber) {
      return {
        ...state,
        operation: operation
      }
    }

    return state;
  } else {
    if (!!state.firstNumber) {
      const result = doOperation(state.firstNumber, +state.output, state.operation!);
      return {
        ...state,
        firstNumber: result,
        output: result.toString(),
        operation: operation,
        isMustBeClear: true
      }
    } else {
      return {
        ...state,
        firstNumber: +state.output,
        output: '',
        operation: operation
      }
    }
  }
}

const rootReducer = (state: IState = initState, action: CalcAction): IState => {
  switch (action.type) {
    case 'SELECT_NUMBER': {
      const newState = (): IState => {
        if (state.isMustBeClear) {
          return {
            ...state,
            output: action.label,
            isMustBeClear: false
          }
        }

        return {
          ...state,
          output: state.output + action.label
        }
      }

      return {
        ...state,
        ...newState()
      }
    }
    case 'SELECT_PLUS': {
      const newState = changeStateWithOperation(state, Operations.Addition)

      return {
        ...state,
        ...newState
      }
    }
    case 'SELECT_MINUS': {
      const newState = changeStateWithOperation(state, Operations.Substraction)

      return {
        ...state,
        ...newState
      }
    }
    case 'SELECT_DIV': {
      const newState = changeStateWithOperation(state, Operations.Division)

      return {
        ...state,
        ...newState
      }
    }
    case 'SELECT_MULT': {
      const newState = changeStateWithOperation(state, Operations.Multiplication)

      return {
        ...state,
        ...newState
      }
    }
    case 'SELECT_RESULT': {
      const isResultPossible = !!state.operation && state.firstNumber !== undefined && state.output.length > 0;
      if(isResultPossible) {
        const result = doOperation(state.firstNumber!, +state.output, state.operation!)
        return {
          ...state,
          output: result.toString(),
          firstNumber: undefined,
          operation: undefined,
          isMustBeClear: true
        }
      }

      return state;
    }
    case 'SELECT_CLEAR':
      return {
        ...state,
        output: '',
        firstNumber: undefined,
        operation: undefined,
        isMustBeClear: false
      }
  }

  return state;
}

export default rootReducer;