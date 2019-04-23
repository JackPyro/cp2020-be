import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';

export async function addWeapon(ctx, next) {
  const request = ctx.request.body;
  const weapon = new Weapon(request);
  await weapon.save();
  console.log(weapon.toJSON());
  ctx.body = weapon.toJSON();
}
