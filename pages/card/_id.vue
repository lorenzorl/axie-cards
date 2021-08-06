<template>
  <main class="main">
    <div class="container">      
      <Card :overlap="true">
        <template v-slot:overlap>
          <AxieCard :data="card" :widthSize="620"/>  
        </template>
        <template v-slot:header>
          <h2>{{ card.partName }}</h2>
        </template>
        <template v-slot:default>
          <div class="content-list">
            <div class="content-list__item">
              <div class="content-list__icon">                
                <component :is="part" :type="type"></component>
              </div>
              <div class="content-list__description">
                <b>Parte: </b>
                <span>{{ capitalizeFirstLetter(part) }}</span>
              </div>
            </div>
            <div class="content-list__item">
              <div class="content-list__icon">
                <img src="/icon-atk.png">
              </div>
              <div class="content-list__description">
                <b>Ataque: </b>
                <span>{{ card.defaultAttack }}</span>
                <b>Tipo de Ataque: </b>
                <span>{{ capitalizeFirstLetter(card.expectType) }}</span> 
              </div>
            </div>
            <div class="content-list__item">
              <div class="content-list__icon">
                <img src="/icon-def.png">
              </div>
              <div class="content-list__description">
                <b>Defensa: </b>
                <span>{{ card.defaultDefense }}</span>                
              </div>
            </div>
            <div class="content-list__item">
              <div class="content-list__icon">
                <img src="https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/gain-energy.png">
              </div>
              <div class="content-list__description">
                <b>Energia: </b>
                <span>{{ card.defaultEnergy }}</span>                
              </div>
            </div>
            <div class="content-list__item">
              <div class="content-list__icon">
                <img :src="`https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/${card.iconId}.png`">
              </div>
              <div class="content-list__description">
                <b>Descripcion: </b>
                <span>{{ card.description }}</span>                
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
  async asyncData({params}){
    // console.log(params);
    const id = params.id;
    return { id }
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
    console.log(this.card);
  }
}

</script>