<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-teal">
      <q-toolbar>
        <q-icon name="psychology" size="sm" />
        <q-toolbar-title> Psicologar </q-toolbar-title>
        <q-btn
          color="white"
          text-color="secondary"
          class="text-capitalize"
          icon="arrow_back"
          @click="goBack()"
          label="Voltar"
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
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ReturnLayout',
  components: { Breadcrumb },
  setup() {
    const $router = useRouter();

    const goBack = () => {
      $router.back();
    };

    return { goBack };
  },
});
</script>
