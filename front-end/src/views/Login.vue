<template>
<div class="page">
  <div class="signin-box">
    <div v-if="user" id="user-info">
      <h1>You are logged in as {{user.username}}!</h1>
      <h3 @click="logout">Logout</h3>
    </div>
    <div v-else>
      <form id="login">
        <div class="intro">
          <h1>Login to the Database!</h1>
        </div>
        <div class="form-entry">
            <label class="field-label">Username:</label>
            <input type="text" v-model="usernameLogin">
        </div>
        <div class="form-entry">
            <label class="field-label">Password:</label>
            <input type="password" v-model="passwordLogin">
        </div>
        <p class="fineprint">You won't be able to comment, add movies, 
          or have your battle rankings count unless you're logged in.</p>
        <p v-if="errorLogin" class="error">{{errorLogin}}</p>
        <a class="button" id="login-button" @click.prevent="login">Login!</a>
      </form>

      <form id="register">
        <div class="intro">
          <h2>Not yet registered?</h2>
        </div>
        <div class="register-row">
          <div class="form-entry">
              <label class="field-label">First Name:</label>
              <input type="text" v-model="firstName">
          </div>
          <div class="form-entry">
              <label class="field-label">Last Name:</label>
              <input type="text" v-model="lastName">
          </div>
        </div>
        <div class="register-row">
          <div class="form-entry">
              <label class="field-label">Username:</label>
              <input type="text" v-model="username">
          </div>
          <div class="form-entry">
              <label class="field-label">Password:</label>
              <input type="password" v-model="password">
          </div>
        </div>
        <p v-if="error" class="error">{{error}}</p>
        <a class="button" id="register-button" @click.prevent="register">Sign up!</a>
      </form>
    </div>
  </div>

  <div class="signin-box comment-box" v-if="user">
    <div v-if="comments.length == 0">
      <p>Once you've commented, you'll be able to see all of your comments here!</p>
    </div>
    <div v-else class="all-comments">
      <h2>Things you've said:</h2>
      <div v-for="comment in comments" :key="comment._id" class="full-comment">
        <p class="comment">{{comment.text}}</p>
        <p class="title">on <router-link :to="`/details/` + comment.movie._id">
        {{comment.movie.name}}</router-link></p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 100%;
}

p {
  font-size: 1.2em;
  font-weight: normal;
}

.full-comment {
  padding: 8px;
}

.comment {
  font-size: 1em;
}

.title {
  font-size: .8em;
}

.title a:visited {
  color: black;
}

.title a:visited {
    color: black;
}

.signin-box {
  width: 90%;
  background-color: rgb(240, 239, 239);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 20px 20px 20px;
  margin: 30px 0 20px 0;
  box-shadow: 0px 0px 40px #111111;
}

.comment-box {
  align-items: flex-start;
}

.all-comments {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.comment-box h2 {
  align-self: center;
  justify-self: center;
}

#user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#user-info h1 {
  margin-bottom: 20px;
}

#user-info h3 {
  text-decoration: underline;
}

#user-info h3:hover {
  cursor: pointer;
}

#login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#register {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#register input {
  width: 100%;
}

.register-row {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.register-row:last-of-type {
  margin-bottom: 10px;
}

#login-button {
  margin-bottom: 20px;
}

#register-button {
  margin-bottom: 0;
}

.form-entry {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 15px 10px 10px;
  width: 100%;
}

.button {
  background-color: #F25116;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 12px;
  width: fit-content;
  text-align: center;
  font-size: 1.3em;
  color: white;
  box-shadow: 0 6px 16px -1px rgb(0 0 0 / 13%);
  margin-bottom: 10px;
}

.button:hover {
  color:rgb(241, 234, 234);
  text-decoration: none;
}

.button:visited {
  color: white;
  text-decoration: none;
}

.button:visited:hover {
  color: white;
  text-decoration: none;
}

.error {
  padding-bottom: 10px;
  font-size: .8em;
  color: #d9534f;
  }

input {
  line-height: 40px;
  height: 40px;
  font-size: .95em;
  width:100%;
  border: 1px solid #e4e6e9;
  padding: 0 5px;
}

.fineprint {
  font-size: 1em;
  margin-right: 15px;
  margin-bottom: 10px;
}

.intro {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  padding: 0 10px;
  align-self: flex-start;
}

.intro h1 {
  margin-bottom: 5px;
}

.intro h2 {
  padding-top: 15px;
  border-top: lightgray 1px solid;
  margin-bottom: 5px;
}

@media only screen and (min-width: 600px) and (max-width: 800px) {
  .signin-box {
    max-width: 75%;
    margin-top: 30px;
  }
}

@media only screen and (min-width: 800px) {
  .signin-box {
    max-width: 550px;
    margin-top: 30px;
    padding: 40px 40px 40px 40px;
  }
}

</style>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      usernameLogin: '',
      passwordLogin: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      error: '',
      errorLogin: '',
      comments: {}
    }
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
    this.getComments();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  mounted: function() {
    document.getElementById('app').className = 'login';
    document.getElementById('prefooter').className = 'login';
  },
  beforeDestroy: function() {
    document.getElementById('app').className = '';
    document.getElementById('prefooter').className = '';
  },
  methods: {
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.lastName || !this.username || !this.password)
        return;
      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        });
        this.$root.$data.user = response.data.user
        this.getComments();
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
      this.firstName = '';
      this.lastName = '';
      this.username = '';
      this.password = '';
    },
    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin)
        return;
      try {
        let response = await axios.post('/api/users/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
        this.getComments();
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
      this.usernameLogin = '';
      this.passwordLogin = '';
    },
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getComments() {
      try {
        let response = await axios.get("/api/comments");
        this.comments = response.data
      } catch (error) {
        //console.log(error)
      }
    }
  }
}
</script>