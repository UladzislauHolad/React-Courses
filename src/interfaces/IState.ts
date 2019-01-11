import { Operations } from "../Enums/Operations";

export interface IState {
  output: string,
  isMustBeClear: boolean,
  operation?: Operations,
  firstNumber?: number
}