import { Schema, model, Document } from 'mongoose';
import { ISkill } from './stats/skill';

export interface IStats {
  INT: number;
  REF: number;
  TECH: number;
  COOL: number;
  ATTR: number;
  LUCK: number;
  MA: number;
  BODY: number;
  EMP: number;
}

export interface ICharacter extends Document {
  meta: {
    name: string;
    handle: string;
    age: string;
    sex: string;
  };
  role: string;
  stats: IStats;
  careerSkills: { [name: string]: ISkill };
  pickupSkills: { [name: string]: ISkill };
  createdAt: Date;
  updatedAt: Date;
}

const schema: Schema = new Schema({
  meta: {
    name: { type: String, required: true },
    handle: { type: String, required: true },
    sex: { type: String, required: true },
    age: { type: Number, required: true }
  },
  role: { type: String, required: true },
  stats: { type: Object, required: true },
  primarySkills: { type: Object, required: true },
  secondarySkills: { type: Object, required: true },
  createdAt: { type: Date, required: true, index: true },
  updatedAt: { type: Date, required: true, index: true }
});

schema.pre<ICharacter>('validate', async function() {
  const updatedAt = new Date();

  if (this.isNew) {
    this.createdAt = updatedAt;
  }

  this.updatedAt = updatedAt;
});

export default model<ICharacter>('Character', schema);
