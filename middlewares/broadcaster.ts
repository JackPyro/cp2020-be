import { Context } from 'koa';
/*
  middleware that sets new property for context;
  usage in routes/middlewares:
    ctx.broadcast(data);
*/
export const broadcast = () => {
  const middleware = async (ctx: Context, next) => {
    ctx.broadcast = event => {
      return ctx.app.emit('broadcast_type', event);
    };
    next();
  };
  return middleware;
};
