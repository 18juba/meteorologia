

import { appWithTranslation, useTranslation } from 'next-i18next';
import i18n from 'i18next';
import nextI18NextConfig from '../../next-i18next.config.js';

// Optionally, you can initialize i18n here if needed for non-component usage
// i18n.init(nextI18NextConfig); // Only if you need to use i18n.t outside React

export { i18n, appWithTranslation, useTranslation };
