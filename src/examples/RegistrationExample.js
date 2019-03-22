import Vue from 'vue';
import BasicComponent from './BasicComponent.vue';

// We can register components locally:
export default {
  components: {
    BasicComponent,
  },
};

// Or globally for everyone to use:
Vue.component('basic-component', BasicComponent);