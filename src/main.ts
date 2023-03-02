import Vue, { defineComponent } from 'vue'

const count = 1
const App = defineComponent({
  render(h) {
    return h('div', count)
  }
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
