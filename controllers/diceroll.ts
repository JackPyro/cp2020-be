import { Context } from 'koa';
import { Dice } from 'dice-typescript';
import RollRecord, { IRoll } from '../models/roll';
import roll from '../models/roll';

export async function diceRoll(ctx, next) {
  // Roll some actual die
  const dice = new Dice();
  const test = '1d10';
  const rollResult = dice.roll(test);
  ctx.body = { rollResult };
}

export async function diceRollPost(ctx, next) {
  // Parse request body data
  const { characterId, expression } = ctx.request.body;

  // Roll some actual die
  // TODO: parse the results more, analyze input before rolling
  const dice = new Dice();
  const rollResult = dice.roll(expression);

  // TODO: Do the proper validation and shizz
  const record = new RollRecord({
    characterId,
    setup: expression,
    result: rollResult.renderedExpression,
    total: rollResult.total
  });

  await record.save();

  ctx.body = { rollResult };
}

// TODO: customize output
// TODO: validate input
// TODO: figure out DB interactions
