<template>
  <div id="app">
    <div id ="prefooter">
      <div id="menu">
        <router-link to="/"><div class="item" id="first">Home</div></router-link>
        <router-link to="/rank"><div class="item">Movie Arena</div></router-link>
        <router-link to="/login"><div class="item" id="last">My Account</div></router-link>
      </div>
      <router-view/>
    </div>
    <footer class="footer">
        <p>This website was made by Ryan King. View the GitHub repository <a
          href="https://github.com/ryanrking/movie-reviews" target="_blank">
          here.</a>
      </p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Serif', serif;
}

h1, h2, h3, h4, h5 {
  font-family: 'Poppins', sans-serif;
}

#app {
  position: relative;
  min-height: 100vh;
  background-color: rgb(240, 239, 239);
  background-image: none;
}

/* Change this to relative location! */
#app.login {
  background-image: url("../public/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  background-color: rgba(255, 255, 240, 0);
}

#prefooter.login {
  background-color: #420366b7;
  min-height: 100vh;
}

#menu {
  padding: 0px 5px;
  width: 100%;
  background-color: purple;
  margin-bottom: 20px;
  color: white;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: row;
}

#menu a {
  color: white;
  text-decoration: none;
}

.item {
  padding: 15px 15px
}

.item:first-of-type {
  padding-right: 15px;
  padding-left: 15px;
  border-right: 1px solid white;
}

#first {
  padding-left: 20px;
}

#last {
  border-right: none;
}

#prefooter {
  padding: 0 0 140px 0;
  background-color: inherit;
}

.footer {
  background-color: #acacac;
  padding: 0;
  margin: 0;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: absolute;
  bottom: 0;
  text-align: center;
}

.footer a {
  color: rgb(31, 31, 31);
}

.footer p {
  margin: 5px 5%;
  font-size: 1em;
  font-weight: normal;
}

@media only screen and (max-width: 350px) {
  #menu {
    font-size: .82em;
  }
}
</style>
