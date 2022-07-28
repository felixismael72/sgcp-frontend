<template>
  <q-page padding>
    <SinglePost class="fixed-center" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SinglePost from 'components/Post/SinglePost.vue';
export default defineComponent({
  name: 'SinglePostPage',
  components: { SinglePost },
});
</script>
