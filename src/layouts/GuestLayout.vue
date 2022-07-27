<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-teal">
      <q-toolbar>
        <q-icon name="psychology" size="sm" />
        <q-toolbar-title> Psicologar </q-toolbar-title>
        <q-tabs>
          <q-route-tab to="/auth/login">
            <q-btn
              class="text-capitalize"
              color="secondary"
              text-color="white"
              label="Entrar"
            />
          </q-route-tab>
          <q-route-tab to="auth/signUp">
            <q-btn
              class="text-capitalize"
              color="white"
              text-color="secondary"
              label="Cadastrar"
            />
          </q-route-tab>
        </q-tabs>
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
import { defineComponent } from 'vue';
import Breadcrumb from 'components/Global/Breadcrumb.vue';

export default defineComponent({
  name: 'GuestLayout',
  components: { Breadcrumb },
  setup() {
    return;
  },
});
</script>
