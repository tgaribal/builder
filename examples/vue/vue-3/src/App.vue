<script lang="ts">
import { RenderContent, getContent, isPreviewing } from '@builder.io/sdk-vue';
import { Builder } from '@builder.io/sdk';
import '@builder.io/sdk-vue/vue3/css';

import HelloWorldComponent from './components/HelloWorld.vue';
import LargeBodyText from './components/LargeBodyText.vue';
import WrapFragment, { WrapFragmentRegistration } from './components/WrapFragment.vue';

Builder.register('insertMenu', {
  name: 'Typography Components',
  items: [
    {name: 'Hello World'},
    {name: 'WrapFragment'},
    {name: 'LargeBodyText'},
    {name: 'LargeBodyText'},
    {name: 'LargeBodyText'}
  ]
})

// Register your Builder components
const REGISTERED_COMPONENTS = [
  {
    component: HelloWorldComponent,
    name: 'Hello World',
    canHaveChildren: true,
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'World',
      },
    ],
  },
  WrapFragmentRegistration,
  {
    component: LargeBodyText,
    name: 'Large Body Text',
    canHaveChildren: true,
    // defaultChildren: [
    //   {
    //     '@type': '@builder.io/sdk:Element',
    //     component: { name: 'Text', options: { text: 'Large Body text here' } },
    //   },
    // ],
    inputs: [
      {
        name: 'underline',
        type: 'text',
        defaultValue: 'false',
      },
    ],
    // defaultStyles: {
    //   marginTop: '0px',
    // },
  }
];

// TODO: enter your public API key
const BUILDER_PUBLIC_API_KEY = '271bdcf584e24ca896dede7a91dfb1cb'; // ggignore
// const BUILDER_PUBLIC_API_KEY = 'effc3d0f04d349b0a5da8c78825f92a5'; // ggignore

const user = {name: 'tim'}

export default {
  name: 'DynamicallyRenderBuilderPage',
  components: {
    'builder-render-content': RenderContent
  },
  data: () => ({
    canShowContent: false,
    content: null,
    apiKey: BUILDER_PUBLIC_API_KEY,
    user: user
  }),
  methods: {
    getRegisteredComponents() {
      return REGISTERED_COMPONENTS;
    },
    func() {
      console.log('hi!')
    }
  },
  mounted() {
    getContent({
      model: 'page',
      apiKey: BUILDER_PUBLIC_API_KEY,
      userAttributes: {
        urlPath: window.location.pathname,
        loggedIn: true
      },
    }).then(res => {
      console.log('hello', res)
      this.content = res;
      this.canShowContent = this.content || isPreviewing();
    });
  },
};
</script>

<template>
<div>
  <div>
    <div>Hello world from your Vue 3 project. Below is Builder Content:</div>
    <div v-if="canShowContent">
      <builder-render-content
        model="page"
        :content="content"
        :api-key="apiKey"
        :customComponents="getRegisteredComponents()"
        :data="user"
        :context="func"
      />
    </div>
    <div v-else>Content not Found</div>
  </div>
  </div>
</template>

<style>
#app {
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
