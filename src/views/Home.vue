<template>
<div>
  <h1 class="title">Ryan's Movie Database</h1>
  <h4 class="subtitle">Click on a movie to see more!</h4>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <div v-if="hasMovies">
    <div class="movies">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <div class="image" @click="getMovieDetails(movie)">
          <img :src="'/images/'+movie.poster">
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>No movies to display!</h3>
  </div>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  text-align: center;
  margin: 15px;
  margin-bottom: 5px;
  font-size: 2.5em;
}

.subtitle {
  text-align: center;
  margin-bottom: 15px;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
  background-color: white;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  outline: none;
  padding-left: 5px;
}

.movies {
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: center;
}

.movies::after {
  content: "";
  flex: auto;
}

.movie {
  margin: 10px 20px;
  margin-top: 30px;
  width: 200px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #808080;
}

.movie img {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.movie img:hover {
  filter: brightness(140%);
  cursor: pointer;
}

.movie .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

@media only screen and (min-width: 600px) {
  .search {
    width: 50%;
  }

  .movies {
    margin: 0px 100px 0 100px;
  }

  .movie {
    margin-top: 50px;
    width: 200px;
    height: 300px;
  }

  .movie img {
    width: 200px;
    height: 300px;
  }
}
</style>

<script>

export default {
  name: 'Home',
  data() {
    return {
      searchText: '',
    }
  },
  computed:{
    movies() {
      return this.$root.$data.movies.filter(movie => movie.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },
    hasMovies() {
      return this.movies.length != 0;
    }
  },
  methods: {
    getMovieDetails(movie) {
      this.$router.push({name: 'Details', params: {id : movie.id}});
    }
  }
}
</script>
