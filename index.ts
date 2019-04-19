import { app } from './app';
import { getMongoClient } from './mongodb';
import { Server } from 'ws';
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
    console.log(`server is running on ${config.server.host}:${config.server.port}`);
  });
})();
