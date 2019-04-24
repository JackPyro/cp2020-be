import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';

export async function deleteWeaponById(ctx, next) {
  const request = ctx.request.body;
  const result = await Weapon.findByIdAndRemove({ _id: request.id });
  ctx.body = result;
}
