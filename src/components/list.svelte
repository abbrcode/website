<script lang="ts">
   import { abbrs, degrees } from '~/data/data';

   let query = $state('');

   let filteredList = $derived(
      abbrs.filter((abbrEntry) => {
         if (abbrEntry.word.toLowerCase().includes(query.toLowerCase())) {
            return abbrEntry;
         }
      }),
   );
</script>

<div class="space-y-1">
   <input
      type="search"
      placeholder="Search a word..."
      class="rounded-md px-3 py-2 w-screen sm:w-80 text-accent font-mono"
      bind:value={query}
   />

   <div class="text-center">
      {filteredList.length} abbr{filteredList.length !== 1 ? 's' : ''}
   </div>
</div>

<main class="flex flex-col items-center">
   {#each filteredList as abbrEntry}
      <div>
         {abbrEntry.word}
         {#each abbrEntry.abbrs as abbr}
            {' • '}
            <!-- Degree -->
            {degrees.get(abbr.degree)} 
            <!-- Abbr -->
            {abbr.abbr}
            <!-- Context -->
            {abbr.degree === 'yellow' ? `{${abbr.context}}` : ''}
         {/each}
      </div>
   {/each}
</main>
