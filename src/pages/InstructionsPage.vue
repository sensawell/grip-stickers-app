<template>
  <q-page class="column q-pa-md no-wrap bg-white">
    <!-- Header Section -->
    <div class="text-center full-width q-mb-md">
      <div class="full-width text-center">
        <div
          style="
            color: #003087;
            font-size: 16px;
            font-weight: 800;
            line-height: 1.2;
          "
        >
          Manual de colocación
        </div>
        <!-- Hint -->
        <div
          class="text-center q-mt-xs"
          style="color: #9ca3af; font-size: 12px"
        >
          Sigue estos pasos para una correcta instalación
        </div>
      </div>
    </div>

    <!-- Steps Cards -->
    <div class="col q-px-sm" style="flex-grow: 1">
      <!-- Step 1 -->
      <div
        class="row items-start q-pa-md q-mb-md"
        style="border: 1px solid #e5e7eb; border-radius: 14px"
      >
        <div
          class="col-12 col-sm-auto flex justify-start q-mb-md q-mb-sm-none q-mr-sm-md"
        >
          <q-img
            :src="baseUrl + 'paso-2.png'"
            style="
              width: 250px;
              max-width: 100%;
              border-radius: 10px;
              background: #e8eef8;
            "
          />
        </div>
        <div class="col-12 col-sm">
          <div style="color: #003087; font-size: 13px; font-weight: 700">
            01
          </div>
          <div
            class="q-mb-xs"
            style="font-size: 17px; font-weight: 700; color: #111827"
          >
            Limpia y seca
          </div>
          <div style="font-size: 14px; color: #6b7280; line-height: 1.5">
            Asegúrate de que la superficie esté totalmente libre de humedad y
            suciedad.
          </div>
        </div>
      </div>
      <!-- Step 2 -->
      <div
        class="row items-start q-pa-md q-mb-md"
        style="border: 1px solid #e5e7eb; border-radius: 14px"
      >
        <div
          class="col-12 col-sm-auto flex justify-start q-mb-md q-mb-sm-none q-mr-sm-md"
        >
          <q-img
            :src="baseUrl + 'paso-3.png'"
            style="
              width: 250px;
              max-width: 100%;
              border-radius: 10px;
              background: #e8eef8;
            "
          />
        </div>
        <div class="col-12 col-sm">
          <div style="color: #003087; font-size: 13px; font-weight: 700">
            02
          </div>
          <div
            class="q-mb-xs"
            style="font-size: 17px; font-weight: 700; color: #111827"
          >
            Despega
          </div>
          <div style="font-size: 14px; color: #6b7280; line-height: 1.5">
            Retira los adhesivos uno a uno directamente de la tira de tres.
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div
        class="row items-start q-pa-md q-mb-lg"
        style="border: 1px solid #e5e7eb; border-radius: 14px"
      >
        <div
          class="col-12 col-sm-auto flex justify-start q-mb-md q-mb-sm-none q-mr-sm-md"
        >
          <q-img
            :src="baseUrl + 'paso-4.png'"
            style="
              width: 250px;
              max-width: 100%;
              border-radius: 10px;
              background: #e8eef8;
            "
          />
        </div>
        <div class="col-12 col-sm">
          <div style="color: #003087; font-size: 13px; font-weight: 700">
            04
          </div>
          <div
            class="q-mb-xs"
            style="font-size: 17px; font-weight: 700; color: #111827"
          >
            Instala
          </div>
          <div style="font-size: 14px; color: #6b7280; line-height: 1.5">
            Coloca cada pieza siguiendo el patrón de diseño elegido. Presiona de
            manera uniforme con la espátula.
          </div>
        </div>
      </div>
    </div>

    <!-- Safety Link -->
    <div class="full-width q-mt-auto q-pb-md q-px-sm">
      <q-btn
        flat
        class="full-width"
        to="/safety"
        no-caps
        style="
          border: 1.5px solid #f5c542;
          border-radius: 10px;
          padding: 12px 16px;
          text-transform: none;
        "
      >
        <div class="row items-center full-width no-wrap">
          <q-icon name="warning" style="color: #003087" size="22px" />
          <span
            class="q-ml-sm"
            style="
              color: #003087;
              font-size: 14px;
              font-weight: 600;
              flex-grow: 1;
              text-align: left;
            "
          >
            Ver advertencias de seguridad
          </span>
          <q-icon name="chevron_right" style="color: #003087" size="20px" />
        </div>
      </q-btn>
    </div>
    <AppFooter />
  </q-page>
</template>

<script setup>
import AppFooter from "@/components/AppFooter.vue";

const baseUrl = import.meta.env.BASE_URL;
</script>
