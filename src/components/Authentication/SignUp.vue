<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Nome"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo é obrigatório',
        ]"
      />

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

      <q-input
        v-model="passwordConfirm"
        filled
        label="Confirmar Senha"
        :type="isPwdConfirm ? 'password' : 'text'"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo é obrigatório',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwdConfirm ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwdConfirm = !isPwdConfirm"
          />
        </template>
      </q-input>

      <div>
        <q-btn label="Cadastrar" type="submit" color="secondary" />
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
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'SignUpComponent',
  setup() {
    return {
      password: ref(''),
      isPwd: ref(true),
      email: ref(''),
      name: ref(''),
      passwordConfirm: ref(''),
      isPwdConfirm: ref(true),
    };
  },
});
</script>
