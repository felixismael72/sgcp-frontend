<template>
  <q-page padding>
    <EditableCollection />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EditableCollection from 'components/Schedule/EditableCollection.vue';
export default defineComponent({
  name: 'ScheduleManagementPage',
  components: { EditableCollection },
});
</script>
