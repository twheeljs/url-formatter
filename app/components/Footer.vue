<template>
  <UFooter>
    <div class="flex items-center gap-4">
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
      <UButton icon="i-simple-icons-x" color="neutral" variant="ghost" to="https://x.com/yangjinfe" target="_blank"
        aria-label="X" />
      <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/niexia"
        target="_blank" aria-label="GitHub" />
    </div>
  </UFooter>
</template>
