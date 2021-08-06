<template>
  <main class="main">
    <div class="container">
      <NuxtLink v-for="card in cards" :key="card.id" :to="`card/${card.id}`">
        <AxieCard 
        :data="card"
        :widthSize="200"
      />
      </NuxtLink>
    </div>
  </main>
</template>
<script>
  
import filteredCards from '~/mixins/filteredCards.js'
  
export default {
  name: 'ReptileCards',
  mixins: [filteredCards],
  created(){
    this.handleTypeFilter('reptile');
  }
}

</script>