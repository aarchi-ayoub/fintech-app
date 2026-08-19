type LocaleResources = Record<string, Record<string, object>>;

const localeContext = require.context('../locales', true, /\.json$/);

export function loadLocales(): LocaleResources {
  const resources: LocaleResources = {};

  localeContext.keys().forEach((key) => {
    const match = key.match(/\.\/([^/]+)\/([^/]+)\.json$/);
    if (!match) return;

    const [, lang, namespace] = match;
    resources[lang] ??= {};
    resources[lang][namespace] = localeContext(key);
  });

  return resources;
}

export function getSupportedLangs(): string[] {
  return [...new Set(localeContext.keys().map((key) => key.split('/')[1]))];
}
