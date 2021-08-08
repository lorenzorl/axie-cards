<template>
  <main class="main">
    <div class="container">      
      <Card :overlap="true">
        <template v-slot:overlap>
          <AxieCard :data="card" :widthSize="620"/>  
        </template>
        <template v-slot:header>
          <h2>{{ card.skillName }}</h2>
        </template>
        <template v-slot:default>
          <div class="content-list">
            <div class="content-list__item">
              <div class="content-list__icon">                
                <component :is="part" :type="type"></component>
              </div>
              <div class="content-list__description">
                <b>{{ $t('part') }}</b>
                <span>{{ $t(`parts.${part}`) + ` - ${card.partName}`}}</span>
              </div>
            </div>
            <div class="content-list__item">
              <div class="content-list__icon">
                <img src="/icon-atk.png">
              </div>
              <div class="content-list__description">
                <b>{{ $t('attack') }}</b>
                <span>{{ card.defaultAttack }}</span>
                <b>{{ $t('attackType') }}</b>
                <span>{{ $t(`attackTypes.${card.expectType}`) }}</span> 
              </div>
            </div>
            <div class="content-list__item">
              <div class="content-list__icon">
                <img src="/icon-def.png">
              </div>
              <div class="content-list__description">
                <b>{{ $t('defense') }}</b>
                <span>{{ card.defaultDefense }}</span>                
              </div>
            </div>
            <div class="content-list__item">
              <div class="content-list__icon">
                <img src="https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/gain-energy.png">
              </div>
              <div class="content-list__description">
                <b>{{ $t('energy') }}</b>
                <span>{{ card.defaultEnergy }}</span>                
              </div>
            </div>
            <div class="content-list__item">
              <div class="content-list__icon">
                <img :src="`https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/${card.iconId}.png`">
              </div>
              <div class="content-list__description">
                <b>{{ $t('description') }}</b>
                <span>{{ $t(`cards.${card.id}.description`) }}</span>                
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </main>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      id: ''
    }
  },
  computed: {
    card(){
      return this.$store.getters['cards/getOne'](this.id);
    },
    part(){
      return this.card.id.split("-")[1];
    },
    type(){
      return this.card.id.split("-")[0];
    }
  },
  methods: {
    capitalizeFirstLetter(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  created(){
    this.id = this.$route.params.id;
  }
}

</script>