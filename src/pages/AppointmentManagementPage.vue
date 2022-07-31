<template>
  <q-page padding>
    <EditableCollection />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EditableCollection from 'components/Appointment/EditableCollection.vue';
export default defineComponent({
  name: 'AppointmentManagementPage',
  components: { EditableCollection },
});
</script>
