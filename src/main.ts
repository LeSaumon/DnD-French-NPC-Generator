import * as dotenv from 'dotenv';
import { getDataFromWebsite } from './generate-file/generateNpc.js';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

async function main() {
  await getDataFromWebsite();
}

main();
