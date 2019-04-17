import { Schema, model, Document } from 'mongoose';

export interface ICharacter extends Document {
  name: string;
  age: string;
  role: string;
  stats: {};
  primarySkills: {};
  secondarySkills: {};
  createdAt: Date;
  updatedAt: Date;
}

const schema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
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

export const Model = model<ICharacter>('Character', schema);
