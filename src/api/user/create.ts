import { User, Prisma, PrismaClient } from '@prisma/client';
import type * as Types from '../types';
import * as utils from '../../utils';

/**
 * Создать одного пользователя
 * @param {Prisma.UserCreateArgs}
 * @returns {User | null}
 */

const prisma = new PrismaClient();

interface UserArgs extends Types.GlobalParams {
  args: Prisma.UserCreateArgs;
}

const middleware: Types.NextHandler<any, UserArgs, any> = async (req, res, next) => {
  const { body } = req;
  const { args } = body;
  return next();
};

const handler: Types.RequestHandler<any, UserArgs, User | null> = async (req, res) => {
  const { body } = req;
  const { args, lang } = body;
  let result;
  try {
    result = await prisma.user.create(args);
  } catch (err) {
    utils.saveLog(err, req, 'Error get user', body);
    return res.status(500).json({
      status: utils.ERROR,
      message: lang.SERVER_ERROR,
      data: null,
      stdErrMessage: utils.getStdErrMessage(err),
    });
  }
  if (result === null) {
    return res.status(404).json({
      status: utils.WARNING,
      message: 'ds',
      data: null,
    });
  }
  return res.status(200).json({
    status: utils.SUCCESS,
    message: '',
    data: result,
  });
};

export { middleware, handler };
