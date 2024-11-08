<script setup lang="ts">
const { data, pending, error } = useFetch<SeasonAnimeResponse>('/api/season-anime');
</script>

<template>
  <div class="container">
    <div v-if="error">
      エラー
    </div>
    <div
      v-else-if="pending"
      class="anime-container"
    >
      <div
        v-for="n in 20"
        :key="n"
        class="dummmy-container"
      >
        <div class="dummmy dummmy-img" />
        <div class="dummmy dummmy-title" />
      </div>
    </div>
    <div
      v-else
      class="anime-container"
    >
      <div
        v-for="anime in data.data"
        :key="anime.mal_id"
        class="img-container"
      >
        <a
          :href="anime.url"
          target="_blank"
        >
          <NuxtImg
            :src="anime.images.jpg.image_url"
            class="img"
          />
        </a>
        <p class="img-title">
          {{ anime.title_japanese }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  border: 0.2rem solid #B3B3B3;
  border-radius: 0.5rem;
  margin-bottom: 1.6rem;
  background-color: #F2F2F2
}

.anime-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.6rem
}

.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  object-fit: cover;
  height: 11.2rem;
  width: 8rem
}

.img-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 8rem
}

.dummmy-container {
  display: flex;
  flex-direction: column;
}

.dummmy {
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.dummmy::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%; /* アニメーションの開始位置 */
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 60%), transparent);
  animation: dummmy-wave 1.6s ease-in-out infinite;
}

.dummmy-img {
  height: 11.2rem;
  width: 8rem
}

.dummmy-title {
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  height: 1.2rem;
  width: 8rem
}

@keyframes dummmy-wave {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

@media (width >= 960px) {
  .container {
    margin: 0 1.6rem 1.6rem;
  }

  .anime-container {
    gap: 2.4rem
  }

  .img {
    height: 18.4rem;
    width: 15.2rem
  }

  .img-title {
    width: 15.2rem
  }

  .dummmy-img {
    height: 18.4rem;
    width: 15.2rem
  }

  .dummmy-title {
    height: 3.6rem;
    width: 15.2rem
  }
}
</style>
