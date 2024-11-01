<script lang="ts">
   import { abbrs, degrees, langs, getTranslations } from '~/data/data';

   let query = $state('');
   let lang = $state('en');

   let filteredList = $derived(
      abbrs.filter((abbrEntry) => {
         if (abbrEntry.word.toLowerCase().includes(query.toLowerCase())) {
            return abbrEntry;
         }
      }),
   );
</script>

<div class="space-y-1">
   <div class="bg-white rounded-md px-3 py-2 flex gap-1 items-center">
      <input
         type="search"
         placeholder="Search a word..."
         class="outline-none w-60 text-accent font-mono"
         bind:value={query}
      />

      <select class="outline-none cursor-pointer" bind:value={lang}>
         {#each langs as lang}
            <option>{lang}</option>
         {/each}
      </select>
   </div>

   <div class="text-center">
      {filteredList.length} abbr{filteredList.length !== 1 ? 's' : ''}
   </div>
</div>

<main class="flex flex-col items-center">
   {#each filteredList as abbrEntry}
      <div>
         {#if lang === 'en'}
            {abbrEntry.word}
         {:else}
            {#await getTranslations(lang)}
               ...
            {:then translations}
               {translations.find((translation) => translation.word === abbrEntry.word)!.translation}
            {/await}
            ({abbrEntry.word})
         {/if}

         {#each abbrEntry.abbrs as abbr}
            {' • '}
            <!-- Degree -->
            {degrees.get(abbr.degree)}
            <!-- Abbr -->
            {abbr.abbr}
            <!-- Context -->
            {abbr.degree === 'context sensitive' ? `{${abbr.context}}` : ''}
         {/each}
      </div>
   {/each}
</main>
