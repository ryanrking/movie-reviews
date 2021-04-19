<template>
<div>
  <div id="instructions">
    <h1>It's A Movie Battle!</h1>
    <h4>Drag and drop to move the movies to match your preferences, then hit submit! (5 is best, 1 is worst.)</h4>
    <div id="buttons">
      <button @click="getRandomSelection">Get a new selection</button>
      <button @click="submit" id="submit">Submit ranking!</button>
      <button @click="resetRankings" id="reset" v-if="user">Reset all rankings</button>
    </div>
    <div v-if="submitted">
      <div v-if="user">
        <h4>Ranking submitted! Click on a film to see how your ranking affected its score, or get a new selection and battle again!</h4>
      </div>
      <div v-else>
        <h4>Your rankings won't saved unless you're logged in. Come back after you've logged in!</h4>
      </div>
    </div>
    <div v-if="showReset">
      <h4>All previous rankings reset!</h4>
    </div>

  </div>
  <div class="movies">
    <div class="movie" v-for="(movie, index) in selection" :key="movie._id" draggable="true" @click="visitIfFinished(movie)"
     v-on:dragstart="dragItem(movie)" v-on:dragover="dragOver(movie)" v-on:drop="dropItem(movie)">
      <div class="image">
          <img :src="movie.poster">
      </div>
      <p class="rank">{{index + 1}}</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
  background-color: white;
}

#instructions {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: center;
}

#instructions * {
  margin: 3px;
}

.rank {
  text-align: center;
  font-weight: bold;
}

#buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position:relative;
  flex-wrap: wrap;
  margin: 10px 0px 10px 0;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  width: fit-content;
  text-align: center;
  font-size: 1em;
  background-color: rgb(202, 34, 202);
  color:white
}

#reset {
  background-color: red;
}

.movies {
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.movie {
  margin: 10px;
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
    margin-top: 30px;
    width: 200px;
    height: 300px;
  }

  .movie img {
    width: 200px;
    height: 300px;
  }

  #reset {
    position: absolute;
    right:0;
    margin-right: 9%;
  }
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'Rank',
  data() {
    return {
      movies: [],
      selection: [],
      swapWith: {},
      submitted: false,
      showReset: false,
    }
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
    this.getRandomSelection();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    dragItem(item) {
      this.drag = item
    },
    dragOver(item) {
      const indexItem = this.selection.indexOf(this.drag);
      const indexTarget = this.selection.indexOf(item);
      this.selection.splice(indexItem, 1);
      this.selection.splice(indexTarget, 0, this.drag);
    },
    dropItem(item) {
      const indexItem = this.selection.indexOf(this.drag);
      const indexTarget = this.selection.indexOf(item);
      this.selection.splice(indexItem, 1);
      this.selection.splice(indexTarget, 0, this.drag);
    },
    async submit() {
      if (this.submitted == true) return;
      this.showReset = false;
      this.submitted = true;
      if (!this.user) return;
      for(let i = 0; i < 5; i++) {
        let movie = this.selection[i]
        await axios.put(`/api/movies/${movie._id}`, {
          // name: movie.name,
          // rating: movie.rating,
          // director: movie.director,
          // tomatometer: movie.tomatometer,
          // metacritic: movie.metacritic,
          // review: movie.review,
          // poster: movie.poster,
          ranking: (movie.ranking + i + 1),
          numRankings: (movie.numRankings + 1)
        });
      }
    },
    async getRandomSelection() {
      let response = await axios.get("/api/movies");
      this.movies = response.data;
      this.showReset = false;
      this.submitted = false;
      let result = new Array(5);
      let len = this.movies.length;
      let taken = new Array(len);
      for (let i = 0; i < 5; i++) {
        let x = Math.floor(Math.random() * len);
        result[i] = this.movies[x in taken ? taken[x] : x],
        taken[x] = --len in taken ? taken[len] : len;
      }
      this.selection = result;
    },
    visitIfFinished(movie) {
      if (!this.submitted) return;
      this.$router.push({name: 'Details', params: {id : movie._id}});
    },
    async resetRankings() {
      this.submitted = false;
      this.showReset = true;
      this.movies.forEach(async movie => {
        movie.ranking = 0;
        movie.numRankings = 0;
        await axios.put(`/api/movies/${movie._id}`, {
          // name: movie.name,
          // rating: movie.rating,
          // director: movie.director,
          // tomatometer: movie.tomatometer,
          // metacritic: movie.metacritic,
          // review: movie.review,
          // poster: movie.poster,
          ranking: 0,
          numRankings: 0
        });
      });
    }
  }
}
</script>
