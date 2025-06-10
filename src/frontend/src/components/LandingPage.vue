<script setup>
import LanguageSelectBtn from './utilcomponents/LanguageSelectBtn.vue';
import ThemeChangeBtn from './utilcomponents/ThemeChangeBtn.vue';
import IconEnter from '@/components/icons/IconEnter.vue';
</script>

<template>
 
  <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-200">
    
 
    <header class="flex items-center justify-between pt-4 px-4 lg:px-12 w-full max-w-6xl mx-auto">
      <LanguageSelectBtn />
      <ThemeChangeBtn />
    </header>

  
    <main class="flex flex-1 flex-col items-center justify-center w-full max-w-2xl mx-auto px-4">
      
    
      <RouterLink
        to="/enter-tournament"
        class="group rounded-xl w-44 h-44 md:w-56 md:h-56 flex flex-col justify-center items-center mb-8 shadow-lg transition"
        style="background-color: #509F96;"
      >
        <!-- Icon und Text im Button -->
        <IconEnter class="w-14 h-14 md:w-20 md:h-20 text-white mb-2 group-hover:text-black duration-200" />
        <span class="text-lg md:text-xl text-white group-hover:text-black text-center font-semibold">
          Turnier Beitreten
        </span>
      </RouterLink>

     
      <div class="flex flex-col gap-6 w-full items-center md:flex-row md:justify-center md:gap-12">
        <RouterLink 
          to="/create-tournament" 
          class="landingButton group text-center px-8 py-4 rounded-full bg-white shadow hover:bg-gray-200 font-bold text-black text-lg md:text-xl transition"
        >
          Neue Turniere Erstellen
        </RouterLink>
        <RouterLink 
          to="/old-tournament" 
          class="landingButton group text-center px-8 py-4 rounded-full bg-white shadow hover:bg-gray-200 font-bold text-black text-lg md:text-xl transition"
        >
          Alte Turniere Einsehen
        </RouterLink>
      </div>
    </main>
  </div>
</template>