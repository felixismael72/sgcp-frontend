<template>
  <div class="q-pa-md" style="max-width: 750px">
    <q-list bordered separator>
      <q-item>
        <q-item-section avatar>
          <q-avatar
            icon="assignment"
            round
            :color="'secondary'"
            :text-color="'white'"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label> 12/05/2023 às 14:35 </q-item-label>
          <q-item-label caption>Criador: Nelson</q-item-label>
        </q-item-section>

        <q-item-section>
          <q-btn
            rounded
            icon="edit"
            color="yellow"
            outline
            size="md"
            style="max-width: 8rem"
            >Editar</q-btn
          >
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            icon="cancel"
            color="red"
            outline
            size="md"
            style="max-width: 8rem"
            >Cancelar</q-btn
          >
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-md" v-if="false">
    <q-banner class="bg-warning text-white">
      Não há consultas ainda!
      <template v-slot:action>
        <q-btn flat color="white" label="Voltar" to="/psychologist/console" />
      </template>
    </q-banner>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CollectionComponent',
});
</script>
