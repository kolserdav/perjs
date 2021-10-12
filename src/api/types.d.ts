/****************************************************************
 * Repository https://github.com/kolserdav/perjs.git
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Mon Oct 11 2021 15:52:52 GMT+0700 (Krasnoyarsk Standard Time)
 ****************************************************************/
/* eslint-disable no-unused-vars */
import type * as E from 'express';
import type { Locale } from '../locales/types';
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

export { Api, E };

interface ParamsDictionary {
  [key: string]: string;
}

export interface GlobalParams {
  lang: Locale;
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
