import { Context } from 'koa';
import { Player } from '../../classes/player';
import Character from '../../models/character';

export async function deleteCharacters(ctx, next) {
  ctx.body = {};
}
