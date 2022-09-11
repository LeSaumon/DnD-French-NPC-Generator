import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv';
import axios, { AxiosRequestConfig } from "axios";

type TranslationApiRequestBody = {
    text: string[] | string;
    target_lang: string;
    source_lang?: string;
}

type TranslationApiDatum = {
    detected_source_language: string;
    text: string;
}

type TranslationApiResponse = {
    translations: TranslationApiDatum[];
  };

const result = dotenv.config();
if (result.error) {
    throw result.error;
}

const fetcher = async (url: string, headers: AxiosRequestConfig, body: TranslationApiRequestBody) : Promise<TranslationApiResponse> => {
    const { data } = await axios.post<TranslationApiResponse>(url, body, headers);
    return data;
}

export const translateToFrench = async (text: string[] | string) : Promise<TranslationApiResponse> => {
    const url = process.env.API_URL;
    const apiKey = process.env.API_KEY;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `DeepL-Auth-Key ${apiKey}`
        }
    }
    const body : TranslationApiRequestBody = {
        text: text,
        target_lang: "FR",
        source_lang: "EN"
    }
    const data = await fetcher(url, headers, body);
    return data;
}

export const removeEscapeCharacter = (str : string) : string => {
    // Remove the trailing \n from a string if it exists
    return str.trim();
}

export const getDescription = async () : Promise<string[]> => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.env.WEBSITE_URL);
    const description = await page.$$eval('div.npc-data > *', values => { return values.filter(value => value.innerText !== "#").map(value => value.innerText)})
    await browser.close();
    const trimmedDescription = description.slice(0, 3)
    return trimmedDescription;
}

export const splitMulti = (str : string, tokens : string[]) : string[] => {
    const tempChar = tokens[0]; // We can use the first token as a temporary join character
    for(let i = 1; i < tokens.length; i++){
        str = str.split(tokens[i]).join(tempChar);
    }
    return str.split(tempChar).map((string) => string.trim()).filter((string) => string !== "");
}