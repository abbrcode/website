import { Abbr } from '../types/abbr';

export const abbrs: Abbr[] = await (await fetch('https://raw.githubusercontent.com/abbrcode/db/main/abbrs/.json')).json();

export const degrees = await (await fetch('https://raw.githubusercontent.com/abbrcode/db/main/list/degrees.json')).json();