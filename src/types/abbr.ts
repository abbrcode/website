export type Abbr = {
   abbrs: ({
      abbr: string;
      degree: "green" | "red";
   } | {
      abbr: string;
      degree: "yellow";
      context: string;
   })[],
   word: string;
};