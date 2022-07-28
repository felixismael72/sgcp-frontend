<template>
  <q-page padding>
    <Console />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Console from 'components/Psychologist/Console.vue';
export default defineComponent({
  name: 'PsychologistConsolePage',
  components: { Console },
});
</script>
