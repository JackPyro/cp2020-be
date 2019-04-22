import { toLower, startCase } from 'lodash';

export function stringifySkill(skillName: string) {
  return toLower(skillName).replace(' ', '_');
}

export function parseSkill(skillName: string) {
  return startCase(toLower(skillName));
}
