import * as Router from 'koa-router';

import { findCharacters } from '../controllers/character/findCharacters';
import { createCharacter } from '../controllers/character/createCharacter';
import { findCharacter } from '../controllers/character/findCharacter';
import { updateCharacters } from '../controllers/character/updateCharacter';
import { deleteCharacters } from '../controllers/character/deleteCharacter';

export const router = new Router();

router.get('/', findCharacters);
router.post('/', createCharacter);
router.get('/:id', findCharacter);
router.post('/:id', updateCharacters);
router.delete('/:id', deleteCharacters);
