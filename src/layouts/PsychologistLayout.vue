<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-teal">
      <q-toolbar>
        <q-icon name="psychologist" />
        <q-toolbar-title> Psicologar </q-toolbar-title>
      </q-toolbar>

      <q-toolbar inset>
        <Breadcrumb />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Breadcrumb from 'components/Global/Breadcrumb.vue';

export default defineComponent({
  name: 'PsychologistLayout',
  components: { Breadcrumb },
  setup() {
    const leftDrawer = ref(false);
    return { leftDrawer };
  },
});
</script>
