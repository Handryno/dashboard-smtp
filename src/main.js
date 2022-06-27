import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const cors = require('cors');

// const express = require('express');
// const app = express();

createApp(App).use(router, cors()).mount('#app')
