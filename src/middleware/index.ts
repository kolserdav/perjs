/****************************************************************
 * Repository https://github.com/kolserdav/perjs.git
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Mon Oct 11 2021 15:52:52 GMT+0700 (Krasnoyarsk Standard Time)
 ****************************************************************/
import type * as Types from '../api/types';
import * as locales from '../locales';

let langObjects: {
  [lang: string]: any;
};
langObjects = Object.assign({}, locales);
export function getLang(
  req: Types.E.Request,
  res: Types.E.Response,
  next: Types.E.NextFunction
): any {
  let { lang }: any = req.headers;
  let language: typeof locales;
  if (langObjects[lang]) {
    language = langObjects[lang];
  } else {
    language = langObjects.en;
  }
  req.body.lang = language;
  next();
}
