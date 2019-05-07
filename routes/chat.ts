import * as Router from 'koa-router';

import { chatFeed } from '../controllers/chat';

export const router = new Router();

router.get('/', chatFeed);
