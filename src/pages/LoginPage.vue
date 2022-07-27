<template>
  <q-page padding> <Login class="fixed-center" /></q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from 'src/components/Authentication/Login.vue';
import { useStore } from 'src/store';
export default defineComponent({
  name: 'LoginPage',
  components: { Login },
  setup() {
    const $store = useStore();

    const pathData = {
      paths: ['Início', 'Entrar'],
      icons: ['home', 'login'],
    };

    $store.commit('path/setPath', pathData);
  },
});
</script>
