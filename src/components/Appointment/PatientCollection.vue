<template>
  <div class="q-pa-md" style="max-width: 750px" v-if="appointments.length > 0">
    <q-list bordered separator>
      <q-item
        v-for="(appointment, index) in appointments"
        :key="appointment.id"
      >
        <q-item-section avatar>
          <q-avatar
            icon="assignment"
            round
            :color="index % 2 == 0 ? 'secondary' : 'white'"
            :text-color="index % 2 == 0 ? 'white' : 'secondary'"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ appointment.schedule }}</q-item-label>
          <q-item-label caption
            >Criador: {{ appointment.patient_name }}</q-item-label
          >
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            :disable="appointment.is_canceled"
            :icon="
              appointment.is_canceled
                ? 'priority_high'
                : appointment.is_done
                ? 'check'
                : 'cancel'
            "
            :color="appointment.is_done ? 'green' : 'red'"
            outline
            size="md"
            style="max-width: 8rem"
            @click="handleCancelDialog()"
            >{{
              appointment.is_canceled
                ? 'Cancelada'
                : appointment.is_done
                ? 'Realizada'
                : 'Cancelar'
            }}</q-btn
          >
        </q-item-section>
        <CancelDialog
          :dialogState="isCancelOpen"
          :appointmentID="appointment.id"
          @closeDialog="handleCancelDialog"
        />
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-md" v-if="appointments.length <= 0">
    <q-banner class="bg-warning text-white">
      Não há consultas ainda. Agende uma consulta para vê-la aqui.
    </q-banner>
  </div>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { computed, defineComponent, ref } from 'vue';
import CancelDialog from 'components/Appointment/CancelDialog.vue';
export default defineComponent({
  name: 'CollectionComponent',
  components: { CancelDialog },
  setup() {
    const $store = useStore();

    $store.dispatch('appointment/fetchPatAppointments');

    const appointments = computed({
      get: () => $store.state.appointment.appointments,
      set: () => {
        return;
      },
    });

    const appointmentID = ref('');

    const isCancelOpen = ref(false);
    const handleCancelDialog = () => {
      isCancelOpen.value = !isCancelOpen.value;
    };

    return {
      appointments,
      appointmentID,
      isCancelOpen,
      handleCancelDialog,
    };
  },
});
</script>
