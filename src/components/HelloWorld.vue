<template>
  <div class="hello">
    <z-form :model="model" :rules="rules">
      <ZFormItem label="用户名" prop="username">
        <ZInput
          v-model="model.username"
          type="text"
          placeholder="请输入用户名"
        ></ZInput>
      </ZFormItem>
      <ZFormItem label="密码" prop="password">
        <ZInput
          v-model="model.password"
          type="password"
          placeholder="请输入密码"
        ></ZInput>
      </ZFormItem>
      <ZFormItem>
        <button @click="login">登录</button>
      </ZFormItem>
    </z-form>
  </div>
</template>

<script>
import ZForm from "@/components/ZForm.vue";
import ZFormItem from "@/components/ZFormItem.vue";
import ZInput from "@/components/ZInput.vue";
export default {
  name: "HelloWorld",
  components: {
    ZForm,
    ZFormItem,
    ZInput
  },
  props: {
    msg: String
  },
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入活动名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    login() {
      
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
