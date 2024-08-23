export interface IExceptionService {
  badRequest(message?: string, context?: string): never;
  unauthorized(message?: string, context?: string): never;
  forbidden(message?: string, context?: string): never;
  notFound(message?: string, context?: string): never;
  conflict(message?: string, context?: string): never;
}

export const IExceptionServiceToken = "IExceptionService";
