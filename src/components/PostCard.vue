<script setup lang="ts">
import { defineProps } from 'vue'

interface PostProps {
  post: {
    title: string
    body: string
  }
}

const { post } = defineProps<PostProps>()
</script>

<template>
  <div class="post">
    <h3 class="post_title">{{ post.title }}</h3>
    <p class="post_body">{{ post.body }}</p>
  </div>
</template>

<style scoped>
.post {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.post_title {
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}

.post_body {
  margin: 0.5rem 0 0;
  font-size: 1rem;
}
</style>
