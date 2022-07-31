<template>
  <div class="q-pa-md" style="max-width: 750px" v-if="posts.length > 0">
    <q-list bordered separator>
      <q-item v-for="(post, index) in posts" :key="post._id">
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            round
            :color="index % 2 == 0 ? 'secondary' : 'white'"
            :text-color="index % 2 == 0 ? 'white' : 'secondary'"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular">{{
            post.title
          }}</q-item-label>
          <q-item-label caption>Autor: {{ post.author }}</q-item-label>
          <q-item-label caption>Data:{{ post.created_at }}</q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label :lines="1">{{ post.body }}</q-item-label>
        </q-item-section>

        <q-item-section>
          <q-btn
            rounded
            icon="edit"
            @click="handlePostEdit(post._id)"
            color="yellow"
            outline
            size="md"
            style="max-width: 7rem"
          />
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            icon="delete"
            @click="handlePostRemoval(post._id)"
            color="red"
            outline
            size="md"
            style="max-width: 7rem"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-md" v-if="posts.length <= 0">
    <q-banner class="bg-warning text-white">
      Não há publicações ainda. Cadastre alguma para gerenciá-la!
      <template v-slot:action>
        <q-btn flat color="white" label="Voltar" to="/psychologist/console" />
      </template>
    </q-banner>
  </div>
  <EditDialog :dialogState="isEditPostOpen" @closeDialog="handlePostEdit" />
  <RemoveDialog
    :dialogState="isRemovePostOpen"
    :store="'post'"
    :removeAction="'removePost'"
    :removeMessage="'Tem certeza de que deseja apagar esta publicação.'"
    @closeDialog="handlePostRemoval"
  />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'src/store';
import EditDialog from 'components/Post/EditDialog.vue';
import RemoveDialog from 'components/Global/RemoveDialog.vue';
export default defineComponent({
  name: 'CollectionComponent',
  components: { EditDialog, RemoveDialog },
  setup() {
    const $store = useStore();

    const posts = computed({
      get: () => $store.state.post.posts,
      set: () => {
        return;
      },
    });

    $store.dispatch('post/fetchPosts');

    const openPost = (postID: string) => {
      $store.dispatch('post/fetchPostByID', postID);
    };

    const isEditPostOpen = ref(false);
    const isRemovePostOpen = ref(false);

    const handlePostEdit = (postID: string) => {
      openPost(postID);
      isEditPostOpen.value = !isEditPostOpen.value;
    };

    const handlePostRemoval = (postID: string) => {
      openPost(postID);
      isRemovePostOpen.value = !isRemovePostOpen.value;
    };

    return {
      posts,
      openPost,
      isEditPostOpen,
      handlePostEdit,
      isRemovePostOpen,
      handlePostRemoval,
    };
  },
});
</script>
