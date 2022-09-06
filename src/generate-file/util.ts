import axios, { AxiosRequestConfig } from "axios";

type TranslationApiRequestBody = {
    text: string;
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

const fetcher = async (url: string, headers: AxiosRequestConfig, body: TranslationApiRequestBody) => {
    const { data } = await axios.post<TranslationApiResponse>(url, body, headers);
    return data;
}

const translateToFrench = async (text: string) => {
    const url = "https://api-free.deepl.com/v2/translate";
    const apiKey = "YOUR_API_KEY";
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
