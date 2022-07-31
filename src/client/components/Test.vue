<template>
  <div>
    <div @click="changeMessage">{{ title }}</div>
    <div @click="handleClick">changeAge</div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["title", "changeMessage"],
  data() {
    return {};
  },
  mounted() {
    console.log("mounted");
    this.changeMessage();
  },
  methods: {
    handleClick() {
      this.$emit("changeAge", 29);
    },
    handleChangeAge() {
      // this.$chil
    },
  },
};
</script>