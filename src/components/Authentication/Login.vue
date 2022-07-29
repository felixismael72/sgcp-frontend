<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="logIn(email, password)"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="E-mail"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo é obrigatório',
        ]"
      />

      <q-input
        v-model="password"
        filled
        label="Senha"
        :type="isPwd ? 'password' : 'text'"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo é obrigatório',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div
        v-ripple
        class="relative-position container flex flex-center text-white"
      >
        <q-btn label="Entrar" type="submit" color="secondary" />
        <q-btn
          label="Limpar"
          type="reset"
          color="secondary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'LoginComponent',
  setup() {
    const $store = useStore();
    const $router = useRouter();

    const logIn = (email: string, password: string) => {
      const userInfo = {
        email: email,
        password: password,
      };

      $store.commit('user/setUserLogin', userInfo);
      $store.dispatch('user/logInUser').then(() => {
        if ($store.state.user.role == 'psychologist') {
          $router.push('/psychologist/console');
        }
      });
    };

    return {
      password: ref(''),
      isPwd: ref(true),
      email: ref(''),
      logIn,
    };
  },
});
</script>
