import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv';
// import fs from 'fs';
import { getDescription, splitMulti } from './util';
// import { removeEscapeCharacter } from './util';

const result = dotenv.config();
if (result.error) {
    throw result.error;
}

// import fs from "fs";

/* type TranslationBody = {
    "text": string,
    "target_lang": string
}

type TranslationData = {
    "detected_source_language": string,
    "text": string,
}

type TranslationResponse = {
    "translations": TranslationData[],
} */

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
    const WEBSITE_URL = process.env.WEBSITE_URL;
    // const DEEPL_TRANSLATION_URL = process.env.API_URL;


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(WEBSITE_URL);

    // Get the NPC data from the page
    const description = await getDescription();
    

    // const descriptionAndPersonality = description[0].split("Description\n")[1].split("Personality Traits\n").map((string) => string.trim());
    // desc & personality : ok
    const descriptionAndPersonality = splitMulti(description[0], ["Description\n", "Personality Traits\n"]);
    
    const abilityScoreRelationshipsAlignment = splitMulti(description[1], ["Ability Scores\n", "Relationships\n", "Alignment Tendencies\n"]);
    

    const plotHook = splitMulti(description[2], ["Plot Hooks\n"]);
    console.log(descriptionAndPersonality);
    console.log(abilityScoreRelationshipsAlignment);
    console.log(plotHook);
    // Create Data structure to send to DeepL API
    // Use UTF-8 encoded plain text

    // Put the NPC data into a file
    await browser.close();
}

main();