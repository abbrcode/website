import { Abbr } from '../../types/abbr';

import useGitHub from '../hooks/usegithub';

export default function List({
   q
}: {
   q: string;
}) {
   const abbrs = useGitHub('db/main/abbrs/.json');

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
   const degrees = useGitHub('db/main/list/degrees.json');

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