<template>
  <svg width="100%" height="100%" viewBox="0 0 100 100"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <text 
      font-size="9.5" 
      fill="#ffffff" 
      x="-5%" 
      :y="this.y"
      style="dominant-baseline: middle;"
    >
      <tspan 
        v-for="(line, i) in lines" 
        dy="1.5em" 
        x="-5%"
      >{{ line }}</tspan>
    </text>
  </svg>
</template>
<script>
  
export default {
  name: 'AjustedText',
  data(){
    return {
      lines: [],
      y: 42
    }
  },
  props: {
    text: {
      required: true,
      type: String
    }
  },
  methods: {
    calculateLines(){
      let linesMarkings = [];
      let words = 0;
      let lastSpace = 0
      let firstChar = 0;
      for (let i = 0; i < this.text.length; i++) {
        if(this.text[i] === " "){
          lastSpace = i;
        }
        if ((i % 27) === 0 && i !== 0) {
          linesMarkings.push({
            start: firstChar,
            end: lastSpace + 1
          });
          firstChar = lastSpace + 1;
        }
        if(i === (this.text.length - 1) && firstChar !== this.text.length){
          linesMarkings.push({
            start: firstChar,
            end: this.text.length
          });
        }
      }
      linesMarkings.forEach((line) => {
        this.lines.push(this.text.slice(line.start, line.end))
      });
      this.updateY();
    },
    updateY(){
      this.y = this.y - (7 * (this.lines.length));
    }
  },
  created(){
    this.calculateLines();
  }
}

</script>