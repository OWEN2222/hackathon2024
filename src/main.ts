import { createApp } from 'vue';
import router from './router';
import AOS from 'aos';
import App from './App.vue';

import 'aos/dist/aos.css';
import 'normalize.css';
import './common.css';
import './fonts.css';
import './tailwind.css';

const app = createApp(App);
const express = require('express');
const cors = require('cors');
const app = express();

// 使用 CORS 中介軟體
app.use(cors());

// 或者設置具體的 CORS 配置
app.use(cors({
  origin: '*',  // 允許所有來源，或替換為指定來源如 'http://localhost:8080/'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/api', (req, res) => {
  res.json({ message: 'This is a CORS-enabled endpoint.' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.use(router);
app.use(AOS.init());
app.mount('#app');
