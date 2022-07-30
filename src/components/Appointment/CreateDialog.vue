<template>
  <q-dialog
    v-model="open"
    persistent
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-secondary text-white" style="min-width: 350px">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" @click="$emit('closeDialog')">
          <q-tooltip class="bg-white text-secondary">Fechar</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">Criação de consulta</div>
      </q-card-section>

      <q-card-section>
        <q-card bordered>
          <q-separator inset />
          <q-card-section class="q-gutter-y-md">
            <q-select
              outlined
              v-model="schedule"
              :options="options"
              :dense="dense"
              :options-dense="denseOpts"
            >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
            </q-select>
          </q-card-section>

          <q-card-actions align="right" class="on-left">
            <q-btn
              color="secondary"
              class="text-capitalize"
              size="md"
              label="Salvar"
              @click="$emit('closeDialog'), saveAppointment()"
            />
            <q-btn
              outline
              color="secondary"
              class="text-capitalize"
              size="md"
              label="Limpar"
              @click="clearPost()"
            />
          </q-card-actions>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'CreateDialogComponent',
  props: ['dialogState'],
  emits: ['closeDialog'],
  setup(props) {
    const $store = useStore();

    const open = computed(() => {
      return props.dialogState;
    });

    const saveAppointment = () => {
      return;
    };

    return {
      open,
      saveAppointment,
    };
  },
});
</script>
