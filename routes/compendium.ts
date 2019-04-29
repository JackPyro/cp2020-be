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
router.post('/weapons/', listWeapons);
router.post('/weapons/find', findWeaponsByName);
router.post('/weapons/add', addWeapon);
router.post('/weapons/delete', deleteWeaponById);

// Skills reference
router.post('/skills/', listSkills);
router.post('/skills/primary', listPrimarySkills);
router.post('/skills/pickup', listPickupSkills);
router.post('/skills/stat', listSkillsByStat);
router.post('/skills/add', addSkill);
router.post('/skills/delete', deleteSkill);
router.post('/skills/find', findSkillByName);
