import * as Router from 'koa-router';

import { findWeaponsByName } from '../controllers/compendium/findWeaponsByName';
import { addWeapon } from '../controllers/compendium/addWeapon';

export const router = new Router();

router.post('/weapons/', findWeaponsByName);
router.post('/weapons/add', addWeapon);
