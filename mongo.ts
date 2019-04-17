import * as mongoose from 'mongoose';
import { URL } from 'url';
import { config } from './config';

export async function getMongoClient(): Promise<mongoose> {
  const dbUrl = new URL(`${config.db.host}/${config.db.name}?retryWrites=true`);
  return new Promise(resolve => {
    mongoose.connect(
      dbUrl.href,
      {
        useNewUrlParser: true
      },
      function(error) {
        console.log('connected');
        if (error) throw error;
        resolve(mongoose);
      }
    );
  });
}
