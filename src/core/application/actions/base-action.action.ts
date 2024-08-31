import { Inject, Injectable } from "@nestjs/common";
import { IAction } from "../interfaces/app-services/action.interface";
import {
  ICoreMapper,
  ICoreMapperToken,
  IExceptionService,
  IExceptionServiceToken,
  ILoggerService,
  ILoggerServiceToken,
} from "../interfaces";

@Injectable()
export abstract class BaseAction<In extends any = any, Out extends any = any> implements IAction<In, Out> {
  @Inject(IExceptionServiceToken) protected exceptionService: IExceptionService;
  @Inject(ILoggerServiceToken) protected loggerService: ILoggerService;
  @Inject(ICoreMapperToken) protected mapperService: ICoreMapper;

  constructor() {}

  public execute(params: In): Promise<Out> {
    return this.handle(params);
  }

  protected abstract handle(params?: In): Promise<Out>;
}
