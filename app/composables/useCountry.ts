export const useCountry = () => {
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
      const isHttps = window.location.protocol === 'https:'
      window.location.href = isPath ? `${isHttps ? 'https' : 'http'}://${next.location}${path}` : `${isHttps ? 'https' : 'http'}://${next.location}`
    }
  })

  return {
    current,
    countries,
  }
}
