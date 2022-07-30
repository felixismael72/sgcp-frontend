<template>
  <div class="q-pa-md" style="max-width: 750px" v-if="schedules.length > 0">
    <q-list bordered separator>
      <q-item v-for="(schedule, index) in schedules" :key="schedule.id">
        <q-item-section avatar>
          <q-avatar
            icon="schedule"
            round
            :color="index % 2 == 0 ? 'secondary' : 'white'"
            :text-color="index % 2 == 0 ? 'white' : 'secondary'"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular">{{
            fmtSchedules[index]
          }}</q-item-label>
        </q-item-section>

        <q-item-section>
          <q-btn
            rounded
            icon="edit"
            @click="handleScheduleEdit(schedule.id)"
            color="yellow"
            outline
            size="md"
            style="max-width: 7rem"
          />
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            icon="delete"
            @click="handleScheduleRemoval(schedule.id)"
            color="red"
            outline
            size="md"
            style="max-width: 7rem"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <div class="q-pa-md" v-if="schedules.length <= 0">
    <q-banner class="bg-warning text-white">
      Não há horários registrados. Registre algum para gerenciá-lo!
      <template v-slot:action>
        <q-btn flat color="white" label="Voltar" to="/psychologist/console" />
      </template>
    </q-banner>
  </div>

  <EditDialog :dialogState="isEditScheduleOpen" @closeDialog="closeEdit" />
  <RemoveDialog
    :dialogState="isRemoveScheduleOpen"
    :removeAction="'removeSchedule'"
    :removeMessage="'Tem certeza de que deseja excluir o horário'"
    :store="'schedule'"
    @closeDialog="closeRemove"
  />
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { computed, defineComponent, ref } from 'vue';
import RemoveDialog from 'components/Global/RemoveDialog.vue';
import EditDialog from 'components/Schedule/EditDialog.vue';
import { date } from 'quasar';
export default defineComponent({
  name: 'CollectionComponent',
  components: { RemoveDialog, EditDialog },
  setup() {
    const $store = useStore();

    $store.dispatch('schedule/fetchSchedules');

    const schedules = computed({
      get: () => $store.state.schedule.schedules,
      set: () => {
        return;
      },
    });

    const openSchedule = (scheduleID: string) => {
      $store.dispatch('schedule/fetchScheduleByID', scheduleID);
    };

    const isEditScheduleOpen = ref(false);
    const isRemoveScheduleOpen = ref(false);

    const fmtSchedules = schedules.value.map((schedule) => {
      return date.formatDate(schedule.schedule.toString(), 'DD/MM/YYYY HH:mm');
    });

    const handleScheduleEdit = (scheduleID: string) => {
      openSchedule(scheduleID);
      isEditScheduleOpen.value = !isEditScheduleOpen.value;
    };

    const handleScheduleRemoval = (scheduleID: string) => {
      openSchedule(scheduleID);
      isRemoveScheduleOpen.value = !isEditScheduleOpen.value;
    };

    const closeEdit = () => {
      isEditScheduleOpen.value = !isEditScheduleOpen.value;
    };

    const closeRemove = () => {
      isRemoveScheduleOpen.value = !isRemoveScheduleOpen.value;
    };

    return {
      schedules,
      isEditScheduleOpen,
      isRemoveScheduleOpen,
      handleScheduleEdit,
      handleScheduleRemoval,
      fmtSchedules,
      closeEdit,
      closeRemove,
    };
  },
});
</script>
