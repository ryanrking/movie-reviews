<template>
<div>
  <div id="movie">
    <div id="movie-info">
      <div class="poster">
        <img :src="'/images/'+movie.poster">
      </div>
      <div class="info">
        <h1 class="title">{{movie.name}}</h1>
        <div class="general">
          <p>Directed by: {{movie.director}}</p>
          <p>Tomatometer Score: {{movie.tomatometer}}</p>
          <p>Metacritic Score: {{movie.metacritic}}</p>
        </div>

        <h3 id="ranking">Average Ranking: {{avgRanking}}</h3>
        
        <div class="opinion">
          <h3>My opinion:</h3>
          <p>My rating: {{movie.rating}}/10</p>
          <p>{{movie.review}}</p>
        </div>

        <div id="comments">
          <h3>Disagree? Tell me why in excruciating detail!</h3>
          <form v-on:submit.prevent="addComment">
            <input v-model="addedName" placeholder="Name">
            <textarea v-model="addedComment" placeholder="Your argument"></textarea>
            <br />
            <button type="submit" id="submit">Comment</button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="hasComments" id="all-comments">
      <h3>Wrong opinions:</h3>
      <div v-for="comment in comments[movie.id]" :key="comment.text" class="single-comment">
        <div>
          <p>{{comment.text}}</p>
          <p><i>-- {{comment.author}}</i></p>
        </div>
        <button v-on:click="remove(comment)" class="remove">X</button>
      </div>  
    </div>
  </div>
</div>
</template>

<style scoped>
.poster img {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.poster {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

#movie {
  display: flex;
  flex-direction: column;
}

#movie-info {
  display: flex;
  flex-direction: column;
}

.info {
  padding: 5px 10px;
}

.title {
  text-align: center;
  margin-bottom: 15px;
}

#comments {
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 5px;
  padding: 5px;
}

textarea {
  padding: 5px;
  font-family: 'Noto Serif';
}

.single-comment button {
  padding: 8px;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  font-size: 1em;
  background-color: rgb(0, 0, 0);
  color:white
}

hr {
  padding: 0 !important;
}

.opinion h3 {
  padding-bottom: 2px;
}

.single-comment {
  padding-top: 10px;
  padding-bottom: 20px;
  border-top: solid black 1px;
}

.single-comment:first-of-type {
  border: none;
}

.single-comment * {
  padding-top: 10px;
}

#comments #submit {
  padding: 8px;
  border-radius: 5px;
  height: fit-content;
  text-align: center;
  font-size: 1em;
  background-color: rgb(202, 34, 202);
  color:white;
}

.info * {
  padding-bottom: 20px;
}

.general p {
  padding-bottom: 2px;
}

.opinion p {
  padding-bottom: 2px;
}

#all-comments {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

#comments {
  padding-bottom: 0;
}

.single-comment {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.remove {
  align-self: center;
}

.info input {
  padding-bottom: 5px;
  width: 250px;
}

.info textarea {
  width: 300px;
  height: 80px;
  padding-bottom: 5px;
}

@media only screen and (min-width: 960px) {
  #movie {
    flex-direction: column;
    padding: 0px 50px;
  }
  
  #movie-info {
    flex-direction: row;
  }
  
  .poster {
    justify-content: flex-start;
    margin-top: 50px;
  }

  .poster img {
    height: 60vh;
    width: 40vh;
  }

  .info {
    align-self: flex-start;
    margin: 40px 20px 0 20px;
    width: 50%;
  }

  .title {
    text-align: left; 
    margin-bottom: 0;
  }

  .info input {
    width: 250px;
  }

  .info textarea {
    width: 400px;
  }

  #comments #submit {
    width: 400px;
  }

  form {
    width: 80%;
  }

  #submit {
    padding-bottom: 10px;
  }

  #comments {
    padding-bottom: 0;
  }

  #all-comments {
    width: 80%;
    padding: 0;
  }
}
</style>


<script>
export default {
  name: 'Details',
  data() {
    return {
      movie: {},
      avgRanking: "N/A - Come back after you've ranked some movies!",
      comments: {},
      addedName: '',
      addedComment: ''
    }
  },
  created() {
    this.movie = this.$root.$data.movies.find(movie => movie.id === parseInt(this.$route.params.id));
    if ('ranking' in this.movie) {
      let avg =  Math.round(10 * parseInt(this.movie.ranking) / parseInt(this.movie.numRankings)) / 10;
      this.avgRanking = avg.toString();
    }
    this.comments = this.$root.$data.comments;
  },
  computed: {
    hasComments() {
      return this.movie.id in this.comments;
    }
  },
  methods: {
    addComment() {
      if (!(this.movie.id in this.comments))
        this.$set(this.$root.$data.comments, this.movie.id, new Array);
      this.comments[this.movie.id].push({
        author: this.addedName,
        text: this.addedComment
      });
    },
    remove(comment) {
      let index = this.comments[this.movie.id].findIndex(c => c.text === comment.text);
      this.comments[this.movie.id].splice(index, 1);
      if (this.comments[this.movie.id].length == 0) {
        this.$delete(this.comments, this.movie.id);
      }
    }
  }
}
</script>