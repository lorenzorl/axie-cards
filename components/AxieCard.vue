<template>
  <div class="axie-card" :class="{'axie-card--size-default': this.loadingBase}">
    <div 
      class="axie-card__placeholder" 
      :class="{'loading-base' : this.loadingBase}"
      :style="{ background : `${this.backgroundBase}` }"
    ></div>
    <ImgLazyLoading 
      :class="['axie-card__base' , {'axie-card__base--shadow': true}]"
      :url="`https://storage.googleapis.com/axie-cdn/game/cards/base/${this.data.id}.png`"
      @loaded-image="loaded" 
    />
    <div class="axie-card__energy" :class="{'loading-base' : this.loadingBase}">
      <svg width="100%" height="100%" viewBox="0 0 100 100"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <text 
          font-size="55" 
          fill="#ffffff" 
          x="32%" 
          y="65%"
          style="stroke: rgb(125, 69, 27);stroke-width: 2%;"
        >{{ this.data.defaultEnergy }}</text>
      </svg>
  </div>
    <div class="axie-card__skill">
      <svg width="100%" height="100%" viewBox="0 0 100 100"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <text 
          font-size="40" 
          fill="#ffffff" 
          x="-25" 
          y="60"
        >{{ this.data.skillName }}</text>
      </svg>
    </div>
    <div class="axie-card__attack" :class="{'loading-base': this.loadingBase}">
      <img loading="lazy" class="axie-card__attack-bg" :src="`/bg-${this.type}.png`">
      <img loading="lazy" class="axie-card__attack-icon"src="/icon-atk.png">
      <svg width="100%" height="100%" viewBox="0 0 100 100"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <text 
          font-size="45" 
          fill="#ffffff" 
          x="50" 
          y="55"
          style="text-anchor: middle;dominant-baseline: middle;text-shadow: rgb(131 21 43) -2px 0px, rgb(131 21 43) 0px 2px, rgb(131 21 43) 2px 0px, rgb(131 21 43) 0px -2px;"
        >{{ this.data.defaultAttack }}</text>
      </svg>
    </div>
    <div class="axie-card__defense" :class="{'loading-base': this.loadingBase}">
      <img loading="lazy" class="axie-card__defense-bg" :src="`/bg-${this.type}.png`">
      <img loading="lazy" class="axie-card__defense-icon" src="/icon-def.png">
      <svg width="100%" height="100%" viewBox="0 0 100 100"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <text 
          font-size="45" 
          fill="#ffffff" 
          x="50" 
          y="55"
          style="text-anchor: middle;dominant-baseline: middle;text-shadow: rgb(2 89 89) -2px 0px, rgb(2 89 89) 0px 2px, rgb(2 89 89) 2px 0px, rgb(2 89 89) 0px -2px;"
        >{{ this.data.defaultDefense }}</text>
      </svg>
    </div>
    <div class="axie-card__description" :class="{'loading-base' : this.loadingBase}">
      <img loading="lazy" :src="`https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/${this.data.iconId}.png`">
         <AjustedText :text="this.data.description" />
      </svg>
    </div>
  </div>
</template>
<script>

export default {
  name: 'AxieCard',
  data(){
    return {
      loadingBase: true,
      imgLoaded: false
    }
  },
  props: {
    data: {
      required: true
    },
    widthSize: Number,
    shadow: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    heightSize(){
      return (this.widthSize * 1.33);
    },
    backgroundBase(){
      return this.$store.state.cards.backgrounds[this.type];
    },
    type(){
      return this.data.id.split('-')[0];
    }
  },
  methods: {
    loaded(){
      this.loadingBase = false;
      this.imgLoaded = true;
    },
    error(e){
      console.log(e);
    }
  }
}

</script>
