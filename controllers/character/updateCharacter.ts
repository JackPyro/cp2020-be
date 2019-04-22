import { Context } from 'koa';
import { Player } from '../../classes/player';
import Character from '../../models/character';

export async function updateCharacters(ctx, next) {
  const {
    params: { id },
    request
  } = ctx;
  console.log(request.body);
  const character = await Character.findById(id);
  if (!character) {
    throw new Error('character not found');
  }
  ctx.body = character;
}
