import { createApp } from 'vue'
import App from './App.vue' //Root Vue component
import Antd from 'ant-design-vue';

//For router-view
import { createRouter, createWebHistory } from 'vue-router';

//Page
import Homepage from './components/pages/homepage.vue';
import UIUXPage from './components/pages/uiux-page.vue'

//Design
import 'ant-design-vue/dist/antd.css';
import './assets/main.css'



const routes = [
    { path: '/navarro-llama/', component: Homepage },
    { path: '/navarro-llama/uiux', component: UIUXPage}
];

const router = createRouter({
    history:createWebHistory(),
    routes 
}); 

const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount('#app');

