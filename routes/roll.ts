import * as Router from 'koa-router';

import { diceRoll, diceRollPost } from '../controllers/diceroll';

export const router = new Router();

router.get('/', diceRoll);
router.post('/', diceRollPost);
