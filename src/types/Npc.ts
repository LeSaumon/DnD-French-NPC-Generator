export type DescriptionAndPersonality = {
  description: Description,
  personnality: Personnality
}
export type Description = {
  description: string
}

export type Personnality = {
  traits: string
}

export type Abilities = {
  strength: string,
  dexterity: string,
  constitution: string,
  intellect: string,
  wisdom: string,
  charisma: string,
}

export type Relationships = {
  sexualOrientation: string,
  telationshipStatus: string
}

export type Alignement = {
  lawful: number,
  good: number,
  evil: number,
  chaotic: number
}

export type NpcData = {
  description: string,
  personnality: string,
  abilities: Abilities,
  relationships?: Relationships,
  alignement?: Alignement
}
