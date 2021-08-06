<template>
  <div class="container">
    <NuxtLink v-for="card in cards" :key="card.id" :to="`card/${card.id}`">
      <AxieCard 
      :data="card"
      :widthSize="200"
    />
    </NuxtLink>
  </div>
</template>
<script>
  
export default {
  middleware: 'data-loaded',
  async asyncData({params}){
    const id = params.id;
    return { id }
  },
  computed: {
    cards(){
      return this.$store.getters['cards/getFilteredCards'];
    }
  },
  methods: {
    handleTypeFilter(){
      this.$store.dispatch('cards/filterType', 'all');
    },
    handlePartFilter(){
      this.$store.dispatch('cards/filterPart', 'all');
    },
    handleFilterOrder(){
      this.$store.dispatch('cards/filterOrder', 'descendingAttack')
    }
  },
  mounted(){
    this.handleTypeFilter();
    this.handlePartFilter();
    this.handleFilterOrder();
  }

}

</script>
<style>
  
.container {
  display: flex;
  flex-wrap: wrap;
}

</style>