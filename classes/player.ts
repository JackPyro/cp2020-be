import { get, each } from 'lodash';
import { IStats } from '../models/character';

export class Player {
  public static STATSLIST = ['INT', 'REF', 'TECH', 'COOL', 'ATTR', 'LUCK', 'MA', 'BODY', 'EMP'];
  public meta: {
    name: string;
    age: string;
    handle: string;
    sex: string;
  };

  public role: { name: string; description: string; skill: string };
  public stats = {};
  public careerSkills: {};
  public pickupSkills: {};
  public dynamicStats = { RUN: 0, LEAP: 0, LIFT: 0 };
  constructor({ meta, role, stats, careerSkills, pickupSkills }) {
    this.meta = {
      name: get(meta, 'name', ''),
      age: get(meta, 'age', 0),
      handle: get(meta, 'age', ''),
      sex: get(meta, 'sex', 'male')
    };
    this.setStats(stats);
    this.setRole(role);
    this.setCareerSkills(careerSkills);
    this.setPickupSkills(pickupSkills);
  }

  public setRole(role) {
    // TODO: Write Role set method
    this.role = { name: '', description: '', skill: '' };
  }

  public setStats(stats: IStats) {
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

  public calculateDynamicStats() {
    this.dynamicStats.RUN = (this.stats as IStats).MA * 3;
    this.dynamicStats.LEAP = this.dynamicStats.RUN / 4;
    this.dynamicStats.LIFT = (this.stats as IStats).BODY * 10;
  }

  public setCareerSkills(skillList) {
    // TODO: Write Skill set method
    this.careerSkills = {};
  }

  public setPickupSkills(skillList) {
    // TODO: Write Skill set method
    this.pickupSkills = {};
  }
}
