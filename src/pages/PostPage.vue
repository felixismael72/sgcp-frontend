<template>
  <q-page padding>
    <Collection />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Collection from 'components/Post/Collection.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'PostPage',
  components: { Collection },
  setup() {
    const $store = useStore();

    const pathData = {
      paths: ['Início', 'Publicações'],
      icons: ['home', 'feed'],
    };

    $store.commit('path/setPath', pathData);
  },
});
</script>
