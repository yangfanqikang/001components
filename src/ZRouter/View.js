export default {
  render(h) {
    let com = null;
    // 拿到当前的路由
    console.log(this.$router);
    // 已经是路由对象了
    const route = this.$router.routeMap[this.$router.current];
    console.log(route);
    if (route) {
      com = route.component;
    }
    return h(com);
  }
};
