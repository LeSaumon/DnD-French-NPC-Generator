import puppeteer from 'puppeteer';
const utf8 = require('utf8');
import axios from 'axios';
const WEBSITE_URL = 'http://www.npcgenerator.com/';
const DEEPL_TRANSLATION_URL = 'https://api-free.deepl.com/v2/translate'
// import fs from "fs";

type TranslationBody = {
    "text": string,
    "target_lang": string
}

type TranslationData = {
    "detected_source_language": string,
    "text": string,
}

type TranslationResponse = {
    "translations": TranslationData[],
}



const removeEscapeCharacter = (str) => {
    // Remove the trailing \n from a string if it exists
    if (str.endsWith('\n')) {
        return str.slice(0, -1);
    }
    return str;
}

async function translateData(requestBody) {
    try {
        const { data, status } = await axios.post<TranslationResponse>(
            DEEPL_TRANSLATION_URL, requestBody,{
                headers: {
                    Accept: "application/json",
                },
            },
        );

        console.log('Response Status : ', status);
        console.log(JSON.stringify(data, null, 4));
        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }
    }
}

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(WEBSITE_URL);

    // Get the NPC data from the page
    const description = await page.$$eval('div.npc-data > *', values => { return values.filter(value => value.innerText !== "#").map(value => value.innerText)})
    const noEscapeDescription = description.map(string => removeEscapeCharacter(string));
    const encodedDescription = utf8.encode(noEscapeDescription);
    const postRequestBody : TranslationBody = {
        "target_lang": "FR",
        "text": encodedDescription,
    }
    const translatedDescription = translateData(postRequestBody);
    console.log(translatedDescription);
    // Create Data structure to send to DeepL API
    // Use UTF-8 encoded plain text

    // Put the NPC data into a file
    // fs.writeFileSync('npc-data.txt', noEscapeDescription.join('\n'));
    await browser.close();
}

main();