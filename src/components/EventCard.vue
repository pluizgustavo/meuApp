<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  evento: Object
})

defineEmits(['favoritar'])

function abrirEvento() {
  router.push(`/eventos/${props.evento.id}`)
}
</script>

<template>
  <ion-card @click="abrirEvento">

    <ion-card-header>
      <ion-card-title>{{ evento.titulo }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <p>{{ evento.descricao }}</p>

      <ion-button @click.stop="$emit('favoritar', evento.id)">
        ⭐ Favoritar
      </ion-button>
    </ion-card-content>

  </ion-card>
</template>