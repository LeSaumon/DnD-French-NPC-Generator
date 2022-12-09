import * as dotenv from 'dotenv';
import { Abilities, NpcData } from '../types/Npc.js';
import { getData } from './util.js';
import { abilityParser, markdownObjectToFileParser } from '../parser/Parser.js';
import { translateDescription } from '../translator/translator.js';
import { buildNpcFile } from '../markdown/markdownize.js';

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
  const personnality = data[0].split('Personality Traits\n')[1].toString();

  // Translate and parse data to an object
  const npcData: NpcData = {
    abilities: abilities,
    description: (await translateDescription(description)).toString(),
    personnality: (await translateDescription(personnality)).toString(),
  };

  // Build NPC Object with scrapped data
  const npcDataFile = buildNpcFile(npcData);

  // Write NPC Data into a markdown file
  markdownObjectToFileParser(npcDataFile);
};
