<script setup>
import { useRouter } from 'vue-router'
import { useEventos } from '../composables/useEventos'
import EventCard from '../components/EventCard.vue'


const router = useRouter()
const { eventos, favoritar } = useEventos()

function abrirDetalhe(id) {
  router.push(`/eventos/${id}`)
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Eventos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <EventCard
        v-for="e in eventos"
        :key="e.id"
        :evento="e"
        @favoritar="favoritar"
        @click="abrirDetalhe(e.id)"
      />

      <ion-button expand="block" router-link="/home">
        Voltar 🏠
      </ion-button>

    </ion-content>
  </ion-page>
</template>