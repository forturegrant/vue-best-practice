<template>
  <div>
    <h1>{{ $store.getters.showNum }}</h1>
    <button @click="this.handleClick">+{{ $store.state.count }}</button>
    <button @click="this.handleAsyncClick">+{{ $store.state.count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      // this.$store.commit("add");
      this.$store.commit("addN", 3);
    },

    // 异步增加
    handleAsyncClick() {
      // this.$store.dispatch("addAsync");
      this.$store.dispatch("addNAsync", 3);
    },
  },
};
</script>