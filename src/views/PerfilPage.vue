<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nome = ref('')

watch(nome, (novo) => {
  console.log('Nome alterado:', novo)
})

function voltar() {
  router.push('/home')
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Perfil 👤</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-item>
        <ion-label position="stacked">Nome</ion-label>
        <ion-input v-model="nome" />
      </ion-item>

      <ion-button expand="block" @click="voltar">
        Voltar 🏠
      </ion-button>

    </ion-content>
  </ion-page>
</template>