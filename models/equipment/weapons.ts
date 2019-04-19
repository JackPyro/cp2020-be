import { Schema, model, Document } from 'mongoose';
import { required } from 'joi';

export interface IWeapon extends Document {
    name: String;
    type: String;
    weaponAccuracy: Number;
    concealability: String;
    availability: String;
    damage: String;
    ammunition: String;
    ap: Boolean;
    numberOfShots: Number;
    rateOfFire: Number;
    reliability: String;
    range: Number;
    cost: Number;
    tags: String;
    class: String;
    createdAt: Date;
    updatedAt: Date;
};

const weapon: Schema = new Schema({
    name: { type: String, required: true},
    type: { type: String, required: true},
    weaponAccuracy: { type: Number, default: 0 },
    concealability: { type: String, default: 'N' },
    availability: { type: String, default: 'C' },
    damage: { type: String },
    ammunition: { type: String },
    ap: { type: Boolean, default: false },
    numberOfShots: { type: Number },
    rateOfFire: { type: Number },
    reliability: { type: String, default: 'ST' },
    range: { type: Number },
    cost: { type: Number },
    tags: { type: String },
    class: { type: String }
});

weapon.pre<IWeapon>('validate', async function () {
    const updatedAt = new Date();

    if (this.isNew) {
    this.createdAt = updatedAt;
    }

    this.updatedAt = updatedAt;
});

