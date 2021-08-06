<template>
  <img 
    :class="className" 
    :src="blobUrl" 
    @load="$emit('loaded-image')"
  >
</template>
<script>
  
export default {
  name: 'BlobImage',
  data(){
    return {
      blobUrl: null
    }
  },
  props: {
    src: String,
    className: String
  },
  methods: {
    async getImage(){
      const config = { url: this.src, method: "get", responseType: "blob" }
      try {
        const response = await this.$axios.request(config)
        this.blobUrl =  URL.createObjectURL(response.data)
      } catch (error) {
        console.log(error);
      }
    },
    observeElement(entries, observer){
      entries
        .filter(entry => entry.isIntersecting)
        .forEach(entry => {
          this.getImage();
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