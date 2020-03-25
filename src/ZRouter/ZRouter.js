import RouterLink from "./Link";
import RouterView from "./View";
class ZRouter {
  // 构造函数
  constructor(options) {
    this.$options = options;
    // 定义当前路由
    Vue.util.defineReactive(this, "current", "/");
    // 监听hashChange
    window.addEventListener("hashchange", this.onHashChange.bind(this));
    window.addEventListener("load", this.onHashChange.bind(this));
    this.routeMap = {};
    this.$options.routes.forEach(route => {
      this.routeMap[route.path] = route;
    });
  }
  onHashChange() {
    console.log(window.location.hash);
    this.current = window.location.hash.slice(1);
  }
}
let Vue;
ZRouter.install = function(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    }
  });
  Vue.component("RouterLink", RouterLink);
  Vue.component("RouterView", RouterView);
};

export default ZRouter;
