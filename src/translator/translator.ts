import * as deepl from 'deepl-node';
import { Abilities, NpcData } from '../types/Npc.js';

const translator: deepl.Translator = new deepl.Translator(
  process.env.DEEPL_API_KEY,
);
const targetLang: deepl.TargetLanguageCode = 'fr'
export const translateDescription = async (description: NpcData["description"]) => {

  const translatedDescription: string = (await translator.translateText(description, null, targetLang)).text;
  return translatedDescription
};

export const translatePersonnality = async (description: NpcData["personnality"]) => {

  const translatedPersonnality: string = (await translator.translateText(description, null, targetLang)).text;
  return translatedPersonnality
};

export const translateAbilities = async (abilities: Abilities) => {

}
