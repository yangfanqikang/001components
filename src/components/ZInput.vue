<template>
  <div>
    <input :value="value" v-bind="$attrs" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "ZInput",
  inject: ["form"],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      type: ""
    };
  },
  mounted() {
    // if (this.form.rules[this.$parent.prop]) {
    //   this.type = this.form.rules[this.$parent.prop][0].trigger;
    //   console.log(this.type);
    // }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    }
    // onBlur(e) {
    //   this.$emit("input", e.target.value);
    //   if (this.type == "blur") {
    //     console.log("blur");

    //     this.$parent.$emit("validate");
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped></style>
