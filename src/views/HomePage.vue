<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaEventos() {
  router.push('/eventos')
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>SmartEvent 🎉</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Bem-vindo!</h1>

      <ion-button expand="block" @click="irParaEventos">
        Ver Eventos 🚀
      </ion-button>

      <ion-button expand="block" fill="outline" router-link="/favoritos">
        Favoritos ⭐
      </ion-button>

      <ion-button expand="block" fill="outline" router-link="/perfil">
        Perfil 👤
      </ion-button>
    </ion-content>
  </ion-page>
</template>