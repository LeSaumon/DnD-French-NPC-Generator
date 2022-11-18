import * as deepl from 'deepl-node';
import { NpcData } from '../types/Npc.js';

const translator: deepl.Translator = new deepl.Translator(
  process.env.DEEPL_API_KEY,
);
const targetLang: deepl.TargetLanguageCode = 'fr';
export const translateDescription = async (
  description: NpcData['description'],
) => {
  const translatedDescription: string = (
    await translator.translateText(description, null, targetLang)
  ).text;
  return translatedDescription;
};

export const translatePersonnality = async (
  description: NpcData['personnality'],
) => {
  const translatedPersonnality: string = (
    await translator.translateText(description, null, targetLang)
  ).text;
  return translatedPersonnality;
};

// export const translateAbilities = async (abilities: Abilities): Abilities => {
//   const iterator = Object.keys(abilities);
//   const translatedAbilities = {
//     strength: await translator.translateText(
//       abilities.strength,
//       null,
//       targetLang,
//     ).text,
//     dexterity: await translator.translateText(
//       abilities.dexterity,
//       null,
//       targetLang,
//     ),
//     constitution: await translator.translateText(
//       abilities.constitution,
//       null,
//       targetLang,
//     ),
//     intellect: await translator.translateText(
//       abilities.intellect,
//       null,
//       targetLang,
//     ),
//     wisdom: await translator.translateText(abilities.wisdom, null, targetLang),
//     charisma: await translator.translateText(
//       abilities.charisma,
//       null,
//       targetLang,
//     ),
//   };

//   return await translatedAbilities;
// };
