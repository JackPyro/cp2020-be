import rollRecord from '../models/roll';
import { Dice } from 'dice-typescript';
import { IStats } from '../models/character';

export class Roll {
  public result = {};
  public total = {};
  public record = {};
  public dice = new Dice();
  constructor(expression) {
    const record = new rollRecord(expression);
    record.save().then(value => {
      this.record = { value };
    });
  }

  public rollGeneric(args) {
    args.forEach((element, key) => {
      this.result[key] = this.dice.roll(element).total;
    });
  }
}
