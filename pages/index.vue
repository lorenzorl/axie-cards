<template>
  <main class="main">
    <div class="container align-content-center">
      <template v-for="type in types">
        <Card :key="type" class="card--axie-type">
          <template v-slot:default>
            <NuxtLink 
              class="link" 
              :to="{ name : `${type}-cards`, params: { type: type} }"
            >
              <component :is="`${type}-type`"></component>
            </NuxtLink>
          </template>
          <template v-slot:footer>
            <NuxtLink 
              v-for="part in parts"
              :key="part"
              :to="{ path : `/${type}-cards`, query : { part : part }}"
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
  computed:{
    ...mapGetters(['cards/getAll'])
  },
  mounted(){
    console.log(this);
  }
}
</script>
