// store.js
import { createStore } from 'vuex'; // Use `createStore` instead of `Vue.use(Vuex)`

export default createStore({
  state: {
    budget: 30000,
    totalSales: 0,
    totalProfit: 0,
    customerSatisfaction: 0,
    innovationLevel: 0,
    brandReputation: 0,
    marketShare: 0,
    cumulativeScore: 0,
    currentStage: 'HighDemandProduct',
  },
  mutations: {
    updateMetric(state, payload) {
      state[payload.metric] += payload.amount;
    },
    setStage(state, stage) {
      state.currentStage = stage;
    },
    resetGame(state) {
      state.budget = 30000;
      state.totalSales = 0;
      state.totalProfit = 0;
      state.customerSatisfaction = 0;
      state.innovationLevel = 0;
      state.brandReputation = 0;
      state.marketShare = 0;
      state.cumulativeScore = 0;
      state.currentStage = 'HighDemandProduct';
    },
  },
  actions: {
    updateMetric({ commit }, payload) {
      commit('updateMetric', payload);
    },
    advanceStage({ commit }, stage) {
      commit('setStage', stage);
    },
  },
});
