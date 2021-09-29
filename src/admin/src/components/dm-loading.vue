<template>
  <div class="loading" v-if="show">
    <div><span class="spinner is-active"></span> {{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Salvando...",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>