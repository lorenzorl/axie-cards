<template>
  <img 
    crossorigin="anonymuos" 
    loading="lazy"
    :src="src" 
    @load="$emit('loaded-image')"
  >
</template>
<script>
  
export default {
  name: 'ImgLazyLoading',
  data(){
    return {
      src: null
    }
  },
  props: {
    url: String
  },
  methods: {
    observeElement(entries, observer){
      entries
        .filter(entry => entry.isIntersecting)
        .forEach(entry => {
          this.src = this.url;
          console.log('load');
          observer.disconnect();
        })
    }
  },
  mounted(){
    const observer = new IntersectionObserver(this.observeElement);
    observer.observe(this.$el);
  }
}
</script>