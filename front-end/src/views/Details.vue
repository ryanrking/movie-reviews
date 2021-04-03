<template>
<div>
  <div id="movie">
    <div id="movie-info">
      <div class="poster">
        <img :src="movie.poster">
      </div>
      <div class="info">
        <h1 class="title">{{movie.name}}</h1>
        <div class="general">
          <p>Directed by: {{movie.director}}</p>
          <p>Tomatometer Score: {{movie.tomatometer}}</p>
          <p>Metacritic Score: {{movie.metacritic}}</p>
        </div>

        <h3 id="ranking">Average Battle Ranking: {{avgRanking}}</h3>
        
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
      <div v-for="comment in comments" :key="comment._id" class="full-comment">
        <div class="single-comment" v-if="editing == false || editComment != comment._id">
          <div>
            <p>{{comment.text}}</p>
            <p><i>-- {{comment.author}}</i></p>
          </div>
          <button v-on:click="startEdit(comment)" class="edit">Edit</button>
          <button v-on:click="remove(comment)" class="remove">X</button>
        </div>
        <form class="edit-zone" v-else v-on:submit.prevent=submitEdit(comment)>
          <div class="text-edit">
            <div class="edit-field">
              <label class="edit-label">Name:</label>
              <input v-model="editedName" placeholder="Name">
            </div>
            <div class="edit-field">
              <label class="edit-label">Comment:</label>
              <textarea v-model="editedText" placeholder="Your argument"></textarea>
            </div>
          </div>
          <button type="submit" class="confirm">Submit</button>
        </form>
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

.edit-zone {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.text-edit {
  width: 330px;
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

.full-comment button {
  padding: 8px;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  font-size: 1em;
  background-color: rgb(0, 0, 0);
  color:white
}

.edit-zone .confirm {
  background-color: green;
  border-color: rgb(2, 119, 2);
}

.edit-label {
  width: 80px;
}

.edit-field {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.edit-field input, .edit-field textarea {
  width: 250px;
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
}

.remove {
  align-self: center;
  margin-left: 5px;
}

.edit {
  margin-left: auto;
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

  .text-edit {
    width: 500px;
  }

  .edit-field input, .edit-field textarea {
    width: 400px;
  }
}
</style>


<script>
import axios from 'axios';

export default {
  name: 'Details',
  data() {
    return {
      movie: {},
      avgRanking: "N/A - Come back after you've ranked some movies!",
      comments: {},
      addedName: '',
      addedComment: '',
      editing: false,
      editComment: '',
      editedText: '',
      editedName: '',
    }
  },
  async created() {
    await this.getMovie(this.$route.params.id);
    if (this.movie.ranking > 0) {
      let avg =  Math.round(10 * parseInt(this.movie.ranking) / parseInt(this.movie.numRankings)) / 10;
      this.avgRanking = avg.toString()
      this.avgRanking += "/5";
    }
    await this.getComments(this.movie._id);
  },
  computed: {
    hasComments() {
      return this.comments.length > 0;
    }
  },
  methods: {
    async addComment() {
      try {
        await axios.post(`/api/movies/${this.movie._id}/comments`, {
          text: this.addedComment,
          author: this.addedName
        });
        this.addedComment = ''
        this.addedName = ''
        await this.getComments();
      } catch(error) {
        // console.log(error)
      }
    },
    async remove(comment) {
      try {
        await axios.delete(`/api/movies/${this.movie._id}/comments/${comment._id}`);
        this.getComments()
      } catch (error) {
        // console.log(error)
      }


      let index = this.comments[this.movie.id].findIndex(c => c.text === comment.text);
      this.comments[this.movie.id].splice(index, 1);
      if (this.comments[this.movie.id].length == 0) {
        this.$delete(this.comments, this.movie.id);
      }
    },
    startEdit(comment) {
      this.editing = true;
      this.editComment = comment._id;
      this.editedText = comment.text;
      this.editedName = comment.author;
    },
    async submitEdit(comment) {
      try {
        await axios.put(`/api/movies/${this.movie._id}/comments/${comment._id}`, {
          text: this.editedText,
          author: this.editedName
        });
        this.getComments()
        this.editedText = '';
        this.editedName = '';
        this.editing = false;
      } catch (error) {
        // console.log(error)
      }
    },
    async getMovie(id) {
      try {
        let response = await axios.get("/api/movies/" + id);
        this.movie = response.data;
      } catch (error) {
        // console.log(error)
      }
    },
    async getComments() {
      try {
        let response = await axios.get("/api/movies/" + this.movie._id + "/comments");
        this.comments = response.data;
      } catch (error) {
        // console.log(error)
      }
    }
  }
}
</script>