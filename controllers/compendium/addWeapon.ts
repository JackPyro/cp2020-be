import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';
import bodyParser = require('body-parser');

export async function addWeapon(ctx, next) {
  const request = ctx.request.body;
  const weapon = await Weapon.findOneAndUpdate({ name: request.name }, request, { upsert: true });
  ctx.body = weapon;
}
