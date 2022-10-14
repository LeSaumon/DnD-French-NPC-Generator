import internal from "stream"

type DescriptionAndPersonality = {
  description: Description,
  personnality: Personnality
}
type Description = {
  description: string[]
}

type Personnality = {
  traits: string[]
}

type Abilities = {
  strength: string,
  dexterity: string,
  constitution: string,
  intellect: string,
  wisdom: string,
  charisma: string,
}

type Relationships = {
  sexualOrientation: string,
  telationshipStatus: string
}

type Alignement = {
  lawful: number,
  good: number,
  evil: number,
  chaotic: number
}

type NpcData = {
  description: Description,
  personnality: Personnality,
  abilities: Abilities,
  relationships: Relationships,
  alignement: Alignement
}
