<template>
  <div>
    <div class="text-h2">{{ openedPost.title }}</div>
    <div class="text-subtitle q-mt-md">{{ openedPost.author }}</div>
    <div class="q-mt-md">{{ openedPost.body }}</div>
    <div class="q-mt-md">{{ openedPost.created_at }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'SinglePostComponent',
  setup() {
    const $store = useStore();

    const openedPost = computed({
      get: () => $store.state.post.openedPost,
      set: () => {
        return;
      },
    });

    return {
      openedPost,
    };
  },
});
</script>
