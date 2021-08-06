export default {
  // async asyncData({ store, params }){
  //   const part = params.part ? params.part : 'all';
  //   store.dispatch('cards/filterPart', part);

  //   const type = params.type ? params.type : 'all';
  //   store.dispatch('cards/filterType', type);
  // },
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
  },
  created(){
    const query = this.$route.query;

    const part = query.part ? query.part : 'all';
    this.handlePartFilter(part);
  }

}