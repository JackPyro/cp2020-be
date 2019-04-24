import * as Router from 'koa-router';

import { findWeaponsByName } from '../controllers/compendium/findWeaponsByName';
import { addWeapon } from '../controllers/compendium/addWeapon';
import { deleteWeaponById } from '../controllers/compendium/deleteWeapon';
import {listWeapons} from '../controllers/compendium/listWeapons';
export const router = new Router();

router.post('/weapons/', listWeapons);
router.post('/weapons/find', findWeaponsByName);
router.post('/weapons/add', addWeapon);
router.post('/weapons/delete', deleteWeaponById);
