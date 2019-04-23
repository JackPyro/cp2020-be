import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';

export async function findWeaponsByName(ctx, next) {
  const request = ctx.req.body;
  console.log(request);
  // Weapon.find({name: request.name});
  ctx.body = {};
}
