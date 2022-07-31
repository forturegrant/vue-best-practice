<template>
  <div>
    <h1>{{ showNum }}</h1>
    <button @click="add">-{{ count }}</button>
    <button @click="addAsync">-{{ count }}</button>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"]),
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["addAsync"]),
  },
};
</script>