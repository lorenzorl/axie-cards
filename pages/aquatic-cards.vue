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
  name: 'AquaticCards',
  mixins: [filteredCards],
  created(){
    this.handleTypeFilter('aquatic');
  }
}

</script>