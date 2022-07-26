<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      infinite
      :autoplay="autoplay"
      control-text-color="secondary"
      v-model="slide"
      height="400px"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide name="first">
        <div class="column no-wrap flex-center">
          <div class="text-h3 text-weight-light">Faça o seu cadastro</div>
          <q-btn
            text-color="secondary"
            class="text-capitalize q-mt-xl"
            to="/auth/signUp"
            >Cadastrar</q-btn
          >
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second">
        <div class="column no-wrap flex-center">
          <div class="text-h3 text-weight-light">Agende sua consulta.</div>
          <q-btn
            color="secondary"
            class="text-capitalize q-mt-xl"
            to="/auth/login"
            >Entrar</q-btn
          >
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third">
        <div class="column no-wrap flex-center">
          <div class="text-h3 text-weight-light">Leia sobre saúde mental</div>
          <q-btn text-color="secondary" class="text-capitalize q-mt-xl"
            >Publicações</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'CarouselComponent',
  setup() {
    return {
      slide: ref('first'),
      autoplay: ref(true),
    };
  },
});
</script>
