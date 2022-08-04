<template>
  <div
    class="q-pa-md"
    style="max-width: 750px"
    v-if="
      appointments.length > 0 ||
      canceledOnes.length > 0 ||
      finishedOnes.length > 0
    "
  >
    <q-tabs v-model="tab">
      <q-tab name="active" label="Agendadas" />
      <q-tab name="done" label="Realizadas" />
      <q-tab name="inactive" label="Canceladas" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="active">
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
                v-if="!(role === 'patient')"
                icon="check"
                color="green"
                outline
                size="md"
                style="max-width: 8rem"
                @click="handleFinishDialog()"
                >Realizar</q-btn
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
                @click="handleCancelDialog()"
                >Cancelar</q-btn
              >
            </q-item-section>
            <CancelDialog
              :dialogState="isCancelOpen"
              :appointmentID="appointment.id"
              @closeDialog="handleCancelDialog"
            />
            <FinishDialog
              :dialogState="isFinishOpen"
              :appointmentID="appointment.id"
              @closeDialog="handleFinishDialog"
            />
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="done">
        <q-list bordered separator>
          <q-item
            v-for="(finishedOne, index) in finishedOnes"
            :key="finishedOne.id"
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
              <q-item-label>{{ finishedOne.schedule }}</q-item-label>
              <q-item-label caption
                >Criador: {{ finishedOne.patient_name }}</q-item-label
              >
            </q-item-section>
            <q-item-section>
              <q-btn
                rounded
                disable
                icon="check"
                color="green"
                outline
                size="md"
                style="max-width: 8rem"
                >Realizada</q-btn
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="inactive">
        <q-list bordered separator>
          <q-item
            v-for="(canceledOne, index) in canceledOnes"
            :key="canceledOne.id"
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
              <q-item-label>{{ canceledOne.schedule }}</q-item-label>
              <q-item-label caption
                >Criador: {{ canceledOne.patient_name }}</q-item-label
              >
            </q-item-section>
            <q-item-section>
              <q-btn
                rounded
                disable
                icon="priority_high"
                color="red"
                outline
                size="md"
                style="max-width: 9rem"
                >Cancelada</q-btn
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </div>
  <div
    class="q-pa-md"
    v-if="
      appointments.length <= 0 &&
      canceledOnes.length <= 0 &&
      finishedOnes.length <= 0
    "
  >
    <q-banner class="bg-warning text-white"> {{ emptyMessage }} </q-banner>
  </div>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { computed, defineComponent, ref } from 'vue';
import CancelDialog from 'components/Appointment/CancelDialog.vue';
import FinishDialog from 'components/Appointment/FinishDialog.vue';
export default defineComponent({
  name: 'CollectionComponent',
  components: { CancelDialog, FinishDialog },
  setup() {
    const $store = useStore();

    $store.dispatch('appointment/fetchAppointments');
    $store.dispatch('appointment/fetchCanceledAppointments');
    $store.dispatch('appointment/fetchFinishedAppointments');

    const appointments = computed({
      get: () => $store.state.appointment.appointments,
      set: () => {
        return;
      },
    });

    const canceledOnes = computed({
      get: () => $store.state.appointment.canceledAppointments,
      set: () => {
        return;
      },
    });

    const finishedOnes = computed({
      get: () => $store.state.appointment.finishedAppointments,
      set: () => {
        return;
      },
    });

    const role = $store.getters['user/getRole'];

    let emptyMessage = '';
    const appointmentID = ref('');

    switch (role) {
      case 'psychologist':
        emptyMessage = 'Não há consultas para gerenciar no momento';
        break;
      case 'patient':
        emptyMessage =
          'Não há consultas ainda. Agende uma consulta para vê-la aqui.';
        break;
    }

    const isCancelOpen = ref(false);
    const handleCancelDialog = () => {
      isCancelOpen.value = !isCancelOpen.value;
    };

    const isFinishOpen = ref(false);
    const handleFinishDialog = () => {
      isFinishOpen.value = !isFinishOpen.value;
    };

    const tab = ref('active');

    return {
      appointments,
      canceledOnes,
      finishedOnes,
      emptyMessage,
      appointmentID,
      isCancelOpen,
      handleCancelDialog,
      isFinishOpen,
      handleFinishDialog,
      tab,
      role,
    };
  },
});
</script>
