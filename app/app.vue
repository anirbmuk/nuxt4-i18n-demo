<template>
  <div>
    <NuxtRouteAnnouncer />
    <div id="main" class="container flex items-center justify-between">
      <h1 class="text-2xl p-2">
        {{ i18n.t('global.heading') }}
      </h1>
      <select v-model="current" @change="">
        <option v-for="({ name, code, location }) in countries" :key="name" :label="name" :value="code" />
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">

const i18n = useI18n()

const current = ref<string>(i18n.locale.value)

const countries = computed<{ name: string, code: string, location: string }[]>(() => {
  const locales = i18n.locales.value.map((locale) => locale)
  const options: { name: string, code: string, location: string }[] = []
  for (const locale of locales) {
    const { code = '', language = '', domain: location = '' } = locale
    const [lang = '', loc = ''] = language.split('-')
    const name = new Intl.DisplayNames([i18n.locale.value], { type: 'region' }).of(loc || lang) || ''
    options.push({ name, code, location })
  }

  return options
})

watch(current, (curr) => {
  const next = countries.value.find(({ code }) => code === curr)
  if (next) {
    const isPath = !next.location.startsWith(`${curr}.`)
    const isDefault = curr === i18n.defaultLocale
    const path = isDefault ? '' : `/${curr}`
    window.location.href = isPath ? `https://${next.location}${path}` : `https://${next.location}`
  }
})

useHead({
  title: i18n.t('global.title'),
  htmlAttrs: {
    lang: i18n.locale.value,
  },
})
</script>
