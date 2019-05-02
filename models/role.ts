import { Schema, model, Document } from 'mongoose';

export interface IRole extends Document {
  name: string;
  description: string;
  primarySkill: {};
  careerSkills: [];
  createdAt: Date;
  updatedAt: Date;
}

const roleRecord: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  primarySkill: { type: Object, required: true },
  careerSkills: { type: Array, required: true },
  createdAt: { type: Date, required: true, index: true },
  updatedAt: { type: Date, required: true, index: true }
});

roleRecord.pre<IRole>('validate', async function() {
  const updatedAt = new Date();

  if (this.isNew) {
    this.createdAt = updatedAt;
  }

  this.updatedAt = updatedAt;
});

export default model<IRole>('Role', roleRecord);
