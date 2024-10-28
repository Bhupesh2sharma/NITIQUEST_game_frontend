<template>
    <div class="market-research-container">
      <h1>Conduct Market Research</h1>
      <p>Select a market research report to analyze your potential customer base and competitors. Each report varies in cost and detail.</p>
  
      <div class="research-options">
        <div
          v-for="(research, index) in researchOptions"
          :key="index"
          class="research-card"
          :class="{ selected: selectedResearch === research.id }"
          @click="selectResearch(research.id)"
        >
          <h2>{{ research.name }}</h2>
          <p>{{ research.description }}</p>
          <p><strong>Cost:</strong> ${{ research.cost }}</p>
        </div>
      </div>
  
      <div class="budget-info">
        <p><strong>Current Budget:</strong> ${{ currentBudget }}</p>
        <p v-if="selectedResearch"><strong>New Budget:</strong> ${{ updatedBudget }}</p>
      </div>
  
      <button
        @click="proceedToNext"
        :disabled="!selectedResearch"
        class="proceed-btn"
      >
        Proceed to Budget Allocation
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedResearch: null,
        currentBudget: 10000, // Default initial budget, could be fetched from Vuex or localStorage
        researchOptions: [
          {
            id: 1,
            name: "Basic Market Report",
            description: "General information about the market with limited insights.",
            cost: 1000
          },
          {
            id: 2,
            name: "Detailed Market Report",
            description: "Includes competitor analysis and customer segmentation.",
            cost: 3000
          },
          {
            id: 3,
            name: "In-Depth Market Report",
            description: "Offers predictive trends and comprehensive industry data.",
            cost: 5000
          }
        ]
      };
    },
    computed: {
      // Calculate the updated budget after research selection
      updatedBudget() {
        const selectedResearchOption = this.researchOptions.find(option => option.id === this.selectedResearch);
        return this.currentBudget - (selectedResearchOption ? selectedResearchOption.cost : 0);
      }
    },
    methods: {
      // Handle research selection
      selectResearch(researchId) {
        this.selectedResearch = researchId;
      },
      // Proceed to the next phase (Budget Allocation)
      proceedToNext() {
        if (this.selectedResearch) {
          // Save the selected research option and the updated budget
          const selectedResearchOption = this.researchOptions.find(option => option.id === this.selectedResearch);
          localStorage.setItem('selectedResearch', JSON.stringify(selectedResearchOption));
          localStorage.setItem('updatedBudget', this.updatedBudget);
  
          // Redirect to Budget Allocation page
          this.$router.push({ name: 'BudgetAllocation' });
        }
      }
    },
    mounted() {
      // Fetch the initial budget from localStorage if it exists
      const savedBudget = localStorage.getItem('updatedBudget');
      if (savedBudget) {
        this.currentBudget = parseInt(savedBudget);
      }
    }
  };
  </script>
  
  <style scoped>
  .market-research-container {
    text-align: center;
    padding: 20px;
  }
  
  .research-options {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .research-card {
    padding: 15px;
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 250px;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .research-card.selected {
    border-color: #3b5d50;
    background-color: #f0f4f0;
    transform: scale(1.05);
  }
  
  .research-card:hover {
    transform: scale(1.03);
  }
  
  .budget-info {
    margin-top: 30px;
    font-size: 18px;
  }
  
  .proceed-btn {
    margin-top: 30px;
    padding: 10px 20px;
    background-color: #3b5d50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .proceed-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  