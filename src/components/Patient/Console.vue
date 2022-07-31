<template>
  <EditableCollection />
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn
      fab
      outline
      icon="add"
      color="secondary"
      label="Registrar consulta"
      @click="handleCreateDialog()"
    />
  </q-page-sticky>
  <CreateDialog :dialogState="isCreateOpen" @closeDialog="handleCreateDialog" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CreateDialog from 'components/Appointment/CreateDialog.vue';
import EditableCollection from 'components/Appointment/EditableCollection.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'ConsoleComponent',
  components: { CreateDialog, EditableCollection },
  setup() {
    const $store = useStore();

    const isCreateOpen = ref(false);

    $store.dispatch('schedule/fetchSchedules');

    const handleCreateDialog = () => {
      isCreateOpen.value = !isCreateOpen.value;
    };

    return {
      isCreateOpen,
      handleCreateDialog,
    };
  },
});
</script>
