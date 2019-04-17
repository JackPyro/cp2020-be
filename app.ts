import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import * as koaQs from 'koa-qs';

import { router as roll } from './routes/roll';

export const app = new Koa();

koaQs(app);

app.use(bodyParser());
app.proxy = true;

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);

    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

const router = new Router();

router.use('/roll', roll.routes());

app.use(router.routes());

app.use(ctx => {
  ctx.throw(404, 'Not Found.');
});
