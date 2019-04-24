import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';

export async function findWeaponsByName(ctx, next) {
  const request = ctx.request.body;
  // Don't forget to create a text index in order to use $text
  const weapon = await Weapon.find({ $text: { $search: request.name } });
  ctx.body = weapon;
}
