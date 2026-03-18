<template>
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Mini App de Tarefas</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">

      <!-- CARD FORMULÁRIO -->
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Nova Tarefa</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonInput
            label="Nome da tarefa"
            label-placement="floating"
            v-model="novaTarefa"
            :clear-input="true"
            placeholder="Ex: Estudar Vue.js"
            :error-text="erroTarefa"
            :class="{ 'ion-invalid ion-touched': erroTarefa }"
          />

          <IonButton
            expand="block"
            fill="solid"
            color="primary"
            @click="adicionar"
          >
            <IonIcon :icon="addOutline" slot="start" />
            Adicionar
          </IonButton>
        </IonCardContent>
      </IonCard>

      <!-- CARD LISTA -->
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            Minhas Tarefas ({{ tarefas.length }})
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>

          <IonList v-if="tarefas.length">
            <IonItem v-for="(t, i) in tarefas" :key="i">
              
              <IonIcon
                slot="start"
                :icon="checkmarkCircleOutline"
              />

              <IonLabel>{{ t }}</IonLabel>

              <IonButton
                slot="end"
                fill="clear"
                color="danger"
                @click="remover(i)"
              >
                <IonIcon :icon="trashOutline" />
              </IonButton>

            </IonItem>
          </IonList>

          <p
            v-else
            class="ion-text-center ion-padding"
          >
            Nenhuma tarefa cadastrada.
          </p>

        </IonCardContent>
      </IonCard>

    </IonContent>
  </IonPage>
</template>

<script setup>
import { ref, computed } from 'vue'

import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonInput,
  IonButton, IonIcon,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/vue'

import {
  addOutline,
  trashOutline,
  checkmarkCircleOutline
} from 'ionicons/icons'

// estados
const novaTarefa = ref('')
const tarefas = ref([])

// validação
const erroTarefa = computed(() =>
  !novaTarefa.value.trim() ? 'Campo obrigatório' : ''
)

// funções
function adicionar() {
  if (erroTarefa.value) return

  tarefas.value.push(novaTarefa.value)
  novaTarefa.value = ''
}

function remover(index) {
  tarefas.value.splice(index, 1)
}
</script>