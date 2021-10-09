// @ts-check
import axios from 'axios';
import { resolve } from 'node:path';

/**
 * @param {{
 *   url: string;
 *   method: 'POST' | 'PUT' | 'DELETE';
 *   headers: {
 *     [name: string]: string;
 *   };
 * }} args
 * 
 * @returns {Promise<any>}
    
 */
export async function request(args) {
  const { url, method, headers } = args;
  new Promise((resolve, reject) => {
    axios
      .request({
        url,
        method,
        headers: headers
          ? headers
          : {
              'Content-Type': 'application/json',
            },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        if (e.response) {
          console.error();
          resolve(e.response.data);
        } else {
          reject(e.message);
        }
      });
  });
}

export async function userFindFirst() {}
