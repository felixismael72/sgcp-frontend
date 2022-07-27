<template>
  <q-page padding>
    <Carousel class="fixed-center" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carousel from 'components/Home/Carousel.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'HomePage',
  components: { Carousel },
  setup() {
    const $store = useStore();

    const pathData = {
      paths: ['Início'],
      icons: ['home'],
    };

    $store.commit('path/setPath', pathData);
  },
});
</script>
