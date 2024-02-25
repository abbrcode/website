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
      type="search"
      placeholder="Search a word..."
      class="rounded-md outline-none px-3 py-2 w-screen sm:w-80 text-accent text-center font-mono"
      bind:value={query}
   />
   <div class="pt-3 text-center">
      {filteredAbbrs.length} abbr{filteredAbbrs.length !== 1 ? 's' : ''}
   </div>
</div>

<main class="flex flex-col items-center">
   {#each filteredAbbrs as abbrEntry}
      <div>
         {abbrEntry.word}
         {#each abbrEntry.abbrs as abbr}
            {' • '}
            <!-- Degree -->
            {degrees[abbr.degree]}
            <!-- Abbr -->
            {abbr.abbr}
            <!-- Context -->
            {abbr.degree === 'yellow' ? `{${abbr.context}}` : ''}
         {/each}
      </div>
   {/each}
</main>
