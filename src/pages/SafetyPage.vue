<template>
  <q-page class="column no-wrap">
    <!-- Header Section -->
    <div class="text-center full-width q-mb-md">
      <div class="full-width text-center">
        <div style="color: #003087; font-size: 16px; font-weight: 800; line-height: 1.2;">
          Advertencias de seguridad
        </div>
        <!-- Hint -->
        <div class="text-center q-mt-xs" style="color: #9ca3af; font-size: 12px;">
          Lee atentamente antes de usar el producto
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="col q-px-sm" style="flex-grow: 1; padding-bottom: 24px;">
      
      <!-- Item 1 -->
      <div class="row no-wrap items-start q-pa-md q-mb-md" style="border: 1px solid #e5e7eb; border-radius: 14px; background-color: #f8fafc;">
        <div class="q-mr-md flex flex-center" style="width: 56px; height: 56px; border-radius: 10px; background-color: white; flex-shrink: 0;">
          <q-icon name="child_care" size="28px" style="color: #003087;" />
        </div>
        <div class="col">
          <div style="color: #5c7dbf; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">01</div>
          <div class="q-mb-xs" style="font-size: 16px; font-weight: 700; color: #111827;">Peligro de asfixia</div>
          <div style="font-size: 14px; color: #6b7280; line-height: 1.5;">
            Mantenga la bolsa de plástico y el embalaje fuera del alcance de bebés y niños. No utilizar en cunas, camas, cochecitos o parques de juego.
          </div>
        </div>
      </div>

      <!-- Item 2 -->
      <div class="row no-wrap items-start q-pa-md q-mb-md" style="border: 1px solid #e5e7eb; border-radius: 14px; background-color: #f8fafc;">
        <div class="q-mr-md flex flex-center" style="width: 56px; height: 56px; border-radius: 10px; background-color: white; flex-shrink: 0;">
          <q-icon name="visibility" size="28px" style="color: #003087;" />
        </div>
        <div class="col">
          <div style="color: #5c7dbf; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">02</div>
          <div class="q-mb-xs" style="font-size: 16px; font-weight: 700; color: #111827;">No sustituye la supervisión</div>
          <div style="font-size: 14px; color: #6b7280; line-height: 1.5;">
            La presencia de las pegatinas no exime de la vigilancia constante de un adulto cuando haya niños o personas dependientes en la bañera, ducha o piscina.
          </div>
        </div>
      </div>

      <!-- Item 3 -->
      <div class="row no-wrap items-start q-pa-md q-mb-md" style="border: 1px solid #e5e7eb; border-radius: 14px; background-color: #f8fafc;">
        <div class="q-mr-md flex flex-center" style="width: 56px; height: 56px; border-radius: 10px; background-color: white; flex-shrink: 0;">
          <q-icon name="texture" size="28px" style="color: #003087;" />
        </div>
        <div class="col">
          <div style="color: #5c7dbf; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">03</div>
          <div class="q-mb-xs" style="font-size: 16px; font-weight: 700; color: #111827;">Superficies no aptas</div>
          <div style="font-size: 14px; color: #6b7280; line-height: 1.5;">
            No instale este producto sobre superficies rugosas, porosas, con texturas profundas, baldosas con relieves pronunciados o juntas de azulejos. El adhesivo necesita un contacto plano y total para garantizar su fijación; de lo contrario, podría despegarse y causar resbalones.
          </div>
        </div>
      </div>

      <!-- Item 4 -->
      <div class="row no-wrap items-start q-pa-md q-mb-none" style="border: 1px solid #e5e7eb; border-radius: 14px; background-color: #f8fafc;">
        <div class="q-mr-md flex flex-center" style="width: 56px; height: 56px; border-radius: 10px; background-color: white; flex-shrink: 0;">
          <q-icon name="warning" size="28px" style="color: #003087;" />
        </div>
        <div class="col">
          <div style="color: #5c7dbf; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">04</div>
          <div class="q-mb-xs" style="font-size: 16px; font-weight: 700; color: #111827;">Riesgo de desprendimiento</div>
          <div style="font-size: 14px; color: #6b7280; line-height: 1.5;">
            Si observa que alguna tira comienza a levantarse, agrietarse o despegarse por los bordes, retírela y sustitúyala inmediatamente por una nueva para evitar tropiezos o pérdida de tracción.
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </q-page>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue'
</script>
