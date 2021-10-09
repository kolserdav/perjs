import { Prisma, PrismaPromise } from '@prisma/client';
import * as Types from './types';

export async function userFindFirst<T extends Prisma.UserFindFirstArgs>(
  args: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>
): Promise<
  Prisma.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<Prisma.UserGetPayload<T>>>
  >
>;
