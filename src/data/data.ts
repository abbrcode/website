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
      'https://raw.githubusercontent.com/abbrcode/abbreviations-in-code/dev/data/abbrs/.json',
   )
).json();

export const degrees = new Map<string, string>(await (
   await fetch(
      'https://raw.githubusercontent.com/abbrcode/abbreviations-in-code/dev/data/degrees.json',
   )
).json());

console.log(degrees);