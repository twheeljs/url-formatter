<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <UApp>
    <div class="flex flex-col min-h-screen">
      <Navbar />
      <div class="flex-1">
        <NuxtPage />
      </div>
      <Footer />
      <Analytics />
    </div>
  </UApp>
</template>