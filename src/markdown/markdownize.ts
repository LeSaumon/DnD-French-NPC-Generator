import json2md from 'json2md';
import { NpcData } from '../types/Npc.js';

export const buildNpcFile = (data: NpcData) => {
  return json2md([
    { h1: 'Fiche de personnage' },
    { h3: 'Description' },
    { p: data.description },
    { h3: 'Personnalité' },
    { p: data.personnality },
    { h3: 'Statistiques' },
    {
      p: `${Object.keys(data.abilities)[0].toUpperCase()} : ${
        data.abilities.strength
      }`,
    },
    {
      p: `${Object.keys(data.abilities)[1].toUpperCase()} : ${
        data.abilities.dexterity
      }`,
    },
    {
      p: `${Object.keys(data.abilities)[2].toUpperCase()} : ${
        data.abilities.constitution
      }`,
    },
    {
      p: `${Object.keys(data.abilities)[3].toUpperCase()} : ${
        data.abilities.intellect
      }`,
    },
    {
      p: `${Object.keys(data.abilities)[4].toUpperCase()} : ${
        data.abilities.wisdom
      }`,
    },
    {
      p: `${Object.keys(data.abilities)[5].toUpperCase()} : ${
        data.abilities.charisma
      }`,
    },
    // {
    //   table: {
    //     headers: Object.keys(data.abilities),
    //     rows: [
    //       // {
    //       //   strength: data.abilities.strength,
    //       //   dexterity: data.abilities.dexterity,
    //       //   constitution: data.abilities.constitution,
    //       //   intellect: data.abilities.intellect,
    //       //   wisdom: data.abilities.wisdom,
    //       //   charisma: data.abilities.charisma,
    //       // },
    //       [
    //         data.abilities.strength,
    //         data.abilities.dexterity,
    //         data.abilities.constitution,
    //         data.abilities.intellect,
    //         data.abilities.wisdom,
    //         data.abilities.charisma,
    //       ],
    //     ],
    //   },
    // },
  ]);
};
