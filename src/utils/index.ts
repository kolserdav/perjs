/****************************************************************
 * Repository https://github.com/kolserdav/perjs.git
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Mon Oct 11 2021 15:52:52 GMT+0700 (Krasnoyarsk Standard Time)
****************************************************************/
import type express from 'express';
import type * as Types from '../api/types';

export const SUCCESS = 'success';
export const ERROR = 'error';
export const WARNING = 'warning';

const { NODE_ENV }: any = process.env;
const DEV = NODE_ENV === 'development';

export function getStdErrMessage(err: Error) {
  return DEV ? err.message : 'Standart error disabled in production';
}

export function saveLog(err: Error, req: express.Request, message: string, body: any): void {
  if (err) {
    console.error(new Date(), message, err, {
      url: req.url,
      headers: req.headers,
      body,
    });
  } else {
    console.warn(new Date(), message);
  }
}
