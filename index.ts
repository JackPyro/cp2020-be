import { app } from './app';
import { getMongoClient } from './mongo';
import { config } from './config';

/* tslint:disable:interface-name */
declare module 'koa' {
  interface Context {
    state: {
      [key: string]: any;
    };
  }
}

(async () => {
  await getMongoClient();
  app.listen(config.server.port, config.server.host, () => {
    console.log('server is running...');
  });
})();
