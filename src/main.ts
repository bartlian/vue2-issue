import Vue, { defineComponent } from 'vue'

const count = 1
const App = defineComponent({
  render(h) {
    // type VNodeChildren should support number type like vue3.x
    return h('div', count)
  }
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
