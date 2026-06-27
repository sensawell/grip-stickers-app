<template>
  <q-page class="column q-pa-md no-wrap bg-white">
    <!-- Header Section -->
    <div class="text-center full-width q-mb-md">
      <div class="full-width text-center">
        <!-- Hint -->
        <div
          class="text-center q-mt-xs"
          style="color: #9ca3af; font-size: 12px"
        >
          Genera el patrón de diseño a medida<br />para tu espacio seguro
        </div>
      </div>
    </div>

    <!-- Carousel Section -->
    <div class="full-width q-mb-lg">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        autoplay="4000"
        infinite
        navigation
        navigation-position="bottom"
        height="280px"
        style="background-color: #e8eef8; border-radius: 16px"
      >
        <q-carousel-slide
          :name="1"
          class="column no-wrap flex-center q-pa-none"
        >
          <q-img
            :src="baseUrl + '01-main.png'"
            fit="cover"
            style="width: 100%; height: 100%"
          />
        </q-carousel-slide>

        <q-carousel-slide
          :name="2"
          class="column no-wrap flex-center q-pa-none"
        >
          <q-img
            :src="baseUrl + '02-result.png'"
            fit="contain"
            style="width: 100%; height: 100%"
          />
        </q-carousel-slide>
        <q-carousel-slide
          :name="3"
          class="column no-wrap flex-center q-pa-none"
        >
          <q-img
            :src="baseUrl + '04-ducha.png'"
            fit="cover"
            style="width: 100%; height: 100%"
          />
        </q-carousel-slide>
        <q-carousel-slide
          :name="4"
          class="column no-wrap flex-center q-pa-none"
        >
          <q-img
            :src="baseUrl + '03-material.png'"
            fit="cover"
            style="width: 100%; height: 100%"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- How it works Section -->
    <div class="full-width q-px-sm q-mb-lg">
      <div
        class="q-mt-md q-mb-lg full-width text-center"
        style="
          font-size: 18px;
          font-weight: 800;
          color: #111827;
          margin-top: 8px;
        "
      >
        ¿Cómo funciona?
      </div>

      <!-- Step 1 -->
      <div class="row q-mb-sm no-wrap items-start">
        <div class="col-auto q-pr-md" style="min-width: 32px">
          <span style="color: #003087; font-size: 15px; font-weight: 700"
            >01</span
          >
        </div>
        <div class="col">
          <div style="color: #111827; font-size: 16px; font-weight: 700">
            Mide tu superficie
          </div>
          <div style="color: #6b7280; font-size: 14px; line-height: 1.5">
            Introduce las dimensiones exactas de tu ducha o bañera.
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="row q-mb-sm no-wrap items-start">
        <div class="col-auto q-pr-md" style="min-width: 32px">
          <span style="color: #003087; font-size: 15px; font-weight: 700"
            >02</span
          >
        </div>
        <div class="col">
          <div style="color: #111827; font-size: 16px; font-weight: 700">
            Genera el patrón
          </div>
          <div style="color: #6b7280; font-size: 14px; line-height: 1.5">
            Nuestra app calcula la distribución óptima de adhesivos.
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="row q-mb-sm no-wrap items-start">
        <div class="col-auto q-pr-md" style="min-width: 32px">
          <span style="color: #003087; font-size: 15px; font-weight: 700"
            >03</span
          >
        </div>
        <div class="col">
          <div style="color: #111827; font-size: 16px; font-weight: 700">
            Aplica
          </div>
          <div style="color: #6b7280; font-size: 14px; line-height: 1.5">
            Sigue la guía visual paso a paso para una instalación perfecta.
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="full-width q-mt-auto text-center q-pb-md">
      <q-btn
        unelevated
        class="full-width text-weight-bold"
        size="lg"
        style="
          background-color: lime;
          color: black;
          border-radius: 8px;
          text-transform: none;
          max-width: 400px;
          margin: 0 auto;
        "
        label="Empezar"
        to="/form"
      />
    </div>
    <AppFooter />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import AppFooter from "@/components/AppFooter.vue";

const baseUrl = import.meta.env.BASE_URL;
const slide = ref(1);
</script>

<style scoped>
:deep(.q-carousel__navigation .q-btn) {
  color: #c5cfe3 !important;
}
:deep(.q-carousel__navigation .q-btn--active) {
  color: #003087 !important;
}
</style>
