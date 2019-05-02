import { Context } from 'koa';
import { isEmpty } from 'lodash';
import { Player } from '../../classes/player';
import Character from '../../models/character';

export async function createCharacter(ctx, next) {
  const { request } = ctx;
  if (isEmpty(request.body)) {
    throw new Error(`Character can't be empty`);
  }
  const player = new Player(request.body);
  const character = new Character(player);

  const result = await character.save();
  ctx.body = new Player(result);
}
