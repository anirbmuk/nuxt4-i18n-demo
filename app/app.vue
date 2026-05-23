<template>
  <div>
    <NuxtRouteAnnouncer />
    <div id="main" class="container flex items-center justify-between">
      <h1 class="text-2xl p-2">
        {{ i18n.t('global.heading') }}
      </h1>
      <select
        id="country-switcher"
        v-model="current"
        class="p-2 rounded border border-gray-300 min-w-52">
        <option
          v-for="({ name, code }) in countries"
          :key="name"
          :label="name"
          :value="code" />
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">

const i18n = useI18n()

const {
  current,
  countries,
} = useCountry()

useHead({
  title: i18n.t('global.title'),
  htmlAttrs: {
    lang: new Intl.Locale(i18n.locale.value).toString(),
  },
})
</script>
