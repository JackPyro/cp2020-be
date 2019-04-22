import { Schema, model, Document } from 'mongoose';

export interface IRoll extends Document {
  characterId: Schema.Types.ObjectId;
  setup: {};
  result: {};
  total: {};
  createdAt: Date;
  updatedAt: Date;
}

const rollRecord: Schema = new Schema({
  characterId: { type: Schema.Types.ObjectId, required: true },
  setup: { type: Object, required: true },
  result: { type: Object, required: true },
  total: { type: Object, required: true },
  createdAt: { type: Date, required: true, index: true },
  updatedAt: { type: Date, required: true, index: true }
});

rollRecord.pre<IRoll>('validate', async function() {
  const updatedAt = new Date();

  if (this.isNew) {
    this.createdAt = updatedAt;
  }

  this.updatedAt = updatedAt;
});

export default model<IRoll>('Roll', rollRecord);
