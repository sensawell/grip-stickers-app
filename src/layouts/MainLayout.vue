<template>
  <div class="row justify-center window-width window-height bg-grey-2">
    <div class="app-container bg-white shadow-2" style="width: 100%; max-width: 600px; position: relative;">
      <q-layout view="lHh Lpr lFf" container class="full-height">
        <q-header class="bg-white" style="border-bottom: 1px solid #f3f4f6;">
          <q-toolbar style="min-height: 70px;">
            <q-btn
              flat
              dense
              round
              color="dark"
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
            />

            <q-space />

            <q-toolbar-title class=" text-weight-bolder text-center absolute-center" style="color: #003087; font-size: 22px; pointer-events: none;">
              <div>Grip Stickers App</div>
            </q-toolbar-title>


          </q-toolbar>
        </q-header>

        <q-dialog v-model="leftDrawerOpen" backdrop-filter="blur(4px)">
          <q-card style="width: 320px; border-radius: 16px;">
            <div class="logo flex flex-center q-pt-lg">
              <img src="/logo-sensawell-blue.png" alt="Logo" style="height: 35px; object-fit: contain;" />
            </div>
            <q-list class="q-pt-md q-pb-sm">
              <q-item clickable v-ripple to="/" exact @click="leftDrawerOpen = false" class="justify-center q-mt-lg  q-mx-md q-mb-sm q-px-lg" style="border: 1px solid #e5e7eb; border-radius: 12px;">
                <q-item-section avatar style="min-width: auto; padding-right: 16px;">
                  <q-icon name="home" color="primary" size="20px" />
                </q-item-section>
                <q-item-section class="text-weight-medium" style="flex: none;">Inicio</q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/form" @click="leftDrawerOpen = false" class="justify-center q-mx-md q-mb-sm q-px-lg" style="border: 1px solid #e5e7eb; border-radius: 12px;">
                <q-item-section avatar style="min-width: auto; padding-right: 16px;">
                  <q-icon name="edit" color="primary" size="20px" />
                </q-item-section>
                <q-item-section class="text-weight-medium" style="flex: none;">Crear Patrón</q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/result" @click="leftDrawerOpen = false" class="justify-center q-mx-md q-mb-sm q-px-lg" style="border: 1px solid #e5e7eb; border-radius: 12px;">
                <q-item-section avatar style="min-width: auto; padding-right: 16px;">
                  <q-icon name="grid_on" color="primary" size="20px" />
                </q-item-section>
                <q-item-section class="text-weight-medium" style="flex: none;">Último Patrón</q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/instructions" @click="leftDrawerOpen = false" class="justify-center q-mx-md q-mb-sm q-px-lg" style="border: 1px solid #e5e7eb; border-radius: 12px;">
                <q-item-section avatar style="min-width: auto; padding-right: 16px;">
                  <q-icon name="info" color="primary" size="20px" />
                </q-item-section>
                <q-item-section class="text-weight-medium" style="flex: none;">Instrucciones</q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/safety" @click="leftDrawerOpen = false" class="justify-center q-mx-md q-mb-sm q-px-lg" style="border: 1px solid #e5e7eb; border-radius: 12px;">
                <q-item-section avatar style="min-width: auto; padding-right: 16px;">
                  <q-icon name="warning" color="warning" size="20px" />
                </q-item-section>
                <q-item-section class="text-weight-medium" style="flex: none;">Advertencias de Seguridad</q-item-section>
              </q-item>

              <q-item clickable v-ripple to="/legal" @click="leftDrawerOpen = false" class="justify-center q-mx-md q-mb-sm q-px-lg" style="border: 1px solid #e5e7eb; border-radius: 12px;">
                <q-item-section avatar style="min-width: auto; padding-right: 16px;">
                  <q-icon name="gavel" color="grey-6" size="20px" />
                </q-item-section>
                <q-item-section class="text-weight-medium" style="flex: none;">Aviso Legal</q-item-section>
              </q-item>
            </q-list>
            
            <q-card-actions align="center" class="q-pb-md">
              <q-btn flat label="Cerrar" color="grey-7" v-close-popup no-caps />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-page-container>
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.app-container {
  overflow: hidden;
}
</style>
