<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "ZFormItem",
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      console.log(">>>>>>>>>>>>");
      //   规则  { required: true, message: "请输入活动名称", trigger: "blur" }
      // 获取对应FormItem校验规则
      const rules = this.form.rules[this.prop];
      console.log(rules);

      // 获取校验值
      const value = this.form.model[this.prop];
      // 校验描述对象
      const descriptor = { [this.prop]: rules };
      // 创建校验器
      const schema = new Schema(descriptor);

      return new Promise((resolve, reject) => {
        console.log(value);

        schema.validate({ [this.prop]: value }, errors => {
          console.log(errors);

          if (errors) {
            this.error = errors[0].message;
            reject();
          } else {
            console.log(89);
            this.error = "";
            resolve();
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
