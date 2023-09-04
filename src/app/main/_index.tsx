import { useState } from 'react';

import Search from './search';

export default function Main() {
   const [query, setQuery] = useState('');

   return <main className='p-7 flex flex-col gap-3 items-center text-center'>
      <Search
         q={query}
         setQ={setQuery}
      />
   </main>;
}