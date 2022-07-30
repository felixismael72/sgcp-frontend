<template>
  <q-page padding>
    <Console />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Console from 'components/Patient/Console.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'PatientConsolePage',
  components: { Console },
  setup() {
    const $store = useStore();

    const pathData = {
      paths: ['Início', 'Entrar', 'Console'],
      icons: ['home', 'login', 'person'],
    };

    $store.commit('path/setPath', pathData);
  },
});
</script>
