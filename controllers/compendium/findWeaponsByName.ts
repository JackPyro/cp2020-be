import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';

export async function findWeaponsByName(ctx, next) {
  const request = ctx.request.body;
  console.log(request);
  // Don't forget to create a text index in order to use $text
  Weapon.find({ $text: { $search: request.name } }, (err, res) => {
    if (err) {
      ctx.body = err;
    }
    console.log(res);
    ctx.body = res;
  });
}
