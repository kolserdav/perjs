import type * as Types from '../api/types';
import * as locales from '../locales';

let langObjects: {
  [lang: string]: any;
};
langObjects = Object.assign({}, locales);
export function getLang(lang: string): any {
  if (langObjects[lang]) {
    return langObjects[lang];
  } else {
    return langObjects.en;
  }
}
