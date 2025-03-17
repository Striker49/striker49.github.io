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
      <img src="/src/assets/sr2.png" alt="Language Icon" style="position: absolute; height: 5rem; width: 5rem; left: 0rem;">
        <ul>
          <li><a href="#home">{{ $t("Home") }}</a></li>
          <li><a href="#skills">{{ $t("skills") }}</a></li>
          <li><a href="#projects">{{ $t("projects") }}</a></li>
          <li><a href="#contact">{{ $t("contact") }}</a></li>
        </ul>
        <div style="position: absolute; top: 1rem; right: 1rem;">
          <a href="/src/assets/CV 2025_FR_EN.pdf.pdf" download="roy_sebastien" id="download" style="position: relative; margin-right: 3rem;"><img src="/src/assets/download-white.png" style="position: relative; height: 1rem; right: 0.5rem;">{{ $t("download") }}</a>
          <img src="/src/assets/languages.png" alt="Language Icon" id="language-icon" style="position: relative; height: 2rem; right: 10px; top: 0.5rem">
          <label for="language" id="language" style="position: fixed; right: 0"></label>
          <select id="language" name="language" v-model="selectedLanguage" @change="changeLanguage">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
    </header>
    <div class="section" id="home">
      <H1 style="font-size: 4em;color:aliceblue">Sébastien Roy</H1>
        <p id="avatar">
          <img src="/src/assets/seroy.jpg" class="avatar" alt="profile pic" style="filter: drop-shadow(0 0 1em #050958aa);" />
        </p>
        <h1>
          <b>{{ $t("aboutMe") }}</b>
        </h1>
          <p>{{ $t("aboutMeParagraph") }}</p>
    </div>
    <div class="section" id="skills">
      <h1>
        <b>{{ $t("skills")}}</b>
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
        <ul class="project-list" id="project-list" style="position: relative; justify-content: center">
          <li class="project" data-img="/src/assets/game.png"><h2>ft_transcendence</h2><img src="/src/assets/game.png" height="400px" width="500"><div class="project-desc">{{ $t("transcendenceDesc") }}</div></li>
          <li class="project" data-img="/src/assets/webserv.png"><h2 class="project">Webserv</h2><div><img src="/src/assets/webserv.png" alt="Webserv image" height="400px"><div class="project-desc">{{ $t("webservDesc") }}</div></div></li>
          <li class="project" data-img="/src/assets/no_image.jpg"><h2 class="project">Inception</h2><div><img src="/src/assets/no_Image_Available.jpg" alt="Inception image" height="400px"><div class="project-desc">{{ $t("inceptionDesc") }}</div></div></li>
          <li class="project" data-img="/src/assets/cub3d.png" data-gif="/src/assets/cub3d.gif"><h2 class="project">Cub3D</h2><div><img class="static" src="/src/assets/cub3d.png" alt="Cub3D image" height="400px"><img class="active" src="/src/assets/cub3d.gif" alt="Cub3D gif" height="400px"><div class="project-desc">{{ $t("cub3dDesc") }}</div></div></li>
        </ul>
        <a href="/src/assets/CV 2025_FR_EN.pdf.pdf" download="roy_sebastien" style="position: relative; margin-right: 3rem; font-size: 2rem; top: 4rem;"><img src="/src/assets/download-white.png" style="position: relative; height: 2rem; right: 0.5rem;">{{ $t("download") }}</a>
      </div>
  </div>
  <footer id="contact">
    <h2 style="position: relative; color: #96003c;">
      <b>{{ $t("contactMe")}}</b>
    </h2>
      <div>
        <ul style="position: relative; display: table; margin: 0 auto; text-align: left; top: -1rem; font-size: 1em">
          <li style="position: relative; margin-top: 0.5rem"><a href="mailto:roy_sebastien@hotmail.fr"><img src="/src/assets/mail.png" style="position: relative; height: 1rem; right: 1rem; top: 3px">roy_sebastien@hotmail.fr</a></li>
          <li style="position: relative; margin-top: 0.5rem"><a href="https://www.linkedin.com/in/sebastien-roy-prog/"><img src="/src/assets/linkedin.png" style="position: relative; height: 1rem; right: 1rem">LinkedIn</a></li>
          <li style="position: relative; margin-top: 0.5rem"><a href="https://github.com/Striker49"><img src="/src/assets/github-mark-white.png" style="position: relative; height: 1rem; right: 1rem">Github</a></li>
        </ul>
      </div>
    </footer>
</template>




<style scoped>
</style>
