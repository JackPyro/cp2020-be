import { toLower, startCase } from 'lodash';
import { ISkill } from '../models/stats/skill';

export function stringifySkill(skillName: string) {
  return toLower(skillName).replace(' ', '_');
}

export function parseSkill(skillName: string) {
  return startCase(toLower(skillName));
}

export function reduceSkills(skillList: ISkill[]) {
  return skillList.reduce((acc, skill) => {
    return { ...acc, [stringifySkill(skill.name)]: skill };
  }, {});
}
