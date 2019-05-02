import { toLower, startCase, each, isEmpty, extend } from 'lodash';
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

export function mergeSkills(skills: {}, newSkills: {}) {
  if (isEmpty(skills)) {
    return newSkills;
  } else {
    each(newSkills, key => {
      if (skills[key]) {
        skills[key] = extend(skills[key], newSkills[key]);
      }
    });

    return skills;
  }
}
