import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import * as websocket from 'koa-easy-ws';
import * as koaQs from 'koa-qs';
import { broadcast } from './middlewares/broadcaster';
import { router as roll } from './routes/roll';
import { router as live } from './routes/live';
import { router as character } from './routes/character';
export const app = new Koa();

koaQs(app);

app.use(bodyParser());
app.use(websocket());
app.use(broadcast());
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
router.use('/live', live.routes());
router.use('/character', character.routes());

app.use(router.routes());

app.use(ctx => {
  ctx.throw(404, 'Not Found.');
});
