import * as Router from 'koa-router';

import {
  findCharacters,
  createCharacter,
  findCharacter,
  updateCharacter,
  deleteCharacters
} from '../controllers/character';

export const router = new Router();

router.get('/', findCharacters);
router.post('/', createCharacter);
router.get('/:id', findCharacter);
router.post('/:id', updateCharacter);
router.delete('/:id', deleteCharacters);
