import { toStarlightLocales, DEFAULT_LOCALE } from '@f5xc-salesdemos/i18n-core';
import type { StarlightLocaleConfig } from '@f5xc-salesdemos/i18n-core';

export type LocaleConfig = StarlightLocaleConfig;

export const f5xcDefaultLocales = toStarlightLocales();

export const defaultLocale = DEFAULT_LOCALE;
