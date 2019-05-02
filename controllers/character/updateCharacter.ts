import { Context } from 'koa';
import { extend } from 'lodash';

import { Player } from '../../classes/player';
import { reduceSkills } from '../../helpers/skillsHelpers';
import Character from '../../models/character';
import skill from '../../models/stats/skill';

export async function updateCharacter(ctx, next) {
  const {
    params: { id },
    request: { body }
  } = ctx;
  const character = await Character.findById(id);

  if (!character) {
    throw new Error('character not found');
  }

  await extend(character, body).save();

  ctx.body = character;
}
