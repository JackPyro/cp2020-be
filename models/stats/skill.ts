import { Schema, model, Document } from 'mongoose';

export interface ISkill extends Document {
    name: string;
    score: number;
    special: boolean;
    modifier: number;
    stat: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
} 

const characterSkill: Schema = new Schema({
    name: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
    special: { type: Boolean, required: true, default: false },
    modifier: { type: Number, required: true, default: 1 },
    stat: { type: String, required: true },
    description: { type: String, required: false },
    createdAt: { type: Date, required: true, index: true },
    updatedAt: { type: Date, required: true, index: true }
});

characterSkill.pre<ISkill>('validate', async function() {
    const updatedAt = new Date();

    if (this.isNew) {
        this.createdAt = updatedAt;
    }

    this.updatedAt = updatedAt;
});

export default model<ISkill>('Skill', characterSkill);