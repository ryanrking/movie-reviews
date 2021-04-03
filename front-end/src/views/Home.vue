<template>
<div id="home">
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
      <div class="movie" v-for="movie in selectedMovies" :key="movie.id">
        <div class="image" @click="getMovieDetails(movie)">
          <img :src="movie.poster">
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>No movies to display!</h3>
  </div>
  <button @click="addMovieInsert" v-if="adding == false">+ Add a movie!</button>
  <form v-if="adding" v-on:submit.prevent="addMovie" id="new-movie">
    <h2>Add a movie:</h2>
    <input v-model="addedName" placeholder="Movie title">
    <input v-model="addedDirector" placeholder="Director">
    <input v-model="addedRating" placeholder="Your rating (0-10)" type="number" min="0" max="10">
    <input v-model="addedTomatometer" placeholder="Tomatometer score (0-100)" type="number" min="0" max="100">
    <input v-model="addedMetacritic" placeholder="Metacritic score (0-100)" type="number" min="0" max="100">
    <textarea v-model="addedReview" placeholder="Your review"></textarea>
    <h4>Poster:</h4>
    <input type="file" name="photo" @change="fileChanged">
    <button type="submit" id="add-movie">Add!</button>
  </form>
</div>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

input, textarea {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  outline: none;
  padding-left: 5px;
}

textarea {
  height: 120px;
}

.movies {
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: center;
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

button {
  margin-top: 30px;
  padding: 8px;
  border-radius: 5px;
  height: fit-content;
  text-align: center;
  font-size: 1em;
  background-color: rgb(202, 34, 202);
  color:white;
}

#new-movie {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 20px;
}

#new-movie * {
  margin: 3px 0;
}

#add-movie {
  align-self: center;
  width: 200px;
}

@media only screen and (min-width: 600px) {
  .wrapper {
    width: 50%;
  }

  .search {
    width: 100%;
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
  
  .movies::after {
  content: "";
  flex: auto;
  } 
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      searchText: '',
      adding: false,
      file: null,
      addedName: '',
      addedRating: '',
      addedDirector: '',
      addedTomatometer: '',
      addedMetacritic: '',
      addedReview: '',
      movies: [],
    }
  },
  created() {
    this.getMovies();
  },
  computed:{
    hasMovies() {
      return this.movies.length != 0;
    },
    selectedMovies() {
      return this.movies.filter(movie => movie.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
  methods: {
    getMovieDetails(movie) {
      this.$router.push({name: 'Details', params: {id : movie._id}});
    },
    addMovieInsert(){
      this.adding = true;
    },
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async getMovies() {
      try {
        let response = await axios.get("/api/movies");
        this.movies = response.data;
        return true;
      } catch (error) {
        //console.log()
      }
    },
    async addMovie() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        await axios.post('/api/movies', {
          name: this.addedName,
          rating: this.addedRating,
          director: this.addedDirector,
          tomatometer: this.addedTomatometer,
          metacritic: this.addedMetacritic,
          review: this.addedReview,
          poster: r1.data.path
        });

        this.addedName = ''
        this.addedRating = ''
        this.addedDirector = ''
        this.addedTomatometer = ''
        this.addedMetacritic = ''
        this.addedReview = ''
      } catch (error) {
        //console.log()
      }
      this.adding = false;
      await this.getMovies();
    },
  }
}
</script>
