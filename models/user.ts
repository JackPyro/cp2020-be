// I'M WALKIN HERE

import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  login: string;
  password: string;
  token: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema: Schema = new Schema(
  {
    login: { type: String },
    password: { type: String },
    token: { type: String },
    avatar: { type: String },
    createdAt: { type: Date, index: true },
    updatedAt: { type: Date, index: true }
  },
  { minimize: false }
);

schema.pre<IUser>('validate', async function() {
  const updatedAt = new Date();

  if (this.isNew) {
    this.createdAt = updatedAt;
  }

  this.updatedAt = updatedAt;
});

export default model<IUser>('User', schema);
