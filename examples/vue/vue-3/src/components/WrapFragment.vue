<script lang="ts">
import { defineComponent } from 'vue';



const WrapFragment = defineComponent({});

export const WrapFragmentRegistration: any = {
  component: WrapFragment,
  canHaveChildren: true,
  name: 'WrapFragment',
  noWrap: true,
};

export default WrapFragment;
</script>

<template>
  <div class="fragment-wrapper">
    <slot />
  </div>
</template>