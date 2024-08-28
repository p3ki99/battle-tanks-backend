export interface IAction<In, Out> {
  execute(param: In): Promise<Out>;
}
