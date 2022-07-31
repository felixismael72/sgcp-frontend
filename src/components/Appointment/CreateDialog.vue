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
              :options="schedules"
              emit-value
              map-options
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
              label="Marcar"
              @click="$emit('closeDialog'), saveAppointment()"
            />
          </q-card-actions>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { computed, defineComponent, ref } from 'vue';
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
      $store.dispatch('appointment/createAppointment', {
        schedule_id: schedule.value,
      });
    };

    const schedule = ref('');

    const schedules = computed({
      get: () => $store.state.schedule.selectable,
      set: () => {
        return;
      },
    });

    return {
      open,
      saveAppointment,
      schedules,
      schedule,
    };
  },
});
</script>
