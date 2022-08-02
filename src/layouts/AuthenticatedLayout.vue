<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-teal">
      <q-toolbar>
        <q-icon name="psychology" size="sm" />
        <q-toolbar-title> SGCP </q-toolbar-title>
        <q-btn
          color="white"
          text-color="secondary"
          class="text-capitalize"
          icon="logout"
          @click="logOut()"
          label="Sair"
        />
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
import { useStore } from 'src/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AuthenticatedLayout',
  components: { Breadcrumb },
  setup() {
    const $store = useStore();
    const $router = useRouter();

    const logOut = () => {
      $store.dispatch('user/logOutUser').then(() => {
        $router.push('/');
      });
    };
    return { logOut };
  },
});
</script>
