<script setup>
import { useRouter } from 'vue-router'
import { useEventos } from '../composables/useEventos'

const router = useRouter()
const { favoritos } = useEventos()

function voltar() {
  router.push('/home')
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Favoritos ⭐</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <div v-if="favoritos.length === 0">
        <p>Nenhum evento favoritado 😢</p>
      </div>

      <ion-list v-else>
        <ion-item v-for="e in favoritos" :key="e.id">
          {{ e.titulo }}
        </ion-item>
      </ion-list>

      <ion-button expand="block" @click="voltar">
        Voltar 🏠
      </ion-button>

    </ion-content>
  </ion-page>
</template>