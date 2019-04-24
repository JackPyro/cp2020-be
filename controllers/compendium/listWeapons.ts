import { Context } from 'koa';
import Weapon from '../../models/equipment/weapons';

export async function listWeapons(ctx, next) {
    ctx.body = await Weapon.find({});
}