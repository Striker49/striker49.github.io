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
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, fr, es }
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
