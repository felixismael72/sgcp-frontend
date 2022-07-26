<template>
  <q-page padding>
    <Carousel class="fixed-center" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carousel from 'components/Home/Carousel.vue';
export default defineComponent({
  name: 'HomePage',
  components: { Carousel },
});
</script>
