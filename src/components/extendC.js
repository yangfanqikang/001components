import Vue from "vue";

function create(Component, props) {
  //   const vm = new Vue({
  //     render(h) {
  //       return h(Component, { props });
  //     }
  //   }).$mount();
  let VueMessage = Vue.extend({
    render(h) {
      return h(Component, { props });
    }
  });
  let newMessage = new VueMessage();
  let vm = newMessage.$mount();
  document.body.appendChild(vm.$el);
  const comp = vm.$children[0];
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy;
  };

  return comp;
}

export default create;
