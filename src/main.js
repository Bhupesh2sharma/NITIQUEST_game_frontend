import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/style.css'

// Import your views
import Home from '../views/Home.vue';
import GameLevel1 from '../views/GameLevel1.vue';
import GameLevel2 from '../views/GameLevel2.vue';
import Introduction from './components/level1/Introduction.vue';
import ProductSelection from './components/level1/ProductSelection.vue';
import MarketResearch from './components/level1/MarketResearch.vue';
import BudgetAllocation from './components/level1/BudgetAllocation.vue';
import GoalSetting from './components/level1/GoalSetting.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/game-level-1', component: GameLevel1 },
  { path: '/level-2', component: GameLevel2 },
  // Add more game levels here
  {
    path: '/intro',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/product-selection',
    name: 'ProductSelection',
    component: ProductSelection
  },
  {
    path: '/market-research',
    name: 'MarketResearch',
    component: MarketResearch
  },
  {
    path: '/budget-allocation',
    name: 'BudgetAllocation',
    component: BudgetAllocation
  },
  {
    path: '/goal-setting',
    name: 'GoalSetting',
    component: GoalSetting
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
