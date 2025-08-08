<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    <h1 class="text-4xl font-bold text-blue-500 mb-6">Movie Search</h1>

    <div class="flex space-x-3 mb-6">
      <input
        type="text"
        v-model="query"
        placeholder="Search for a movie..."
        class="p-2 border rounded w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
      <button
        @click="searchMovies"
        class="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>

    <div v-if="loading" class="text-gray-600">Loading...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>

    <div v-if="movies.length" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="movie in movies" :key="movie.imdbID" class="bg-white p-4 rounded-lg shadow-md">
        <img :src="movie.Poster" :alt="movie.Title" class="w-full h-60 object-cover rounded-lg" />
        <h3 class="text-lg font-semibold mt-3">{{ movie.Title }}</h3>
        <p class="text-gray-600">{{ movie.Year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const query = ref("");
    const movies = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const searchMovies = async () => {
      if (!query.value) return;
      loading.value = true;
      error.value = null;
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query.value}&apikey=YOUR_OMDB_API_KEY`
        );
        const data = await response.json();
        if (data.Response === "True") {
          movies.value = data.Search;
        } else {
          error.value = "Movie not found!";
          movies.value = [];
        }
      } catch (err) {
        error.value = "Something went wrong!";
      }
      loading.value = false;
    };

    return { query, movies, searchMovies, loading, error };
  }
};
</script>
