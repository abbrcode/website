import { Abbr } from '../types/abbr';

import { abbrs, degrees } from '../data/data';

export default function List({
   q
}: {
   q: string;
}) {
   const filter: Abbr[] = abbrs.filter(a => a.word.includes(q));

   return <div>
      <Length num={filter.length} />
      <Abbrs filter={filter} />
   </div>;
}

function Length({
   num
}: {
   num: number;
}) {
   return <span>{num} abbr{num !== 1 && 's'}</span>;
}

function Abbrs({
   filter
}: {
   filter: Abbr[];
}) {
   return <div>
      {filter.map(abbr => {
         return <div key={abbr.word}>
            {abbr.word}
            <> • </>
            {abbr.abbrs.map(a => <span key={a.abbr}>{degrees[a.degree]} {a.abbr}</span>)}
         </div>;
      })}
   </div>;
}