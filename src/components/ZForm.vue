<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZForm",
  provide() {
    return {
      form: this // 将组件实例作为提供者，⼦代组件可⽅便获取
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      console.log("form");

      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style lang="scss" scoped></style>
