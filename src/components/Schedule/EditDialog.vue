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
        <div class="text-h6">Edição de horário</div>
      </q-card-section>

      <q-card-section>
        <q-card bordered>
          <q-separator inset />
          <q-card-section class="q-gutter-y-md">
            <div class="q-pa-md" style="max-width: 300px">
              <q-input filled v-model="schedule">
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="schedule" mask="DD/MM/YYYY HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>

                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time
                        v-model="schedule"
                        mask="DD/MM/YYYY HH:mm"
                        format24h
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <q-toggle
              size="sm"
              v-model="available"
              val="sm"
              class="text-black"
              label="Disponível"
            />
          </q-card-section>

          <q-card-actions align="right" class="on-left">
            <q-btn
              color="secondary"
              class="text-capitalize"
              size="md"
              label="Salvar"
              @click="$emit('closeDialog'), saveSchedule()"
            />
            <q-btn
              outline
              color="secondary"
              class="text-capitalize"
              size="md"
              label="Limpar"
              @click="clearSchedule()"
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

    const schedule = computed({
      get: () => $store.state.schedule.openedSchedule.schedule,
      set: (newSchedule) => {
        $store.commit('schedule/setSchedule', newSchedule);
      },
    });

    const psyID = computed({
      get: () => $store.state.schedule.openedSchedule.psychologist_id,
      set: (newPsyID) => {
        $store.commit('schedule/setPsychologistID', newPsyID);
      },
    });

    const available = computed({
      get: () => $store.state.schedule.openedSchedule.available,
      set: (isAvailable) => {
        $store.commit('schedule/setAvailability', isAvailable);
      },
    });

    const saveSchedule = () => {
      $store.dispatch('schedule/editSchedule', {
        schedule: schedule.value,
        psychologist_id: psyID.value,
        expired: available.value,
      });
    };

    return {
      open,
      schedule,
      available,
      saveSchedule,
    };
  },
});
</script>
