<template>
  <q-page padding>
    <Collection />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Collection from 'components/Post/Collection.vue';
export default defineComponent({
  name: 'PostPage',
  components: { Collection },
});
</script>
