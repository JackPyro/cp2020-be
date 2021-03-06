import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';

export async function addWeapon(ctx, next) {
  const request = ctx.request.body;
  const weapon = await Weapon.findOneAndUpdate({ name: request.name }, request, { upsert: true, runValidators: true });

  ctx.body = weapon;
}

export async function deleteWeaponById(ctx, next) {
  const request = ctx.request.body;
  await Weapon.findByIdAndRemove({ _id: request.id });
  ctx.body = { status: true };
}

export async function findWeaponsByName(ctx, next) {
  // Find a more elegant way to fall back from bad query input
  const { name } = ctx.state.query;
  // Don't forget to create a text index in order to use $text
  const weapon = await Weapon.find({ $text: { $search: name } });
  ctx.body = weapon;
}

export async function listWeapons(ctx, next) {
  ctx.body = await Weapon.find({});
}
