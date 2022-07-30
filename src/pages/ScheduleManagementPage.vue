<template>
  <q-page padding>
    <EditableCollection />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EditableCollection from 'components/Schedule/EditableCollection.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'ScheduleManagementPage',
  components: { EditableCollection },
  setup() {
    const $store = useStore();

    const pathData = {
      paths: ['Início', 'Entrar', 'Horários'],
      icons: ['home', 'login', 'schedule'],
    };

    $store.commit('path/setPath', pathData);
  },
});
</script>
