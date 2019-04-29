import { Context } from 'koa';
import characterSkill from "../../models/stats/skill";

// TODO: figure out career skills presets
// TODO: fix up upsert and delete responses

export async function addSkill(ctx, next) {
    const request = ctx.request.body;
    const skill = await characterSkill.findOneAndUpdate({ name: request.name }, request, { upsert: true, runValidators: true });
    ctx.body = skill;
}

export async function deleteSkill(ctx, next) {
    const request = ctx.request.body;
    const skill = await characterSkill.findByIdAndRemove({ _id: request.id });
    ctx.body = skill;
}

export async function findSkillByName(ctx, next) {
    const request = ctx.request.body;
    // Don't forget to create a text index in order to use $text
    ctx.body = await characterSkill.find({ $text: { $search: request.name } }, {score:0});
}

export async function listSkills(ctx, next) {
    ctx.body = await characterSkill.find({});
}

export async function listPrimarySkills(ctx, next) {
    ctx.body = await characterSkill.find({special: true}, {score:0});
}

export async function listPickupSkills(ctx, next) {
    ctx.body = await characterSkill.find({special:{$ne:true}}, {score:0});
}
export async function listSkillsByStat(ctx, next) {
    const request = ctx.request.body;
    ctx.body = await characterSkill.find({stat:request.stat}, {score: 0});
}
