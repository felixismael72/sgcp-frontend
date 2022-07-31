<template>
  <div class="q-pa-md" style="max-width: 750px" v-if="posts.length > 0">
    <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        to="/posts/openedPost"
        v-for="(post, index) in posts"
        :key="post._id"
        v-on:click="openPost(post._id)"
      >
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            :color="index % 2 == 0 ? 'secondary' : 'white'"
            :text-color="index % 2 == 0 ? 'white' : 'secondary'"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular"
            >Título: {{ post.title }}</q-item-label
          >
          <q-item-label caption>Autor: {{ post.author }}</q-item-label>
          <q-item-label caption
            >Data de criação: {{ post.created_at }}</q-item-label
          >
        </q-item-section>

        <q-item-section>
          <q-item-label :lines="1">{{ post.body }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-md" v-if="posts <= 0">
    <q-banner class="bg-warning text-white">
      Não há publicações ainda. Em breve, você poderá lê-las!
      <template v-slot:action>
        <q-btn flat color="white" label="Voltar para o início" to="/" />
      </template>
    </q-banner>
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

    const openPost = (postID: string) => {
      $store.dispatch('post/fetchPostByID', postID);
    };

    return {
      posts,
      openPost,
    };
  },
});
</script>
