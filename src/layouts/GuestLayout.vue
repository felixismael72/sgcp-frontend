<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-teal">
      <q-toolbar class="row">
        <q-toolbar-title>Psicologar </q-toolbar-title>
        <q-tabs>
          <q-route-tab to="/your/route">
            <q-btn
              class="text-capitalize"
              color="secondary"
              text-color="white"
              label="Log In"
            />
          </q-route-tab>
          <q-route-tab to="/some/other/route">
            <q-btn
              class="text-capitalize"
              color="white"
              text-color="secondary"
              label="Sign Up"
            />
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'GuestLayout',

  setup() {
    return;
  },
});
</script>
