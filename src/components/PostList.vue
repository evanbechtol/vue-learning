<script setup lang="ts">
import { defineProps } from 'vue'
import PostCard from './PostCard.vue'

interface PostsProps {
  posts: {
    userId: number
    id: number
    title: string
    body: string
  }[]
}

const { posts } = defineProps<PostsProps>()
</script>

<template>
  <h2>Posts</h2>
    <ul class="posts">
      <li v-for="post in posts" :key="post.id" class="post">
        <PostCard :post="post" />
      </li>
    </ul>
</template>

<style scoped>
.posts {
  list-style: none;
  padding: 0;
}
</style>
