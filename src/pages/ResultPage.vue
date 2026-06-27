<template>
  <q-page class="column q-pa-md no-wrap bg-white">
    <!-- Header Section -->
    <div class="text-center full-width q-mb-md">
      <div class="full-width text-center">
        <div style="color: #003087; font-size: 16px; font-weight: 800; line-height: 1.2;">
          Propuesta de aplicación
        </div>
        <!-- Hint -->
        <div class="text-center q-mt-xs" style="color: #9ca3af; font-size: 12px;">
          Toca una pegatina para ver sus distancias
        </div>
      </div>
    </div>
    <!-- SVG Container -->
    <div class="q-my-md relative-position" style="flex-grow: 1; display: flex; justify-content: center; align-items: center; background-color: #e8eef8; border-radius: 16px; padding: 10px; min-height: 60vh;">
      <q-btn
        size="lg"
        flat
        icon="refresh"
        to="/form"
        no-caps
        class="absolute-top-right q-mt-sm q-ml-sm"
        style="z-index: 10; color: #003087; font-weight: 600;"
      />
      <svg
        v-if="hasData"
        :viewBox="`-15 -15 ${Number(designState.width) + 30} ${Number(designState.height) + 30}`"
        class="full-width full-height"
        style="min-height: 450px; max-height: 85vh;"
        @click.self="selectedSticker = null"
      >
        <!-- Bounding Box -->
        <rect
          x="0"
          y="0"
          :width="designState.width"
          :height="designState.height"
          :rx="Math.min(designState.width, designState.height) * 0.15"
          fill="white"
          stroke="#c5cfe3"
          stroke-width="1"
          @click="selectedSticker = null"
        />

        <!-- Top Dimension Label -->
        <text
          :x="designState.width / 2"
          y="-5"
          text-anchor="middle"
          fill="#003087"
          :font-size="Math.max(4, designState.width * 0.05)"
          font-family="Inter, sans-serif"
          font-weight="700"
        >
          {{ designState.width }} cm
        </text>

        <!-- Left Dimension Label (Rotated) -->
        <text
          :x="-5"
          :y="designState.height / 2"
          text-anchor="middle"
          fill="#003087"
          :font-size="Math.max(4, designState.width * 0.05)"
          font-family="Inter, sans-serif"
          font-weight="700"
          :transform="`rotate(-90, -5, ${designState.height / 2})`"
        >
          {{ designState.height }} cm
        </text>

        <!-- Stickers -->
        <g v-for="(sticker, index) in stickersPositions" :key="index">
          <rect
            :x="sticker.x"
            :y="sticker.y"
            width="20"
            height="2"
            rx="1"
            :fill="selectedSticker === index ? 'lime' : '#003087'"
            :opacity="selectedSticker === index ? 1 : 0.7"
            style="cursor: pointer;"
            @click.stop="selectSticker(index)"
          />
        </g>

        <!-- Distance annotations when a sticker is selected -->
        <g v-if="selectedSticker !== null && distanceInfo">
          <!-- Distance to top border -->
          <line
            :x1="distanceInfo.centerX"
            :y1="0"
            :x2="distanceInfo.centerX"
            :y2="distanceInfo.stickerY"
            stroke="lime"
            stroke-width="0.5"
            stroke-dasharray="2,1"
          />
          <text
            :x="distanceInfo.centerX + 1.5"
            :y="distanceInfo.stickerY / 2"
            fill="lime"
            :font-size="labelFontSize"
            font-family="Inter, sans-serif"
            font-weight="700"
          >
            {{ distanceInfo.distTop }} cm
          </text>

          <!-- Distance to bottom border -->
          <line
            :x1="distanceInfo.centerX"
            :y1="distanceInfo.stickerY + 2"
            :x2="distanceInfo.centerX"
            :y2="Number(designState.height)"
            stroke="lime"
            stroke-width="0.5"
            stroke-dasharray="2,1"
          />
          <text
            :x="distanceInfo.centerX + 1.5"
            :y="(distanceInfo.stickerY + 2 + Number(designState.height)) / 2"
            fill="lime"
            :font-size="labelFontSize"
            font-family="Inter, sans-serif"
            font-weight="700"
          >
            {{ distanceInfo.distBottom }} cm
          </text>

          <!-- Distance to left border -->
          <line
            :x1="0"
            :y1="distanceInfo.stickerY + 1"
            :x2="distanceInfo.stickerX"
            :y2="distanceInfo.stickerY + 1"
            stroke="lime"
            stroke-width="0.5"
            stroke-dasharray="2,1"
          />
          <text
            :x="distanceInfo.stickerX / 2"
            :y="distanceInfo.stickerY - 1"
            text-anchor="middle"
            fill="lime"
            :font-size="labelFontSize"
            font-family="Inter, sans-serif"
            font-weight="700"
          >
            {{ distanceInfo.distLeft }} cm
          </text>

          <!-- Distance to right border -->
          <line
            :x1="distanceInfo.stickerX + 20"
            :y1="distanceInfo.stickerY + 1"
            :x2="Number(designState.width)"
            :y2="distanceInfo.stickerY + 1"
            stroke="lime"
            stroke-width="0.5"
            stroke-dasharray="2,1"
          />
          <text
            :x="(distanceInfo.stickerX + 20 + Number(designState.width)) / 2"
            :y="distanceInfo.stickerY - 1"
            text-anchor="middle"
            fill="lime"
            :font-size="labelFontSize"
            font-family="Inter, sans-serif"
            font-weight="700"
          >
            {{ distanceInfo.distRight }} cm
          </text>

          <!-- Distance to nearest sticker above -->
          <template v-if="distanceInfo.nearestAbove !== null">
            <line
              :x1="distanceInfo.centerX - 3"
              :y1="distanceInfo.nearestAbove.y + 2"
              :x2="distanceInfo.centerX - 3"
              :y2="distanceInfo.stickerY"
              stroke="#ff6b35"
              stroke-width="0.6"
            />
            <text
              :x="distanceInfo.centerX - 4.5"
              :y="(distanceInfo.nearestAbove.y + 2 + distanceInfo.stickerY) / 2"
              text-anchor="end"
              fill="#ff6b35"
              :font-size="labelFontSize"
              font-family="Inter, sans-serif"
              font-weight="700"
            >
              {{ distanceInfo.distNearestAbove }} cm
            </text>
          </template>

          <!-- Distance to nearest sticker below -->
          <template v-if="distanceInfo.nearestBelow !== null">
            <line
              :x1="distanceInfo.centerX - 3"
              :y1="distanceInfo.stickerY + 2"
              :x2="distanceInfo.centerX - 3"
              :y2="distanceInfo.nearestBelow.y"
              stroke="#ff6b35"
              stroke-width="0.6"
            />
            <text
              :x="distanceInfo.centerX - 4.5"
              :y="(distanceInfo.stickerY + 2 + distanceInfo.nearestBelow.y) / 2"
              text-anchor="end"
              fill="#ff6b35"
              :font-size="labelFontSize"
              font-family="Inter, sans-serif"
              font-weight="700"
            >
              {{ distanceInfo.distNearestBelow }} cm
            </text>
          </template>
        </g>
      </svg>
      <div v-else class="text-center q-pa-xl" style="color: #6b7280;">
        No hay datos de diseño. Por favor, vuelve al formulario.
      </div>
    </div>



    <!-- CTA Button -->
    <div class="full-width q-mt-auto text-center q-pb-md q-px-md">
      <q-btn
        unelevated
        class="full-width text-weight-bold"
        size="lg"
        style="background-color: lime; color: black; border-radius: 10px; text-transform: none; max-width: 420px; margin: 0 auto; font-size: 16px;"
        to="/instructions"
      >
        Ver manual de colocación
        <q-icon name="chevron_right" size="20px" class="q-ml-sm" />
      </q-btn>
    </div>
    <AppFooter />
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { designState } from '@/composables/useDesign'
import AppFooter from '@/components/AppFooter.vue'

const selectedSticker = ref(null)

const hasData = computed(() => {
  return designState.width > 0 && designState.height > 0 && designState.stickersCount > 0
})

const labelFontSize = computed(() => {
  return Math.max(3, Number(designState.width) * 0.05)
})

function selectSticker(index) {
  selectedSticker.value = selectedSticker.value === index ? null : index
}

const distanceInfo = computed(() => {
  if (selectedSticker.value === null || !hasData.value) return null
  
  const positions = stickersPositions.value
  const idx = selectedSticker.value
  if (idx >= positions.length) return null
  
  const sticker = positions[idx]
  const width = Number(designState.width)
  const height = Number(designState.height)
  const stickerW = 20
  const stickerH = 2
  
  const stickerX = sticker.x
  const stickerY = sticker.y
  const centerX = stickerX + stickerW / 2
  
  // Distances to borders
  const distTop = Math.round(stickerY * 10) / 10
  const distBottom = Math.round((height - stickerY - stickerH) * 10) / 10
  const distLeft = Math.round(stickerX * 10) / 10
  const distRight = Math.round((width - stickerX - stickerW) * 10) / 10
  
  // Find nearest sticker in the same column (same x) above and below
  let nearestAbove = null
  let nearestBelow = null
  let minDistAbove = Infinity
  let minDistBelow = Infinity
  
  for (let i = 0; i < positions.length; i++) {
    if (i === idx) continue
    const other = positions[i]
    
    // Same column check (within tolerance of 1cm)
    if (Math.abs(other.x - stickerX) < 1) {
      if (other.y < stickerY) {
        const dist = stickerY - (other.y + stickerH)
        if (dist < minDistAbove) {
          minDistAbove = dist
          nearestAbove = other
        }
      } else {
        const dist = other.y - (stickerY + stickerH)
        if (dist < minDistBelow) {
          minDistBelow = dist
          nearestBelow = other
        }
      }
    }
  }
  
  return {
    stickerX,
    stickerY,
    centerX,
    distTop,
    distBottom,
    distLeft,
    distRight,
    nearestAbove,
    nearestBelow,
    distNearestAbove: nearestAbove ? Math.round(minDistAbove * 10) / 10 : null,
    distNearestBelow: nearestBelow ? Math.round(minDistBelow * 10) / 10 : null
  }
})

const stickersPositions = computed(() => {
  if (!hasData.value) return []
  
  const width = Number(designState.width)
  const height = Number(designState.height)
  const count = Number(designState.stickersCount)
  const stickerWidth = 20
  const stickerHeight = 2
  
  const positions = []
  // Margen del 10%
  const marginY = height * 0.1
  const usableHeight = height - (2 * marginY)

  // Usar 2 columnas si el ancho lo permite (ej: >= 48cm para dos de 20cm con margen) y hay > 1 adhesivos
  const useTwoColumns = width >= 48 && count > 1
  
  if (useTwoColumns) {
    const col1Count = Math.ceil(count / 2)
    const col2Count = Math.floor(count / 2)
    
    // Usamos el mismo espaciado vertical basado en la columna más larga
    // para asegurar que las filas estén perfectamente alineadas (patrón repetitivo y limpio)
    const maxRows = col1Count
    const spacingY = maxRows > 1 ? usableHeight / (maxRows - 1) : 0
    
    // Separación horizontal calculada para no solaparse. 
    // centerGap es la distancia entre los centros. Tiene que ser mayor a 20. Le damos 24 (4cm de aire en medio)
    const centerGap = stickerWidth + 4 
    const col1X = (width / 2) - (centerGap / 2) - (stickerWidth / 2)
    const col2X = (width / 2) + (centerGap / 2) - (stickerWidth / 2)
    
    // Columna 1
    for (let i = 0; i < col1Count; i++) {
      const yCenter = maxRows > 1 ? marginY + (i * spacingY) : height / 2
      positions.push({ x: col1X, y: yCenter - (stickerHeight / 2) })
    }
    
    // Columna 2
    for (let i = 0; i < col2Count; i++) {
      const yCenter = maxRows > 1 ? marginY + (i * spacingY) : height / 2
      positions.push({ x: col2X, y: yCenter - (stickerHeight / 2) })
    }
  } else {
    // 1 columna (centrada)
    if (count === 1) {
      positions.push({ x: (width - stickerWidth) / 2, y: (height - stickerHeight) / 2 })
      return positions
    }
    
    const spacing = usableHeight / (count - 1)
    for (let i = 0; i < count; i++) {
      const yCenter = marginY + (i * spacing)
      positions.push({ x: (width - stickerWidth) / 2, y: yCenter - (stickerHeight / 2) })
    }
  }
  
  return positions
})
</script>
