<template>
  <q-page padding> <Login class="fixed-center" /></q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from 'src/components/Authentication/Login.vue';
export default defineComponent({
  name: 'LoginPage',
  components: { Login },
});
</script>
