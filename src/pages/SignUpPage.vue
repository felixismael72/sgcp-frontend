<template>
  <q-page padding>
    <SignUp class="fixed-center" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignUp from 'components/Authentication/SignUp.vue';
export default defineComponent({
  name: 'SignUpPage',
  components: { SignUp },
});
</script>
