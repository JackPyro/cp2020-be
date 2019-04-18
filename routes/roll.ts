import * as Router from 'koa-router';

export const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { test: true };
});
