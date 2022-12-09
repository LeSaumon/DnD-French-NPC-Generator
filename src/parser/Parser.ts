import fs from 'fs';
import { resolve } from 'path';
import { Abilities } from '../types/Npc.js';

export const abilityParser = (data: string): Abilities => {
  const regex = /(?<=\t).*(?=\n)/g;
  const busyMemorySpace = data.match(regex);
  return {
    strength: busyMemorySpace[0],
    dexterity: busyMemorySpace[1],
    constitution: busyMemorySpace[2],
    intellect: busyMemorySpace[3],
    wisdom: busyMemorySpace[4],
    charisma: busyMemorySpace[5],
  };
};

export const markdownObjectToFileParser = (json2mdObject): void => {
  // const path = resolve('../French-NPC-data/src/files/npc-data.md')
  const path = resolve('./src/files/npc-data.md')
  fs.writeFileSync(path, json2mdObject.toString());
};
