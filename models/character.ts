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
  role: {};
  stats: IStats;
  careerSkills: { [name: string]: ISkill };
  pickupSkills: { [name: string]: ISkill };
  createdAt: Date;
  updatedAt: Date;
}

const schema: Schema = new Schema(
  {
    meta: {
      name: { type: String },
      handle: { type: String },
      sex: { type: String },
      age: { type: Number }
    },
    role: { type: Object },
    stats: { type: Object },
    careerSkills: { type: Object },
    pickupSkills: { type: Object },
    createdAt: { type: Date, index: true },
    updatedAt: { type: Date, index: true }
  },
  { minimize: false }
);

schema.pre<ICharacter>('validate', async function() {
  const updatedAt = new Date();

  if (this.isNew) {
    this.createdAt = updatedAt;
  }

  this.updatedAt = updatedAt;
});

export default model<ICharacter>('Character', schema);
