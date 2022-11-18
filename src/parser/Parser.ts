import { Abilities } from "../types/Npc.js";

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
