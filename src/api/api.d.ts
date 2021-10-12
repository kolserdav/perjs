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

export async function userCreate<T extends P.UserCreateArgs>(
  args: P.SelectSubset<T, P.UserCreateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
>;
