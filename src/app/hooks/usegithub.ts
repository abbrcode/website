import { useEffect, useState } from 'react';

import { Abbr } from '../../types/abbr';

const endpoint = 'https://raw.githubusercontent.com/abbrcode/';

export default function useGitHub(path: string) {
   const [res, setRes] = useState<Abbr[]>([]);

   useEffect(() => {
      (async () => {
         const res = await fetch(endpoint + path);

         setRes(await res.json());
      })();
   }, [path]);

   return res;
}