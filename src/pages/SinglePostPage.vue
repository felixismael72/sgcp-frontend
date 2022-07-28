<template>
  <q-page padding>
    <SinglePost class="fixed-center" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SinglePost from 'components/Post/SinglePost.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'SinglePostPage',
  components: { SinglePost },
  setup() {
    const $store = useStore();

    const pathData = {
      paths: ['Início', 'Publicações', 'Publicação'],
      icons: ['home', 'library_books', 'feed'],
    };

    $store.commit('path/setPath', pathData);

    $store.dispatch('post/fetchPosts');
  },
});
</script>
