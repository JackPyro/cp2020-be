import { Schema, model, Document } from 'mongoose';

export interface IRoll extends Document {
  characterId: Schema.Types.ObjectId;
  setup: {};
  result: {};
  createdAt: Date;
  updatedAt: Date;
}

const schema: Schema = new Schema({
  characterId: { type: Schema.Types.ObjectId, required: true },
  setup: { type: Object, required: true },
  result: { type: Object, required: true },
  createdAt: { type: Date, required: true, index: true },
  updatedAt: { type: Date, required: true, index: true }
});

schema.pre<IRoll>('validate', async function() {
  const updatedAt = new Date();

  if (this.isNew) {
    this.createdAt = updatedAt;
  }

  this.updatedAt = updatedAt;
});

export default model<IRoll>('Roll', schema);
