<template>
  <div class="card__wrapper">
    <template v-if="overlap">
      <div class="card__overlap">
        <slot name="overlap"></slot>
      </div>
    </template>
    <div class="card" :class="{'card--overlapping' : overlap }">
      <header class="card__header">
        <slot name="header"></slot>
      </header>
      <main class="card__main">
        <slot></slot>
      </main>
      <footer class="card__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
<script>
  
export default {
  name: 'Card',
  props: {
    overlap: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}

</script>