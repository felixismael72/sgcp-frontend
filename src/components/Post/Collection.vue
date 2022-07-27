<template>
  <div class="q-pa-md" style="max-width: 750px">
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="(post, index) in posts" :key="post._id">
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            :color="index % 2 == 0 ? 'secondary' : 'white'"
            :text-color="index % 2 == 0 ? 'white' : 'secondary'"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular">{{
            post.title
          }}</q-item-label>
          <q-item-label caption>{{ post.author }}</q-item-label>
          <q-item-label caption>{{ post.created_at }}</q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label :lines="1">{{ post.body }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'CollectionComponent',
  setup() {
    const $store = useStore();

    const posts = computed({
      get: () => $store.state.post.posts,
      set: () => {
        return;
      },
    });

    return {
      posts,
    };
  },
});
</script>
