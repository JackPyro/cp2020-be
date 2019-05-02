import { Context } from 'koa';
import { extend, merge } from 'lodash';

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
  const player = await new Player(merge(character, body));
  await Character.findByIdAndUpdate(id, player);

  ctx.body = player;
}
