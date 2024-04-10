import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"
import Oruga from '@oruga-ui/oruga-next';
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap';
import '@oruga-ui/theme-bootstrap/dist/bootstrap.css';
import '@mdi/font/css/materialdesignicons.min.css';
import VueApexCharts from "vue3-apexcharts";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(Oruga,bootstrapConfig).use(VueApexCharts)

app.mount('#app')
