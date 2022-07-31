
<template>
  <div id="app">
    <router-view></router-view>
    <!-- //使用了replace就不会有跳转的历史记录 -->
    <router-link to="/" tag="div" replace target="_blank">跳转到a</router-link>
    <router-link :to="{ name: 'aa' }">跳转到aa</router-link>
    <router-link to="/b">跳转到b</router-link>
    <router-link to="/c">跳转到c</router-link>

    <Button @click="push">push</Button>
    <Button @click="getParams">获取参数</Button>
    <h1>上面是vue-router的内容</h1>
    {{ msg }}
    <Test
      :title="13"
      :changeMessage="changeMessage"
      @changeAge="age = $event"
    />
    <div>{{ age }}</div>
    <div>{{ publishMessage }}</div>
    <div @click="changeMessage">changeMessage</div>
    <div @click="changeAge(28)">changeAge</div>

    <h1>================================</h1>

    <my-addition></my-addition>

    <h1>================================</h1>

    <my-subtraction></my-subtraction>
  </div>
</template>
<script>
import Test from "./components/Test.vue";
import Addition from "./components/Addition.vue";
import Subtraction from "./components/Subtraction.vue";

export default {
  components: {
    Test,
    "my-addition": Addition,
    "my-subtraction": Subtraction,
  },
  name: "app",
  data() {
    return {
      msg: "hello vue !!",
      age: 27,
    };
  },
  computed: {
    publishMessage() {
      return this.msg.length > 0 ? "yes" : "no";
    },
  },
  methods: {
    changeMessage() {
      this.msg = "";
    },

    changeAge(age) {
      this.age = age;
    },

    push() {
      // 路由跳转的方法
      // this.$router.push("/");
      // this.$router.push({ path: "/" });
      // this.$router.push({ name: "/" }); // 当然要先声明name
      // this.$router.push({ name: "/", replace: true });  === this.$router.replace("/")
      // this.$router.push({ path: "/", query: { value: 2 } }); //path搭配query使用，url会显示参数

      //name搭配params使用，url不会显示参数，如果要刷新还有参数，需要再router上配置冒号，但这样自url就会显示参数了，还不如用上面那种
      this.$router.push({ name: "b", params: { value: 2 } });

      //新打开窗口的跳转方式，相当于'_blank'
      const routerData = this.$router.resolve({
        name: "b",
        params: { value: 2 },
      });
      window.open(routerData.href, "_blank");
    },

    getParams() {
      console.log(this.$route, "this.$route");
    },
  },
};
</script>
