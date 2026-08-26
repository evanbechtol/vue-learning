import { ref } from 'vue'

export const useCounter = () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const double = () => {
    count.value *= 2
  }

  const reset = () => {
    count.value = 0
  }

  return {
    count,
    increment,
    decrement,
    double,
    reset,
  }
}
