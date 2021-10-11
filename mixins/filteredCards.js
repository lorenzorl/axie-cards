export default {
  computed: {
    cards(){
      return this.$store.getters['cards/getFilteredCards'];
    }
  },
  methods: {
    handleTypeFilter(type){
      this.$store.dispatch('cards/filterType', type);
    },
    handlePartFilter(part){
      this.$store.dispatch('cards/filterPart', part);
    },
    handleFilterOrder(){
      this.$store.dispatch('cards/filterOrder', 'descendingAttack')
    }
  }

}