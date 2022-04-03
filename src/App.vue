<template>
  <header>
    <div class="header">
      <router-link to="/"><h1 class="logo">Tsukasa Doi</h1></router-link>
      <div class="gnav">
        <ul>
          <router-link to="/"><li>Home</li></router-link>
          <!-- <a href="../public/index.html/#pf"><li>Portfolio</li></a> -->
          <router-link to="/about"><li>About</li></router-link>
          <router-link to="/History"><li>History</li></router-link>
        </ul>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<style>
    @import "./../css/reset.css";
    @import "./../css/style.css";
    @import "./../css/about.css";
    @import "./../css/history.css";
    @import "./../css/underLayer.css";
    @import "./../css/underLayerPortfolio.css";
    @import "./../css/underLayerPortfolio_template.css";
</style>

