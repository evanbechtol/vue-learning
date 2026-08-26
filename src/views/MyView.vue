<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCounter } from '@/composables/useCounter'
import { usePosts } from '@/composables/usePosts'
import CountButton from '@/components/CountButton.vue'
import PostList from '@/components/PostList.vue'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const { count, increment, decrement, double, reset } = useCounter()
const actions = [
  { name: 'Increment', operation: increment },
  { name: 'Decrement', operation: decrement },
  { name: 'Double', operation: double },
  { name: 'Reset', operation: reset },
]
const posts = ref<Post[]>([])
const { getPosts } = usePosts()

onMounted(async () => {
  posts.value = await getPosts()
})

const onButtonClick = (action: () => void) => {
  console.log(`Button clicked: ${action.name}`)
}
</script>

<template>
  <div class="card">
    <p>Count is: {{ count }}</p>
    <template v-for="(action, index) in actions" :key="index">
      <CountButton
        @[`clicked${action.name}`]="onButtonClick(action.operation)"
        :onClick="action.operation"
        :action="action.name"
        class="count_button_wrapper"
      >
        {{ action.name.toUpperCase() }}
      </CountButton>
    </template>
  </div>

  <div class="card">
    <PostList :posts="posts" />
  </div>
</template>

<style scoped>
.count_button_wrapper {
  margin: 0.5rem;
}
</style>
