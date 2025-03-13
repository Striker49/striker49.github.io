<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      selectedLanguage: "en",
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem("lang", this.selectedLanguage);
      document.documentElement.setAttribute("lang", this.selectedLanguage);
    },
  },
  mounted() {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      this.selectedLanguage = storedLang;
      this.$i18n.locale = storedLang;
      document.documentElement.setAttribute("lang", storedLang);
    }
  },
});
</script>

<template>
  <div>
    <header class>
      <img src="/src/assets/sr2.png" alt="Language Icon" style="position: absolute; height: 5rem; width: 5rem; left: 0rem">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div style="position: absolute; top: 1rem; right: 1rem;">
          <a href="/src/assets/CV 2025_FR_EN.pdf.pdf" download="roy_sebastien" style="position: relative; margin-right: 3rem;"><img src="/src/assets/download-white.png" style="position: relative; height: 1rem; right: 0.5rem;">{{ $t("download") }}</a>
          <img src="/src/assets/languages.png" alt="Language Icon" style="position: relative; height: 2rem; right: 10px; top: 0.5rem">
          <label for="language" style="position: fixed; right: 0"></label>
          <select id="language" name="language" v-model="selectedLanguage" @change="changeLanguage">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
    </header>
    <div class="section" id="home">
      <H1>Sébastien Roy</H1>
        <p>
          <img src="/src/assets/seroy.jpg" class="avatar" alt="profile pic" style="filter: drop-shadow(0 0 1em #050958aa);" />
        </p>
        <h1>
          <b>{{ $t("aboutMe") }}</b>
        </h1>
          <p>{{ $t("aboutMeParagraph") }}</p>
    </div>
    <div class="section" id="skills">
      <h1>
        <b>{{ $t("technologies")}}</b>
      </h1>
        <div style="position: relative; top: 2rem;">
          <span class="tooltip"><img class="icon" src="./assets/C_Programming_Language.png" width="100" height="100"/><span class="tooltiptext">C</span></span>
          <span class="tooltip"><img class="icon" src="./assets/cpp.png" width="100" height="100"/><span class="tooltiptext">C++</span></span>
          <span class="tooltip"><img class="icon" src="./assets/docker.png" width="100" height="100"/><span class="tooltiptext">Docker</span></span>
          <span class="tooltip"><img class="icon" src="./assets/git.png" width="100" height="100"/><span class="tooltiptext">Git</span></span>
          <span class="tooltip"><img class="icon" src="./assets/gnu-bash.png" width="100" height="100"/><span class="tooltiptext">Bash</span></span>
          <span class="tooltip"><img class="icon" src="./assets/html.png" width="100" height="100"/><span class="tooltiptext">HTML5</span></span>
          <span class="tooltip"><img class="icon" src="./assets/js.png" width="100" height="100"/><span class="tooltiptext">Javascript</span></span>
          <span class="tooltip"><img class="icon" src="./assets/virtualbox.avif" width="100" height="100"/><span class="tooltiptext">Virtual Box</span></span>
        </div>
    </div>
    <div class="section" id="projects">
      <h1>
        <b>{{ $t("projects")}}</b>
      </h1>
        <ul class="projectList" style="position: relative; justify-content: center">
          <li class="project" data-img="/src/assets/game.png"><h2>ft_transcendence</h2><img src="/src/assets/game.png" height="400px" width="500"><div class="projectDesc">{{ $t("transcendenceDesc") }}</div></li>
          <li class="project" data-img="/src/assets/no_Image_Available.jpg"><h2 class="project">Webserv</h2><div><img src="/src/assets/no_Image_Available.jpg" alt="Webserv image" height="400px"><div>{{ $t("webservDesc") }}</div></div></li>
          <li class="project" data-img="/src/assets/no_Image_Available.jpg"><h2 class="project">Inception</h2><div><img src="/src/assets/no_Image_Available.jpg" alt="Inception image" height="400px"><div>{{ $t("inceptionDesc") }}</div></div></li>
          <li class="project" data-img="/src/assets/cub3d.gif"><h2 class="project">Cub3D</h2><div><img src="/src/assets/cub3d.gif" alt="Cub3D image" height="400px"><div>{{ $t("cub3dDesc") }}</div></div></li>
        </ul>
    </div>
  </div>
  <footer id="contact">
    <h2 style="position: relative; top: 1rem;">
      <b>{{ $t("contact")}}</b>
    </h2>
      <div>
        <ul style="position: relative; display: table; margin: 0 auto; text-align: left; top: 0rem; font-size: 16px">
          <li style="position: relative; margin-top: 0.5rem"><a href="mailto:roy_sebastien@hotmail.fr"><img src="/src/assets/mail.png" style="position: relative; height: 1rem; right: 1rem; top: 3px">roy_sebastien@hotmail.fr</a></li>
          <li style="position: relative; margin-top: 0.5rem"><a href="https://www.linkedin.com/in/sebastien-roy-prog/"><img src="/src/assets/linkedin.png" style="position: relative; height: 1rem; right: 1rem">LinkedIn</a></li>
          <li style="position: relative; margin-top: 0.5rem"><a href="https://github.com/Striker49"><img src="/src/assets/github-mark-white.png" style="position: relative; height: 1rem; right: 1rem">Github</a></li>
        </ul>
      </div>
    </footer>
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
 
  transform: translateX(-110%) translateY(-120%);
  position: absolute;
  z-index: 1;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
