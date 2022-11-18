import * as dotenv from 'dotenv';
import { Abilities, NpcData } from '../types/Npc.js';
import { getData } from './util.js';
import { abilityParser } from '../parser/Parser.js';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}
export const getDataFromWebsite = async () => {
  const selector = 'div.npc-data > *';
  // Parse data from website
  const data = await getData(selector);
  // Format data into object
  const abilities: Abilities = abilityParser(data[1]);
  const description = data[0].split('Personality Traits\n')[0];
  const personnalityTraits = data[0]
    .split('Personality Traits\n')[1]
    .toString();
  const npcData: NpcData = {
    abilities: abilities,
    description: description,
    personnality: personnalityTraits,
  };
  console.log(npcData);
};
