<template>
  <q-breadcrumbs
    active-color="white"
    style="font-size: 16px"
    v-for="(path, index) in paths"
    :key="index"
  >
    <q-breadcrumbs-el :label="path" :icon="icons[index]" />
    <span class="q-mr-sm" v-if="index < paths.length - 1">/</span>
  </q-breadcrumbs>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'BreadcrumbComponent',
  setup() {
    const $store = useStore();

    const paths = computed({
      get: () => $store.state.path.paths,
      set: () => {
        return;
      },
    });

    const icons = computed({
      get: () => $store.state.path.icons,
      set: () => {
        return;
      },
    });

    return {
      paths,
      icons,
    };
  },
});
</script>
