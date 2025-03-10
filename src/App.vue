<script setup lang="ts">
import Home from './components/Home.vue'
import Nav from './components/Nav.vue'
</script>

<template>
  <div class="container">
    <header>
      <Nav />
    </header>
    <div class="section">
      <Home msg="Sébastien Roy" />
        <p>
          <img src="/src/assets/seroy.jpg" class="avatar" alt="profile pic" />
        </p>
        <h1>
          <b>About me</b>
        </h1>
          <p>I finished the common core at 42 and I'm now looking for work opportunities or internships as a programmer.</p>
    </div>
    <div class="section">
      <h1>
        <b>Technologies</b>
      </h1>
        <div>
          <span class="tooltip"><img src="./assets/C_Programming_Language.png" width="100" height="100"/><span class="tooltiptext">C</span></span>
          <span class="tooltip"><img src="./assets/cpp.png" width="100" height="100"/><span class="tooltiptext">C++</span></span>
          <span class="tooltip"><img src="./assets/docker.png" width="100" height="100"/><span class="tooltiptext">Docker</span></span>
          <span class="tooltip"><img src="./assets/git.png" width="100" height="100"/><span class="tooltiptext">Git</span></span>
          <span class="tooltip"><img src="./assets/gnu-bash.png" width="100" height="100"/><span class="tooltiptext">Bash</span></span>
          <span class="tooltip"><img src="./assets/html.png" width="100" height="100"/><span class="tooltiptext">HTML5</span></span>
          <span class="tooltip"><img src="./assets/js.png" width="100" height="100"/><span class="tooltiptext">Javascript</span></span>
          <span class="tooltip"><img src="./assets/virtualbox.avif" width="100" height="100"/><span class="tooltiptext">Virtual Box</span></span>
        </div>
    </div>
    <div class="section">
      <h1>
        <b>Projects</b>
      </h1>
        <p left="align">
          <li>ft_transcendence</li>
          <li>webserv</li>
          <li>inception</li>
          <li>cub3d</li>
        </p>
    </div>
  </div>

</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  bottom: 2%;
  transform: translateX(-90%);
  position: absolute;
  z-index: 1;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
