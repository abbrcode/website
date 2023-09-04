import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export default function Search({
   q,
   setQ
}: {
   q: string;
   setQ: Dispatch<SetStateAction<string>>;
}) {
   const change = (e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value.toLowerCase());

   return <input
      type='search'
      className='rounded py-2 w-52 text-center font-mono'
      onChange={change}
      placeholder='Search an abbr...'
      value={q}
   />;
}