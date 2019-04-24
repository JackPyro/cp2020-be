import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';

export async function addWeapon(ctx, next) {
  const request = ctx.request.body;
  Weapon.updateOne({ name: request.name }, request, { upsert: true }, (err, raw) => {
    if (err) {
      console.log('Error occured when upserting', err, raw);
      ctx.body = err;
    }
    ctx.body = { status: 'updated' };
  });
}
