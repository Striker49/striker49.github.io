import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import './style.css'


// Import language files
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

// Create an i18n instance
const i18n = createI18n({
  locale: 'en', // Default language
  fallbackLocale: 'en', // Fallback if translation is missing
  messages: { en, fr, es }
});

// Create and mount the app with i18n
const app = createApp(App);
app.use(i18n);
app.mount('#app');
