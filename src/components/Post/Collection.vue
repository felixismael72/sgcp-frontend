<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            color="secondary"
            text-color="white"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular"
            >Título da publicação 1</q-item-label
          >
          <q-item-label caption>Autor</q-item-label>
          <q-item-label caption>12/07/2022</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            color="white"
            text-color="secondary"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular"
            >Título da publicação 2</q-item-label
          >
          <q-item-label caption>Autor</q-item-label>
          <q-item-label caption>12/07/2022</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            color="secondary"
            text-color="white"
            class="shadow-3"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular"
            >Título da publicação 3</q-item-label
          >
          <q-item-label caption>Autor</q-item-label>
          <q-item-label caption>12/07/2022</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            color="white"
            text-color="secondary"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular"
            >Título da publicação 4</q-item-label
          >
          <q-item-label caption>Autor</q-item-label>
          <q-item-label caption>12/07/2022</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            color="secondary"
            text-color="white"
            class="shadow-3"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular"
            >Título da publicação 5</q-item-label
          >
          <q-item-label caption>Autor</q-item-label>
          <q-item-label caption>12/07/2022</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar
            icon="feed"
            color="white"
            text-color="secondary"
            class="shadow-3"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular"
            >Título da publicação 6</q-item-label
          >
          <q-item-label caption>Autor</q-item-label>
          <q-item-label caption>12/07/2022</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CollectionComponent',
});
</script>
