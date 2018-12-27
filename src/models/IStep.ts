import { IStepOption } from "./IStepOption";

export interface IStep {
  id: number,
  title: string,
  prev?: number,
  next?: number,
  parent?: number,
  isSummary?: boolean,
  label?: string,
  values?: IStepOption[]
}