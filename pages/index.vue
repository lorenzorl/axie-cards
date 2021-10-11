<template>
  <main class="main">
    <div class="container align-content-center">
      <template v-for="type in types">
        <Card :key="type" class="card--axie-type">
          <template v-slot:default>
            <NuxtLink 
              class="link" 
              :to="`${type}-cards`"
              @click.native="updateFilters(type, 'all')"
            >
              <component :is="`${type}-type`"></component>
            </NuxtLink>
          </template>
          <template v-slot:footer>
            <NuxtLink 
              v-for="part in parts"
              :key="part"
              :to="`/${type}-cards`"
              @click.native="updateFilters(type, part)"
              class="axie-part__wrapper"
            >
              <component :is="part" :type="type" />
            </NuxtLink>
          </template>
        </Card>
      </template>
    </div>
  </main>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      types: [
        'aquatic',
        'reptile',
        'beast',
        'bird',
        'bug',
        'plant'
      ],
      parts: [
        'mouth',
        'tail',
        'horn',
        'back'
      ],
      cards: {}
    }
  },
  methods: {
    updateFilters(typea = 'all', part = 'all'){
      this.$store.dispatch('cards/filterType', typea);
      this.$store.dispatch('cards/filterPart', part);
    }
  },
  computed:{
    ...mapGetters(['cards/getAll'])
  }
}
</script>
