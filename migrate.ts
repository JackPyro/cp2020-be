import { getMongoClient } from './mongodb';
import Skill from './models/stats/skill';
import Role from './models/role';
import * as skills from './data/skills.json';
import * as roles from './data/roles.json';

function logFinish(type) {
  console.log(`Finished: ${type}`);
}

async function insertSkills() {
  await Skill.remove({});
  await Skill.insertMany(skills);
  logFinish('skills');
}

async function insertRoles() {
  await Role.remove({});
  await Role.insertMany(roles);
  logFinish('rolls');
}

async function run() {
  await getMongoClient();
  await insertSkills();
  await insertRoles();
}

run();
