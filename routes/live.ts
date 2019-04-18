import * as Router from 'koa-router';

export const router = new Router();

router.get('/', async (ctx, next) => {
  if (!ctx.ws) {
    return await next();
  }

  const ws = await ctx.ws();

  ctx.app.on('broadcast_type', data => {
    return ws.send(JSON.stringify(data));
  });
});
