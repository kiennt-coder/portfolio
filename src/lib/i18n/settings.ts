export const fallbackLng = 'en'
export const cookieName = 'i18next'
export const defaultNS = 'translation'
export const languages = [fallbackLng, 'vi']

export function getOptions (lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
