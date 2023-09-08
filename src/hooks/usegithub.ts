import { useEffect, useState } from 'react';

const endpoint = 'https://raw.githubusercontent.com/abbrcode/';

export default function useGitHub<T>(path: string) {
   const [res, setRes] = useState<T | null>(null);

   useEffect(() => {
      (async () => {
         const res = await fetch(endpoint + path);

         setRes(await res.json());
      })();
   }, [path]);

   return res;
}