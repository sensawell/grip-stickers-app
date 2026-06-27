<template>
  <q-page class="column q-pa-md no-wrap bg-white">
    <!-- Header Section -->
    <div class="text-center full-width q-mb-md">
      <div class="full-width text-center">
        <div style="color: #003087; font-size: 16px; font-weight: 800; line-height: 1.2;">
          Crear diseño
        </div>
        <!-- Hint -->
        <div class="text-center q-mt-xs" style="color: #9ca3af; font-size: 12px;">
          Introduce las medidas del área donde vas a colocar los adhesivos
        </div>
      </div>
    </div>

    <!-- Form Section -->
    <div class="q-pa-lg q-mb-md" style="max-width: 420px; margin: 0 auto; width: 100%; background-color: #f8fafc; border-radius: 12px;">

      <!-- ALTO -->
      <div class="q-mb-xs" style="font-size: 12px; font-weight: 700; color: #003087; letter-spacing: 0.5px;">ALTO (CM)</div>
      <q-input
        v-model.number="designState.height"
        type="number"
        outlined
        dense
        bg-color="white"
        class="q-mb-none"
        input-style="font-size: 15px; font-weight: 500;"
        :rules="[val => !!val || 'Requerido', val => val > 0 || 'Debe ser mayor a 0']"
      />

      <!-- ANCHO -->
      <div class="q-mb-xs" style="font-size: 12px; font-weight: 700; color: #003087; letter-spacing: 0.5px;">ANCHO (CM)</div>
      <q-input
        v-model.number="designState.width"
        type="number"
        outlined
        dense
        bg-color="white"
        class="q-mb-none"
        input-style="font-size: 15px; font-weight: 500;"
        :rules="[val => !!val || 'Requerido', val => val > 0 || 'Debe ser mayor a 0']"
      />

      <!-- NÚMERO DE ADHESIVOS -->
      <div class="q-mb-xs" style="font-size: 12px; font-weight: 700; color: #003087; letter-spacing: 0.5px;">NÚMERO DE ADHESIVOS</div>
      <q-input
        v-model.number="designState.stickersCount"
        type="number"
        outlined
        dense
        bg-color="white"
        class="q-mb-none"
        input-style="font-size: 15px; font-weight: 500;"
        :rules="[val => !!val || 'Requerido', val => val > 0 || 'Debe ser mayor a 0']"
      />

      <!-- Sugerido -->
      <div v-if="suggestedStickers > 0" class="row items-center q-mb-lg q-pl-sm" style="min-height: 24px;">
        <span style="color: #111827; font-size: 13px; font-weight: 600;">Sugerido:</span>
        <q-badge rounded color="primary" style="background-color: #003087; margin-left: 6px; font-size: 12px; padding: 3px 8px;">
          {{ suggestedStickers }}
        </q-badge>
      </div>
      <div v-else style="min-height: 24px;" class="q-mb-lg"></div>

      <!-- Superficie calculada -->
      <div v-if="calculatedArea > 0" class="row items-center no-wrap q-pa-md" style="background-color: #edf2f7; border-radius: 10px;">
        <!-- Mini area preview -->
        <div class="flex-center" style="width: 48px; height: 48px; background-color: #003087; border-radius: 8px; display: flex; flex-shrink: 0;">
          <span style="color: white; font-size: 10px; font-weight: 700; text-align: center; line-height: 1.2;">
            {{ designState.height || '–' }}×{{ designState.width || '–' }}
          </span>
        </div>
        <div class="q-pl-md">
          <div style="font-size: 14px; font-weight: 700; color: #111827;">Superficie calculada</div>
          <div style="font-size: 13px; color: #6b7280;">
            {{ calculatedArea }} cm² · {{ designState.stickersCount || 0 }} adhesivos
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="full-width q-mt-auto text-center q-pb-md q-px-md">
      <q-btn
        unelevated
        class="full-width text-weight-bold"
        size="lg"
        style="background-color: lime; color: black; border-radius: 10px; text-transform: none; max-width: 420px; margin: 0 auto; font-size: 16px;"
        :disable="!isValid"
        @click="generateDesign"
      >
        Generar diseño
        <q-icon name="chevron_right" size="20px" class="q-ml-sm" />
      </q-btn>
    </div>
    <AppFooter />
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { designState } from '@/composables/useDesign'
import AppFooter from '@/components/AppFooter.vue'

const router = useRouter()

const calculatedArea = computed(() => {
  if (designState.width > 0 && designState.height > 0) {
    return designState.width * designState.height
  }
  return 0
})

const suggestedStickers = computed(() => {
  if (designState.width && designState.height && designState.width > 0 && designState.height > 0) {
    const area = designState.width * designState.height
    // Fórmula original: area / 800. Se solicita un 80% más (* 1.8)
    let suggested = Math.ceil((area / 800) * 1.8)
    
    // Hacer que siempre sea par redondeando hacia arriba
    if (suggested % 2 !== 0) {
      suggested += 1
    }
    
    return Math.max(2, suggested)
  }
  return 0
})

const isValid = computed(() => {
  return designState.width > 0 && designState.height > 0 && designState.stickersCount > 0
})

function generateDesign() {
  if (isValid.value) {
    router.push('/result')
  }
}
</script>

<style scoped>
:deep(.q-field--outlined .q-field__control) {
  border-radius: 10px;
}
</style>
