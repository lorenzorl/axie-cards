export default {
  props: {
    type: String
  },
  computed: {
    color(){
      return this.$store.state.cards.parts[this.type].color;
    },
    shadow(){
      return this.$store.state.cards.parts[this.type].shadow;
    }
  }
}