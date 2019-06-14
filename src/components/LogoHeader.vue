<template>
  <header class="header">
    <img class="icon icon-flower-hr" svg-inline svg-sprite src="@/assets/images/flower-hr.svg" />
    <img class="logo" svg-inline src="@/assets/images/logo.svg" />
    <h2>
      September 6, 7 & 8, 2020
      <br>
      Tuscany
    </h2>
  </header>
</template>

<script> 
  export default {
    name: 'LogoHeader'
  };
</script>

<style scoped lang="scss">
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem 0;
  }

  h2 {
    font-family: 'Garamond';
    font-style: italic;
    font-size: 2.2rem;
    text-align: center;
  }

  .logo {
    margin: 0 auto;
  }

  .icon-flower-hr {
    margin-bottom: 4rem;
  }
</style>