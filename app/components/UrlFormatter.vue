<script setup lang="ts">

const urlValue = ref('')

const parsedUrl = computed(() => {
  if (!urlValue.value) {
    return null;
  }
  
  try {
    const url = new URL(urlValue.value)
    const params: { key: string, value: string, id: string }[] = []
    
    url.searchParams.forEach((value, key) => {
      params.push({ key, value, id: `${key}-${value}` })
    })

    return {
      protocol: url.protocol.replace(':', ''),
      host: url.host,
      pathname: url.pathname,
      searchParams: params,
      hash: url.hash,
      origin: url.origin,
      valid: true
    }
  } catch (e) {
    return { valid: false }
  }
})

const columns = [
  { accessorKey: 'key', label: 'Key',  },
  { accessorKey: 'value', label: 'Value' }
]

const setExample = () => {
  urlValue.value = 'https://example.com/search?q=vue&sort=desc&filter=recent#top'
}

</script>

<template>
  <div class="space-y-6">
    <!-- Input Section -->
    <UCard>
      <template #header>
        <div class="flex justify-between">
          <h2 class="font-semibold text-lg flex items-center gap-2">
            <UIcon name="i-lucide-link" class="w-5 h-5" />
            Input URL
          </h2>
          <UButton 
            v-if="parsedUrl?.valid"
            color="neutral" 
            variant="ghost" 
            size="sm" 
            icon="i-lucide-external-link"
            @click="navigateTo(urlValue, { external: true, open: { target: '_blank' } })">Go to</UButton>
        </div>
      </template>
      
      <UTextarea 
        v-model="urlValue" 
        placeholder="Paste your URL here (e.g., https://example.com/search?q=vue&sort=desc)" 
        :rows="3"
        class="w-full font-mono text-sm"
        autoresize
      />
      
      <div class="flex justify-end mt-2" v-if="urlValue">
        <UButton 
          color="neutral" 
          variant="ghost" 
          size="sm" 
          icon="i-lucide-trash-2" 
          label="Clear"
          @click="urlValue = ''" 
        />
      </div>
    </UCard>

    <!-- Results Section -->
    <template v-if="parsedUrl?.valid">
      <div class="grid gap-4 md:grid-cols-2">
        <!-- Basic Info -->
        <UCard class="md:col-span-2">
          <template #header>
            <h3 class="font-semibold text-gray-700 dark:text-gray-200">Basic Info</h3>
          </template>
          
          <div class="grid gap-4 sm:grid-cols-3">
            <div class="space-y-1">
              <span class="text-xs font-medium text-gray-500 uppercase">Protocol</span>
              <div class="flex items-center">
                <UBadge :color="parsedUrl.protocol === 'https' ? 'primary' : 'neutral'" variant="subtle">
                  {{ parsedUrl.protocol }}
                </UBadge>
              </div>
            </div>
            
            <div class="space-y-1 sm:col-span-2">
              <span class="text-xs font-medium text-gray-500 uppercase">Host</span>
              <div class="font-mono text-sm break-all bg-gray-50 dark:bg-gray-800/50 p-1.5 rounded border border-gray-200 dark:border-gray-700">
                {{ parsedUrl.host }}
              </div>
            </div>

            <div class="space-y-1 sm:col-span-3">
              <span class="text-xs font-medium text-gray-500 uppercase">Path</span>
              <div class="font-mono text-sm break-all bg-gray-50 dark:bg-gray-800/50 p-1.5 rounded border border-gray-200 dark:border-gray-700">
                {{ parsedUrl.pathname }}
              </div>
            </div>
          </div>
        </UCard>

        <!-- Query Parameters -->
        <UCard class="md:col-span-2" v-if="parsedUrl.searchParams.length > 0">
          <template #header>
            <div>
              <h3 class="font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                <UIcon name="i-lucide-list" class="w-4 h-4" />
                Query Parameters
                <UBadge color="neutral" variant="subtle" size="xs">{{ parsedUrl.searchParams.length }}</UBadge>
              </h3>
            </div>
          </template>
          
          <UTable :data="parsedUrl.searchParams" :columns="columns" class="w-full">
            <template #key-data="{ row }">
              <span class="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">{{ row.key }}</span>
            </template>
            <template #value-data="{ row }">
              <span class="font-mono text-sm break-all">{{ row.value }}</span>
            </template>
          </UTable>
        </UCard>

        <!-- Hash Fragment -->
        <UCard class="md:col-span-2" v-if="parsedUrl.hash">
          <template #header>
            <h3 class="font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
              <UIcon name="i-lucide-hash" class="w-4 h-4" />
              Hash Fragment
            </h3>
          </template>
          <div class="font-mono text-sm break-all bg-gray-50 dark:bg-gray-800/50 p-2 rounded border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">
            {{ parsedUrl.hash }}
          </div>
        </UCard>
      </div>
    </template>

    <!-- Invalid URL State -->
    <UAlert
      v-else-if="urlValue && parsedUrl?.valid === false"
      icon="i-lucide-alert-circle"
      color="error"
      variant="subtle"
      title="Invalid URL"
      description="Please enter a valid URL including the protocol (e.g., https://...)"
    />
    
    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center py-8 px-4 text-center shadow-sm dark:shadow-gray-800 rounded-xl">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ready to Analyze</h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 max-w-xs mb-6 leading-relaxed">
        Paste a URL above to break it down, or start with a complex example to see how it works.
      </p>
      <UButton 
        icon="i-lucide-sparkles" 
        color="neutral" 
        variant="subtle" 
        size="md"
        @click="setExample"
        class="transition-all hover:scale-105 active:scale-95"
      >
        Try an Example
      </UButton>
    </div>
  </div>
</template>