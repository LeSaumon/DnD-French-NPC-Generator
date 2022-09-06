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