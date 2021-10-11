/****************************************************************
 * Repository https://github.com/kolserdav/perjs.git
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Mon Oct 11 2021 15:52:52 GMT+0700 (Krasnoyarsk Standard Time)
 ****************************************************************/
import { Prisma as P, User, PrismaPromise } from '@prisma/client';
import Types from '../api/types';

export async function userFindFirst<T extends P.UserFindFirstArgs>(
  args: P.SelectSubset<T, P.UserFindFirstArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
>;
