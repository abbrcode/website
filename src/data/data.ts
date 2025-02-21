export type Abbr = {
   abbrs: ({
      abbr: string;
      degree: "recommended" | "not recommended";
   } | {
      abbr: string;
      degree: "context sensitive";
      context: string;
   })[],
   word: string;
};

export const abbrs: Abbr[] = await (
   await fetch(
      'https://raw.githubusercontent.com/abbrcode/abbreviations-in-code/main/data/abbrs/.json',
   )
).json();

export const degrees = new Map<string, string>(await (
   await fetch(
      'https://raw.githubusercontent.com/abbrcode/abbreviations-in-code/main/data/degrees/index.json',
   )
).json());

export const langs: string[] = await (
   await fetch(
      'https://raw.githubusercontent.com/abbrcode/abbreviations-in-code/main/data/i18n/langs.json',
   )
).json();

export const getTranslations = async (lang: string) => {
   if (lang === 'en') return;

   return await (
      await fetch(
         `https://raw.githubusercontent.com/abbrcode/abbreviations-in-code/main/data/i18n/${lang}/translations.json`,
      )
   ).json();
};