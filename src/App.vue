<template>
  <div id="app">
    <app-presenter v-on:progress="progress = $event">

      <app-slide>
        <img src="./assets/logo.png"/>
        <h1>Vue.js</h1>
        <h4>Introductionary course</h4>
        <a href="http://tobbentm.com/vue/en" style="width: 100%;">tobbentm.com/vue/en</a>
        <a href="https://github.com/tobbentm/vue_course">github.com/tobbentm/vue_course</a>
      </app-slide>

      <app-slide>
        <h1>Agenda:</h1>
        <ul>
          <li>What's Vue.js?</li>
          <li>Devtools</li>
          <li>Components</li>
          <li>Databinding</li>
          <li>Event handling</li>
          <li>Code-break! ❤</li>
          <li>Computed properties</li>
          <li>Watchers</li>
          <li>Custom inputs</li>
          <li>Filters</li>
          <li>Directives</li>
          <li>Lifecycle</li>
          <li>Gotchas &amp; pitfalls</li>
          <li>Routing &amp; state</li>
        </ul>
      </app-slide>

      <app-slide>
        <h1>Who am I?</h1>
        <img src="http://tobbentm.com/ul/pl05.jpg" style="border-radius: 50%; overflow: hidden; max-width: 256px;" />
        <h4>Tobias Lønnerød Madsen</h4>
        <p>Fullstack developer .Net</p><br/>
        <a href="https://github.com/TobbenTM">github.com/TobbenTM</a>
      </app-slide>

      <app-slide>
        <h1>What's Vue.js?</h1>
        <div class="half">
          <ul>
            <li>Easy to learn
              <ul><li>Only using html/css/js</li></ul>
            </li>
            <li>Flexible
              <ul>
                <li>Can be use in small apps to replace jQuery</li>
                <li>Or in big Single Page Applications!</li>
              </ul>
            </li>
            <li>Fast
              <ul>
                <li>20 KB .js bundle</li>
                <li>Consistently as fast or faster than React &amp; Angular in benchmarks</li>
              </ul>
            </li>
            <li>Straight forward documentation</li>
            <li>Opinionated</li>
          </ul>
        </div>
        <img src="./assets/fe_stats.png" class="half"/>
      </app-slide>
      
      <app-slide>
        <h1>Devtools</h1>
        <ul>
          <li>Great extensions made for <a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd">Chrome</a> and <a href="https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/">Firefox</a></li>
          <li>Fast prototyping with @vue/cli</li>
        </ul>
        <code-block
          :code="
`npm install -g @vue/cli
vue create vue-project`"
          lang="text/x-sh"
        />
      </app-slide>

      <app-slide>
        <h1>Components</h1>
        <code-block
          :code="examples.BasicComponentExample"
          lang="text/x-vue"
        />
        <p>Component.vue</p>
      </app-slide>

      <app-slide>
        <h1>Components</h1>
        <h2 class="subtitle">How to register for usage?</h2>
        <code-block
          :code="examples.RegistrationExample"
          lang="text/javascript"
          class="half"
        />
        <div class="half">
          <h4>Works for:</h4>
          <ul>
            <li>Components</li>
            <li>Filters</li>
            <li>Plugins</li>
            <li>Direktiver</li>
          </ul>
        </div>
      </app-slide>

      <app-slide>
        <h1>Databinding</h1>
        <div class="half">
          <code-block
            :code="examples.BindingComponentExample"
            lang="text/x-vue"
          />
          <p>BindingComponent.vue</p>
        </div>
        <binding-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Databinding for attributtes</h1>
        <div class="half">
          <code-block
            :code="examples.AttrBindingComponentExample"
            lang="text/x-vue"
          />
          <p>AttrBindingComponent.vue</p>
        </div>
        <attr-binding-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Databinding with evaluation</h1>
        <div class="half">
          <code-block
            :code="examples.InputComponentExample"
            lang="text/x-vue"
          />
          <p>InputComponent.vue</p>
        </div>
        <input-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Event handling</h1>
        <div class="half">
          <code-block
            :code="examples.EventComponentExample"
            lang="text/x-vue"
          />
          <p>EventComponent.vue</p>
        </div>
        <event-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>The Vue object</h1>
        <code-block
          :code="
`export default {
  name: 'ComponentName',
  props: {}, // properties
  data() {}, // reactive data
  computed: {}, // computed data
  components: {}, // other components used
  watch: {}, // observe reactive data
  methods: {}, // methods
  
  // lifecycle handlers
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  errorCaptured() {},
};`"
          lang="text/javascript"
        />
      </app-slide>

      <app-slide>
        <h1>Let's code!</h1>
        <h2 class="subtitle">This are our goals:</h2>
        <ul>
          <li>Run our own Vue CLI project (npm run serve)</li>
          <li>Create our own component!
            <ul>
              <li>With a input field</li>
              <li>And something to show the users input</li>
            </ul>
          </li>
          <li>Add the component to App.vue</li>
        </ul>
        <code-block
          :code="
`npm install -g @vue/cli
vue create vue-project`"
          lang="text/x-sh"
        />
      </app-slide>

      <app-slide>
        <h1>Conditional Rendering</h1>
        <div class="half">
          <code-block
            :code="examples.ConditionalComponentExample"
            lang="text/x-vue"
            :template-only="true"
          />
          <p>ConditionalComponent.vue</p>
        </div>
        <conditional-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>List Rendering</h1>
        <div class="half">
          <code-block
            :code="examples.ListComponentExample"
            lang="text/x-vue"
          />
          <p>ListComponent.vue</p>
        </div>
        <list-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Computed properties</h1>
        <div class="half">
          <ul>
            <li>Will be updated if any source is updated</li>
            <li>Cached based on dependencies</li>
            <li>Great for hooking up to a global state</li>
            <li>Works as normal properties in the component</li>
          </ul>
          <computed-component/>
        </div>
          <code-block
            class="half"
            :code="examples.ComputedComponentExample"
            lang="text/x-vue"
          />
      </app-slide>

      <app-slide>
        <h1>Watchers</h1>
        <div class="half">
          <code-block
            :code="examples.WatcherComponentExample"
            lang="text/javascript"
            :script-only="true"
          />
          <p>WatcherComponent.vue</p>
        </div>
        <div class="half">
          <ul>
            <li>Used for reacting to changes on properties</li>
            <li>(Usually better to use computed properties)</li>
          </ul>
          <watcher-component/>
        </div>
      </app-slide>

      <app-slide>
        <h1>Custom inputs</h1>
        <div class="half">
          <ul>
            <li>Some times we want custom inputs</li>
            <li>We can exploit two-way binding with v-model</li>
            <li>(should not be overdone)</li>
          </ul>
          <v-model-usage-component/>
          <code-block
            :code="examples.VModelUsageExample"
            lang="text/x-vue"
            :script-only="true"
          />
        </div>
        <div class="half">
          <code-block
            :code="examples.VModelComponentExample"
            lang="text/javascript"
            :script-only="true"
          />
          <p>VModelComponent.vue</p>
        </div>
      </app-slide>

      <app-slide>
        <h1>Filters</h1>
        <div class="half">
          <code-block
            :code="examples.FilterComponentExample"
            lang="text/x-vue"
          />
          <p>FilterComponent.vue</p>
        </div>
        <div class="half">
          <ul>
            <li>Use for easily transforming text</li>
            <li>In a reusable way</li>
          </ul>
          <filter-component/>
        </div>
      </app-slide>

      <app-slide>
        <h1>Directives</h1>
        <div class="half">
          <ul>
            <li>To make element-level changes easy</li>
            <li>In a reusable way</li>
            <li>Can register hooks for:
              <ul>
                <li>bind</li>
                <li>inserted</li>
                <li>update</li>
                <li>componentUpdated</li>
                <li>unbind</li>
              </ul>
            </li>
          </ul>
          <directive-component/>
        </div>
        <div class="half">
          <code-block
            :code="examples.DirectiveComponentExample"
            lang="text/x-vue"
          />
          <p>DirectiveComponent.vue</p>
        </div>
      </app-slide>

      <app-slide>
        <h1>The Vue object</h1>
        <code-block
          :code="
`export default {
  name: 'ComponentName', // ✔️
  props: {}, // properties ✔️
  data() {}, // reactive data ✔️
  computed: {}, // computed data ✔️
  components: {}, // other components used ✔️
  watch: {}, // observe reactive data ✔️
  methods: {}, // methods ✔️
  
  // lifecycle handlers
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  errorCaptured() {},
};`"
          lang="text/javascript"
        />
      </app-slide>

      <app-slide>
        <h1>Lifecycle</h1>
        <h2 class="subtitle">How do we react to component state?</h2>
      </app-slide>

      <app-slide>
        <!-- <h1>Lifecycle</h1> -->
        <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" style="display: contents;" target="_blank">
          <vertical-image src="static/lifecycle.png"/>
        </a>
      </app-slide>

      <app-slide>
        <h1>Lifecycle</h1>
        <h2 class="subtitle">Practical example</h2>
        <ul class="half">
          <li>Can be used for loading data whenever shown</li>
          <li>Can be used for cleaning up resources when no longer needed</li>
        </ul>
        <lifecycle-component/>
      </app-slide>

      <app-slide>
        <h1>Reactivity</h1>
        <h2 class="subtitle">Gotchas</h2>
        <div class="half">
          <code-block
            :code="examples.ReactivityGotchaComponentExample"
            lang="text/javascript"
            :script-only="true"
          />
          <p>ReactivityGotchaComponent.vue</p>
        </div>
        <reactivity-gotcha-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Routing &amp; state</h1>
        <h2 class="subtitle">For bigger applikations</h2>
        <code-block
          :code="
`vue add router
vue add vuex`"
          lang="text/x-sh"
        />
      </app-slide>

      <app-slide>
        <h1>State with Vuex</h1>
        <a href="https://vuex.vuejs.org/" target="_blank"><img src="./assets/vuex_flow.png" /></a>
      </app-slide>

      <app-slide>
        <h1>State with Vuex</h1>
        <a href="https://vuex.vuejs.org/" target="_blank"><img src="./assets/vuex.png" /></a>
      </app-slide>

      <app-slide>
        <h1>State with Vuex</h1>
        <code-block
          :code="examples.StoreExample"
          lang="text/javascript"
        />
        <p>store.js</p>
      </app-slide>

      <app-slide>
        <h1>State with Vuex</h1>
        <div class="half">
          <code-block
            :code="examples.StoreExample"
            lang="text/javascript"
          />
          <p>store.js</p>
        </div>
        <div class="half">
          <code-block
            :code="examples.VuexComponentExample"
            lang="text/x-vue"
          />
          <p>VuexComponent.vue</p>
        </div>
      </app-slide>

      <app-slide>
        <img src="./assets/power_of_sharing.png" />
      </app-slide>

    </app-presenter>
    <app-progress :progress="progress"/>
  </div>
</template>

<script>
import Vue from 'vue';
import AppPresenter from './presenter';
import AppProgress from './components/AppProgress';
import AppSlide from './components/AppSlide';
import CodeBlock from './components/CodeBlock';
import VerticalImage from './components/VerticalImage';

import BasicComponentExample from '!!raw-loader!./examples/BasicComponent.vue';
import BindingComponent from './examples/BindingComponent';
import BindingComponentExample from '!!raw-loader!./examples/BindingComponent.vue';
import AttrBindingComponent from './examples/AttrBindingComponent';
import AttrBindingComponentExample from '!!raw-loader!./examples/AttrBindingComponent.vue';
import InputComponent from './examples/InputComponent';
import InputComponentExample from '!!raw-loader!./examples/InputComponent.vue';
import EventComponent from './examples/EventComponent';
import EventComponentExample from '!!raw-loader!./examples/EventComponent.vue';
import ConditionalComponent from './examples/ConditionalComponent';
import ConditionalComponentExample from '!!raw-loader!./examples/ConditionalComponent.vue';
import ListComponent from './examples/ListComponent';
import ListComponentExample from '!!raw-loader!./examples/ListComponent.vue';
import ComputedComponent from './examples/ComputedComponent';
import ComputedComponentExample from '!!raw-loader!./examples/ComputedComponent.vue';
import LifecycleComponent from './examples/LifecycleComponent';
import WatcherComponent from './examples/WatcherComponent';
import WatcherComponentExample from '!!raw-loader!./examples/WatcherComponent.vue';
import StoreExample from '!!raw-loader!./examples/store.js';
import VuexComponentExample from '!!raw-loader!./examples/VuexComponent.vue';
import ReactivityGotchaComponent from './examples/ReactivityGotchaComponent';
import ReactivityGotchaComponentExample from '!!raw-loader!./examples/ReactivityGotchaComponent.vue';
import FilterComponent from './examples/FilterComponent';
import FilterComponentExample from '!!raw-loader!./examples/FilterComponent.vue';
import RegistrationExample from '!!raw-loader!./examples/RegistrationExample.js';
import VModelUsageComponent from './examples/VModelUsageComponent';
import VModelComponentExample from '!!raw-loader!./examples/VModelComponent.vue';
import DirectiveComponent from './examples/DirectiveComponent';
import DirectiveComponentExample from '!!raw-loader!./examples/DirectiveComponent.vue';

Vue.component('app-presenter', AppPresenter);

export default {
  name: 'app',
  components: {
    AppSlide,
    AppProgress,
    CodeBlock,
    VerticalImage,
    BindingComponent,
    InputComponent,
    AttrBindingComponent,
    EventComponent,
    ConditionalComponent,
    ListComponent,
    ComputedComponent,
    LifecycleComponent,
    WatcherComponent,
    ReactivityGotchaComponent,
    FilterComponent,
    VModelUsageComponent,
    DirectiveComponent,
  },
  data() {
    return {
      progress: 0,
      examples: {
        BasicComponentExample,
        BindingComponentExample,
        InputComponentExample,
        AttrBindingComponentExample,
        EventComponentExample,
        ConditionalComponentExample,
        ListComponentExample,
        ComputedComponentExample,
        WatcherComponentExample,
        StoreExample,
        VuexComponentExample,
        ReactivityGotchaComponentExample,
        FilterComponentExample,
        RegistrationExample,
        VModelComponentExample,
        VModelUsageExample: '<address-input v-model="address"/>',
        DirectiveComponentExample,
      }
    };
  },
};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-size: 1.5em;
}

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: all .5s ease-in-out;
}

.slide-left-enter, .slide-left-leave-to,
.slide-right-enter, .slide-right-leave-to {
  opacity: 0;
}

.slide-left-enter, .slide-right-leave-to {
  transform: translateX(-75px);
}

.slide-right-enter, .slide-left-leave-to {
  transform: translateX(75px);
}
</style>
