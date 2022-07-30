<template>
  <q-dialog
    v-model="open"
    :maximized="true"
    persistent
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-secondary text-white" style="min-width: 350px">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" @click="$emit('closeDialog')">
          <q-tooltip class="bg-white text-secondary">Fechar</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">Criação de publicação</div>
      </q-card-section>

      <q-card-section>
        <q-card bordered>
          <q-separator inset />
          <q-card-section class="q-gutter-y-md">
            <q-input
              outlined
              dense
              color="primary"
              bg-color="white"
              lazy-rules
              :rules="[(val) => !!val || 'Este campo não pode estar vazio.']"
              v-model="title"
              inverted-light
              label="Título"
            />
            <q-input
              outlined
              v-model="body"
              label="Conteúdo"
              type="text-area"
              autogrow
            >
            </q-input>
            <q-input
              outlined
              dense
              color="primary"
              bg-color="white"
              lazy-rules
              :rules="[(val) => !!val || 'Este campo não pode estar vazio.']"
              v-model="author"
              inverted-light
              label="Autor"
            />
          </q-card-section>

          <q-card-actions align="right" class="on-left">
            <q-btn
              color="secondary"
              class="text-capitalize"
              size="md"
              label="Salvar"
              @click="$emit('closeDialog'), savePost()"
            />
          </q-card-actions>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'EditDialogComponent',
  props: ['dialogState'],
  emits: ['closeDialog'],
  setup(props) {
    const $store = useStore();

    const open = computed(() => {
      return props.dialogState;
    });

    const title = computed({
      get: () => $store.state.post.openedPost.title,
      set: (newTitle) => {
        $store.commit('post/setPostTitle', newTitle);
      },
    });

    const body = computed({
      get: () => $store.state.post.openedPost.body,
      set: (newBody) => {
        $store.commit('post/setPostBody', newBody);
      },
    });

    const author = computed({
      get: () => $store.state.post.openedPost.author,
      set: (newAuthor) => {
        $store.commit('post/setPostAuthor', newAuthor);
      },
    });

    const savePost = () => {
      $store.dispatch('post/updatePost', {
        title: title.value,
        body: body.value,
        author: author.value,
      });
    };

    return {
      open,
      title,
      body,
      author,
      savePost,
    };
  },
});
</script>
