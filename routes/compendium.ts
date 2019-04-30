import * as Router from 'koa-router';

import { findWeaponsByName } from '../controllers/compendium/weapons';
import { addWeapon } from '../controllers/compendium/weapons';
import { deleteWeaponById } from '../controllers/compendium/weapons';
import { listWeapons } from '../controllers/compendium/weapons';

import {
  listSkills,
  listPrimarySkills,
  listPickupSkills,
  listSkillsByStat,
  addSkill,
  deleteSkill,
  findSkillByName
} from '../controllers/compendium/skills';

export const router = new Router();

// Weapons reference
router.get('/weapons/', listWeapons);
router.get('/weapons/find', findWeaponsByName);
router.post('/weapons/:id/add', addWeapon);
router.post('/weapons/:id/delete', deleteWeaponById);

// Skills reference
router.get('/skills/', listSkills);
router.get('/skills/primary', listPrimarySkills);
router.get('/skills/pickup', listPickupSkills);
router.get('/skills/stat', listSkillsByStat);
router.get('/skills/find', findSkillByName);
router.post('/skills', addSkill);
router.post('/skills/:id/delete', deleteSkill);
