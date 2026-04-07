import { ref, computed } from 'vue'

const eventos = ref([
  { id: 1, titulo: 'Show de Rock', descricao: 'Evento top', favorito: false },
  { id: 2, titulo: 'Palestra Tech', descricao: 'Aprenda muito', favorito: false }
])

export function useEventos() {

  function favoritar(id: number) {
    const evento = eventos.value.find(e => e.id === id)
    if (evento) evento.favorito = !evento.favorito
  }

  const favoritos = computed(() =>
    eventos.value.filter(e => e.favorito)
  )

  function getEvento(id: number) {
    return eventos.value.find(e => e.id === id)
  }

  return {
    eventos,
    favoritos,
    favoritar,
    getEvento
  }
}