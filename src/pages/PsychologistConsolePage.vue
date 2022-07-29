<template>
  <q-page padding>
    <Console />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Console from 'components/Psychologist/Console.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'PsychologistConsolePage',
  components: { Console },
  setup() {
    const $store = useStore();

    const pathData = {
      paths: ['Início', 'Entrar', 'Console'],
      icons: ['home', 'login', 'supervisor_account'],
    };

    $store.commit('path/setPath', pathData);
  },
});
</script>
