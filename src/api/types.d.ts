/* eslint-disable no-unused-vars */
import type * as E from 'express';
namespace Api {
  export type Status = 'error' | 'warning' | 'success';

  export interface Result<T> {
    status: Status;
    message: string;
    data: null | T;
    stdErrMessage?: string;
    code?: number;
    token?: string;
  }
}

export { Api };

interface ParamsDictionary {
  [key: string]: string;
}

export interface RequestHandler<Query, Body, Response> {
  (
    req: E.Request<ParamsDictionary, Api.Result<Response | null>, Body, Query>,
    res: E.Response<Api.Result<Response | null>>
  ): Promise<E.Response<Api.Result<Response | null>, Record<string, Response>>>;
}

export interface NextHandler<Query, Body, Response> {
  (
    req: E.Request<ParamsDictionary, Api.Result<null>, Body, Query>,
    res: E.Response<Api.Result<null>>,
    next: E.NextFunction
  ): Promise<E.Response<Api.Result<null>, Record<string, any>> | void>;
}
