import { Context } from 'koa';
import { Player } from '../../classes/player';
import Character from '../../models/character';

export async function findCharacter(ctx, next) {
  const { id } = ctx.params;
  const character = await Character.findById(id);
  if (!character) {
    throw new Error('Message not found.');
  }
  const player = new Player(character);
  ctx.body = player;
}
