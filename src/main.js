import { createApp } from 'vue';
import './public-path';
import App from './App.vue';
import route from './router';

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = route;

  instance = createApp(App)
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
