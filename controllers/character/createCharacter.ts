import { Context } from 'koa';
import { Player } from '../../classes/player';
import Character from '../../models/character';

export async function createCharacter(ctx, next) {
  const { request } = ctx;
  const player = new Player(request.body);
  ctx.body = player;
}
