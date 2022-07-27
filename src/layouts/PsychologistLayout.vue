<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-teal">
      <q-toolbar>
        <q-icon name="psychologist" />
        <q-toolbar-title> Psicologar </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // name: 'LayoutName',

  setup() {
    const leftDrawer = ref(false);
    return { leftDrawer };
  },
});
</script>
