<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useEventos } from '../composables/useEventos'

const route = useRoute()
const router = useRouter()

const { getEvento, favoritar } = useEventos()

const evento = getEvento(Number(route.params.id))

function voltar() {
  router.push('/eventos')
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Detalhes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" v-if="evento">

      <h2>{{ evento.titulo }}</h2>
      <p>{{ evento.descricao }}</p>

      <ion-button expand="block" @click="favoritar(evento.id)">
        ⭐ Favoritar
      </ion-button>

      <ion-button expand="block" fill="outline" @click="voltar">
        🔙 Voltar
      </ion-button>

    </ion-content>
  </ion-page>
</template>