<template>
  <div>我是c组件</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next((vm) => {
      console.log(vm, "vm");
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (confirm("确定离开？")) {
      next();
    } else {
      next(false);
    }
  },
};
</script>