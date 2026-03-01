<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Docs',
    to: '/getting-started',
    active: route.path === '/getting-started'
  },
  // {
  //   label: 'VS Code Extension',
  //   to: 'https://marketplace.visualstudio.com/items?itemName=nuxt.url-formatter',
  //   target: '_blank'
  // },
  {
    label: 'Releases',
    to: 'https://github.com/twheeljs/url-formatter/releases',
    target: '_blank'
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton color="neutral" variant="ghost" to="https://github.com/twheeljs/url-formatter" target="_blank"
          icon="i-simple-icons-github" aria-label="GitHub" />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
