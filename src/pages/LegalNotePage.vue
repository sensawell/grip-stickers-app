<template>
  <q-page class="column q-pa-md no-wrap bg-white">

    <!-- Header Section -->
    <div class="text-center full-width q-mb-md">
      <div class="full-width text-center">
        <div style="color: #003087; font-size: 16px; font-weight: 800; line-height: 1.2;">
          Aviso Legal
        </div>
        <div class="text-center q-mt-xs" style="color: #9ca3af; font-size: 12px;">
          Información importante sobre el uso de la app
        </div>
      </div>
    </div>

    <!-- Dialog que se abre automáticamente -->
    <q-dialog v-model="open" backdrop-filter="blur(4px)" persistent>
      <q-card style="width: 340px; border-radius: 16px;" class="q-pa-sm">

        <q-card-section>
          <div style="font-size: 16px; font-weight: 800; color: #003087; line-height: 1.3; margin-bottom: 12px;">
            Nota Legal y Exención de Responsabilidad
          </div>
          <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin-bottom: 10px;">
            El uso de esta aplicación y del patrón de colocación generado es puramente orientativo. Sensawell no se hace responsable de caídas, resbalones, lesiones o cualquier otro tipo de percance derivado de una instalación incorrecta o del uso del espacio tratado.
          </p>
          <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 0;">
            Para garantizar la máxima efectividad y seguridad del producto, es obligatorio que el usuario siga estrictamente las instrucciones de seguridad, preparación de la superficie e instalación detalladas en nuestra página oficial:
            <router-link to="/safety" @click="open = false" style="color: #003087; font-weight: 700; text-decoration: underline;">
              Advertencias de Seguridad
            </router-link>.
          </p>
        </q-card-section>

        <q-card-actions align="center" class="q-pb-md">
          <q-btn
            unelevated
            label="He leído y entiendo"
            no-caps
            style="background-color: #003087; color: white; border-radius: 10px; font-weight: 600; padding: 8px 24px;"
            v-close-popup
            @click="$router.back()"
          />
        </q-card-actions>

      </q-card>
    </q-dialog>

    <AppFooter />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import AppFooter from '@/components/AppFooter.vue'

const open = ref(true)
</script>
