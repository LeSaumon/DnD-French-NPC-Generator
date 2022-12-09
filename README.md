# French NPC Data
### Technologies : 
- Node
- Typescript

French NPC Data tool is scrapping [this website](https://www.npcgenerator.com/), which is a website to generate NPC for the [DnD 5e](https://dnd.wizards.com/fr) role playing game.

This is usefull for french dungeon master to quickly generate description personnality and abilities of a NPC.

It save a .md file in `/src/files` directory.

You can use a tool like [Obsidian](https://obsidian.md/) to visualise markdown files.

## How to use it

⚠️ You have to reference your DeepL Api Key in the .env file located in the root directory of the project.

### Windows

1. Clone this repo.
2. `npm i` in the root directory.
2. You can launch the script with the command `node ./src/main.ts`.
3. You can then look up the file that have been generated in `/src/files`.

### Linux

1. Same process as Windows
2. To launch the script, the command is `ts-node-esm ./src/main.ts`
