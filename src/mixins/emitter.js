function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    let name = child.$options.name;
    if (name == componentName) {
      // 当前子组件,用子组件作用域,apply第二参数必须是数组
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}

export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      //  将父级组件名称赋给name
      let name = parent.$options.name;
      //  如果父级组件存在 且 没有名字不存在或者找不到指定名字,则往上继续寻找,获取指定名字的父组件名称
      while (parent && (!name || name != componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    // 最终广播的方法
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
