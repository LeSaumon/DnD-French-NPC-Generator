import * as dotenv from 'dotenv';
import {getDataFromWebsite} from "./generate-file/generate-npc-data-lolo.js"
const result = dotenv.config();
if (result.error) {
    throw result.error;
}

async function main() {
  const data = await getDataFromWebsite();
  console.log(data);
}

main();
