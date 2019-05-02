// all your credit cards are belong to us

import User from '../../models/user';

export async function createUser(ctx, next) {
  const { request } = ctx;
  const { login, password, repeatPassword } = request.body;

  // TODO: dat' pirogu po dupe

  ctx.body = 'piyshov nahuy';
}
