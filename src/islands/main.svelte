<script lang="ts">
   import type { Abbr } from '../types/abbr';

   export let abbrs: Abbr[];
   export let degrees: any;

   let query = '';

   $: filteredAbbrs = abbrs.filter((abbrEntry) => {
      if (abbrEntry.word.toLowerCase().includes(query.toLowerCase())) return abbrEntry;
   });
</script>

<div>
   <input
      type="text"
      placeholder="Search a word..."
      class="rounded-md outline-none px-3 py-2 w-80 text-accent font-mono"
      bind:value={query}
   />
   <div class="pt-3 text-center">{filteredAbbrs.length} abbrs</div>
</div>

<main class="flex flex-col items-center">
   {#each filteredAbbrs as abbrEntry}
      <div>
         <span>{abbrEntry.word}</span>
         {#each abbrEntry.abbrs as abbr}
            <span>
               • {degrees[abbr.degree]}
               {abbr.abbr}
               {abbr.degree === 'yellow' && `{${abbr.context}}`}
            </span>
         {/each}
      </div>
   {/each}
</main>
