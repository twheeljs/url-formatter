<script setup lang="ts">
const items = [
  {
    label: 'Paste URL',
    icon: 'i-lucide-clipboard',
    content: 'Copy a complex URL from your browser address bar or logs and paste it into the input field.'
  },
  {
    label: 'Automatic Parsing',
    icon: 'i-lucide-zap',
    content: 'The application instantly breaks down the URL into its components: Protocol, Host, Path, and Query Parameters.'
  },
  {
    label: 'Analyze & Debug',
    icon: 'i-lucide-search',
    content: 'Review the parsed data. Identify issues with query parameters or path segments easily with the structured view.'
  }
]
</script>

<template>
  <UContainer class="py-12">
    <div class="max-w-3xl mx-auto space-y-12">
      <!-- Header -->
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Getting Started
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Learn how to use URL Formatter to analyze, debug, and understand your URLs efficiently.
        </p>
      </div>

      <!-- Introduction -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-info" class="w-5 h-5 text-primary-500" />
            <h2 class="font-semibold text-lg">What is URL Formatter?</h2>
          </div>
        </template>
        <div class="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p>
            URL Formatter is a simple yet powerful tool designed for developers, QA engineers, and anyone who works with web links.
            It takes a raw, often unreadable URL string and dissects it into clear, manageable components.
          </p>
          <p class="mt-4">
            Whether you are debugging API endpoints with numerous query parameters or just trying to read a long tracking link,
            URL Formatter makes it easy to visualize the structure of your URLs.
          </p>
        </div>
      </UCard>

      <!-- How it works -->
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center">How it Works</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <UCard v-for="(item, index) in items" :key="index" class="text-center">
            <div class="flex justify-center mb-4">
              <div class="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                <UIcon :name="item.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <h3 class="font-semibold text-lg mb-2">{{ item.label }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.content }}</p>
          </UCard>
        </div>
      </div>

      <!-- Key Features -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Key Features</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300"><strong>Protocol & Host Identification:</strong> Quickly identify the scheme (http/https) and domain name.</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300"><strong>Path Extraction:</strong> See the exact path of the resource.</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300"><strong>Query Parameter Parsing:</strong> Breaks down complex query strings into a readable key-value table.</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
            <span class="text-gray-700 dark:text-gray-300"><strong>Validation:</strong> Instantly validates if the URL is properly formatted.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="flex flex-col items-center justify-center pt-8 border-t border-gray-200 dark:border-gray-800">
        <p class="mb-4 text-gray-600 dark:text-gray-400">Ready to simplify your URLs?</p>
        <UButton to="/" size="lg" color="primary" icon="i-lucide-arrow-right" trailing>
          Go to Formatter
        </UButton>
      </div>
    </div>
  </UContainer>
</template>