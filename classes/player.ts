import { get, each, extend, isEmpty, isArray } from 'lodash';
import { reduceSkills, mergeSkills } from '../helpers/skillsHelpers';
import { IStats } from '../models/character';
import { ObjectID } from 'bson';
import { IRole } from '../models/role';
export class Player {
  public static STATSLIST = ['INT', 'REF', 'TECH', 'COOL', 'ATTR', 'LUCK', 'MA', 'BODY', 'EMP'];

  public _id: ObjectID;
  public meta: {
    name: string;
    age: string;
    handle: string;
    sex: string;
  };
  public role: { name: string; description: string };
  public stats = {};
  public careerSkills = {};
  public pickupSkills = {};
  public dynamicStats = { RUN: 0, LEAP: 0, LIFT: 0 };

  constructor({ _id, meta, role, stats, careerSkills, pickupSkills }) {
    if (!!_id) {
      this._id = _id;
    }
    this.meta = {
      name: get(meta, 'name', ''),
      age: get(meta, 'age', 0),
      handle: get(meta, 'age', ''),
      sex: get(meta, 'sex', 'male')
    };
    this.setRole(role);
    this.setStats(stats);
    this.setCareerSkills(careerSkills);
    this.setPickupSkills(pickupSkills);
  }

  public async setRole(role: IRole) {
    if (isEmpty(role)) {
      throw new Error(`Critical Error: Role can't be empty`);
    }
    // TODO: Write Role set method
    this.role = { name: role.name, description: role.description };
    if (!isEmpty(role.careerSkills)) {
      const skills = reduceSkills([role.primarySkill as any, ...(role.careerSkills as [])]);
      await this.setCareerSkills(skills);
    }
  }

  public async setStats(stats: IStats) {
    each(Player.STATSLIST, key => {
      if (!get(this.stats, key)) {
        this.stats[key] = 0;
      }

      if (!!stats[key]) {
        this.stats[key] = stats[key];
      }
    });
    this.calculateDynamicStats();
  }

  public async calculateDynamicStats() {
    this.dynamicStats.RUN = (this.stats as IStats).MA * 3;
    this.dynamicStats.LEAP = this.dynamicStats.RUN / 4;
    this.dynamicStats.LIFT = (this.stats as IStats).BODY * 10;
  }

  public async setCareerSkills(skillList = {}) {
    // TODO: Write Skill set method

    this.careerSkills = mergeSkills(this.careerSkills, skillList);
  }

  public async setPickupSkills(skillList = {}) {
    // TODO: Write Skill set method
    this.pickupSkills = mergeSkills(this.pickupSkills, skillList);
  }
}
