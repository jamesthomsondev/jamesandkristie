<template>
  <div id="app">
    <div class="container">
      <logo-header />
      <section-intro />
      <section-location />
      <section-rsvp />
    </div>
    <footer>
      <img class="icon icon-flower-hr" svg-inline svg-sprite src="@/assets/images/flower-hr.svg" />
    </footer>
  </div>
</template>

<script>
  import LogoHeader from './components/LogoHeader';
  import SectionIntro from './components/SectionIntro';
  import SectionLocation from './components/SectionLocation';
  import SectionRsvp from './components/SectionRsvp';

  export default {
    name: 'App',
    components: {
      LogoHeader,
      SectionIntro,
      SectionLocation,
      SectionRsvp,
    }
  }
</script>

<style lang="scss">
  @import "./assets/styles/base.scss";

  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  footer {
    padding: 2rem;
    text-align: center;
    color: #BDDCD3;
    background-color: #062934;
  }
</style>
