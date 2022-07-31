<template>
  <div>
    <q-dialog v-model="open" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="secondary" text-color="white" />
          <span class="q-ml-sm"
            >Tem certeza que deseja cancelar esta consulta</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            outline
            class="text-capitalize"
            label="Cancelar"
            color="secondary"
            @click="$emit('closeDialog')"
          />
          <q-btn
            class="text-capitalize"
            label="Cancelar"
            color="secondary"
            @click="cancel(), $emit('closeDialog')"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'CancelDialogComponent',
  props: ['dialogState', 'appointmentID'],
  emits: ['closeDialog'],
  setup(props) {
    const $store = useStore();
    let open = computed(() => props.dialogState);
    let cancel = () => {
      $store.dispatch('appointment/cancelAppointment', props.appointmentID);
    };
    return {
      open,
      cancel,
    };
  },
});
</script>
