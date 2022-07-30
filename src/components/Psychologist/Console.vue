<template>
  <div class="q-gutter-lg">
    <q-card class="my-card" style="max-width: 960px">
      <q-card-section>
        <div class="text-secondary row">
          <q-icon name="feed" size="lg" class="on-left" />
          <div class="text-h5 q-mt-xs">Publicações</div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn flat color="teal" to="/psychologist/console/posts"
          >Gerenciar</q-btn
        >
        <q-btn flat color="teal" @click="handlePostCreate()">Criar</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card" style="max-width: 960px">
      <q-card-section>
        <div class="text-secondary row">
          <q-icon name="schedule" size="lg" class="on-left" />
          <div class="text-h5 q-mt-xs">Horários</div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn flat color="teal">Gerenciar</q-btn>
        <q-btn flat color="teal">Criar</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card" style="max-width: 960px">
      <q-card-section>
        <div class="text-secondary row">
          <q-icon name="assignment" size="lg" class="on-left" />
          <div class="text-h5 q-mt-xs">Consultas</div>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat color="teal">Gerenciar</q-btn>
      </q-card-actions>
    </q-card>
  </div>

  <CreatePostDialog
    :dialogState="isPostCreateOpen"
    @closeDialog="handlePostCreate"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CreatePostDialog from 'components/Post/CreateDialog.vue';
export default defineComponent({
  name: 'ConsoleComponent',
  components: { CreatePostDialog },
  setup() {
    const isPostCreateOpen = ref(false);
    const handlePostCreate = () => {
      isPostCreateOpen.value = !isPostCreateOpen.value;
    };

    return {
      isPostCreateOpen,
      handlePostCreate,
    };
  },
});
</script>
