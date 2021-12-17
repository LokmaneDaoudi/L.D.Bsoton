<template>
  <div class="container mt-8 text-center">
    <div v-if="pending" class="text-center">
      <Spinner size="100" thickness="4" />
    </div>
    <div v-else-if="error">error ! {{ error }}</div>
    <div v-else class="posts-container">
      <div v-for="post in posts" class="post">
        <img :src="post.metadata.image.imgix_url" alt="" />
        <div class="content">
          <div class="f-17px f-bold">{{ post.title }}</div>
          <div class="f-14px">{{ post.metadata.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch('/api/blog');

const posts: any = data.value.objects;

//
const route = useRoute();

useMeta({
  bodyAttrs: {
    class: route.meta?.animationDir,
  },
});
</script>

<style lang="scss" scoped>
.posts-container {
  columns: 4 200px;
}

.post {
  break-inside: avoid;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--grey);
  margin-bottom: 20px;

  img {
    width: 100%;
    object-fit: contain;
    background-color: #fff;
  }

  .content {
    padding: 1rem 0.8rem;
  }
}
</style>
