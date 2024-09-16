<template>
  <div id="home">
    <div>Hello world from your Vue project. Below is Builder Content:</div>

    <div v-if="topContent || (isPreviewing() && topContent?.data?.targetSection=='top')">
      <div>
        page title:
        {{ topContent?.id || 'Unpublished' }}
      </div>
      <Content
        model="section-example"
        :key="topContent?.id"
        :content="topContent"
        :api-key="BUILDER_PUBLIC_API_KEY"
        :customComponents="REGISTERED_COMPONENTS"
      />
      </div>
    <div v-else>Content not Found</div>
    
    <div> THIS IS OTHER CONTENT THAT WE CONTROL IN CODE</div>
    <div v-if="bottomContent || isPreviewing()">
      <div>
        page title:
        {{ bottomContent?.id || 'Unpublished' }}
      </div>
      <Content
        model="section-example"
        :key="bottmContent?.id"
        :content="bottomContent"
        :api-key="BUILDER_PUBLIC_API_KEY"
        :customComponents="REGISTERED_COMPONENTS"
      />
    </div>
    <div v-else>Content not Found</div>

  </div>
</template>

<script setup>
import { Content, fetchOneEntry, isPreviewing, fetchEntries, getBuilderSearchParams } from '@builder.io/sdk-vue';

import HelloWorldComponent from '../components/HelloWorld.vue';

// Register your Builder components
const REGISTERED_COMPONENTS = [
  {
    component: HelloWorldComponent,
    name: 'MyFunComponent',
    canHaveChildren: true,
    inputs: [
      {
        name: 'textbox',
        type: 'object',
        // defaultValue: 'World',
        subFields: [
          {
            name: "something",
            type: "text"
          }
        ]
      },
    ],
  },
];

// TODO: enter your public API key
// const BUILDER_PUBLIC_API_KEY = 'f1a790f8c3204b3b8c5c1795aeac4660'; // ggignore
 const BUILDER_PUBLIC_API_KEY = '50b344f9116e4820a020e382058146e0'; //ggignore

const route = useRoute();

// fetch builder content data
const { data: topContent } = await useAsyncData('builderTopData', () =>
  fetchOneEntry({
    model: 'section-example',
    apiKey: BUILDER_PUBLIC_API_KEY,
    userAttributes: {
      // category: categoryCode,
      position: "top"
    },
    // query: {
    //   data: {
    //     targetSection: "top"
    //   }
    // }
    // options: getBuilderSearchParams(new URL(location.href).searchParams),
  })
);

const { data: bottomContent } = await useAsyncData('builderBottomData', () =>
  fetchOneEntry({
    model: 'section-example',
    apiKey: BUILDER_PUBLIC_API_KEY,
    // options: getBuilderSearchParams(new URL(location.href).searchParams),
    userAttributes: {
      // category: categoryCode,
      position: "bottom"
    },
    // query: {
    //   data: {
    //     targetSection: "bottom"
    //   }
    // }
  })
);
</script>
