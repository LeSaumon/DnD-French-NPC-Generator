import * as dotenv from 'dotenv';
import { getData } from './util.js';

const result = dotenv.config();
if (result.error) {
    throw result.error;
}
export const getDataFromWebsite = async () => {
  const selector = 'div.npc-data > *';
  const npcData = await getData(selector);
  // const descriptionAndPersonality : DescriptionAndPersonality = removeEscapeCharacter(0, String(splitMulti(npcData[0], ["Description\n", "Personality Traits\n"])), " ");
  // const abilityScoreRelationshipsAlignment = splitMulti(npcData[1], ["Ability Scores\n", "Relationships\n", "Alignment Tendencies\n"]);
  // const plotHook = splitMulti(npcData[2], ["Plot Hooks\n"]);
  // const npcObject = {
  //   description
  // }
  return npcData
}
