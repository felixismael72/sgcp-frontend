<template>
  <q-page padding>
    <EditableCollection />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EditableCollection from 'components/Post/EditableCollection.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'PostManagementPage',
  components: { EditableCollection },
  setup() {
    const $store = useStore();

    const pathData = {
      paths: ['Início', 'Entrar', 'Console', 'Publicações'],
      icons: ['home', 'login', 'supervisor_account', 'library_books'],
    };

    $store.commit('path/setPath', pathData);
  },
});
</script>
