import { Schema, model, Document } from 'mongoose';

import weapon, { IWeapon } from './weapons';

export interface IEquip extends Document {
    eurobucks: number;
    weight: number;
    equipmentValue: number;
    weapons: IWeapon[];
    gear: object;
    cyberware: object;
}

const equipment: Schema = new Schema({
    eurobucks: { type: Number, required: true, default: 0 },
    weight: { type: Number, required: true, default: 0 },
    equipmentValue: { type: Number, required: true, default: 0},
    weapons: [weapon],
    gear: {},
    cyberware: {}
});

export default model<IEquip>('equipment', equipment);
