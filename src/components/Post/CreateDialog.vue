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
            <q-btn
              outline
              color="secondary"
              class="text-capitalize"
              size="md"
              label="Limpar"
              @click="clearPost()"
            />
          </q-card-actions>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'CreateDialogComponent',
  props: ['dialogState'],
  emits: ['closeDialog'],
  setup(props) {
    const $store = useStore();

    const open = computed(() => {
      return props.dialogState;
    });

    const title = ref('');
    const body = ref('');
    const author = ref('');

    const savePost = () => {
      $store.dispatch('post/createPost', {
        title: title.value,
        body: body.value,
        author: author.value,
      });
    };

    const clearPost = () => {
      title.value = '';
      body.value = '';
      author.value = '';
    };

    return {
      open,
      title,
      body,
      author,
      savePost,
      clearPost,
    };
  },
});
</script>
