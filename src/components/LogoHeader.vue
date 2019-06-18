<template>
  <header class="header">
    <img class="icon icon-flower-hr" src="@/assets/images/flower-hr.svg" />
    <img class="logo" svg-inline src="@/assets/images/logo.svg" />
    <img class="splash" src="@/assets/images/splash-bg.png">
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6rem 0;

    @include min-sm {
      margin: 4rem 0 8rem 0;
    }
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

  .splash {
    position: absolute;
    top: 5rem;
    z-index: -1;
    
    width: 100%;
    max-width: 560px;
    transform: translateY(5rem) translateX(5rem) scale(1.6);
  }

  @include min-xs {
    .splash {
      transform: translateY(3rem) translateX(5rem) scale(1.2);
    }
  }
  
  @include min-sm {
    .icon-flower-hr {
      margin-bottom: 6rem;
    }

    .logo {
      width: 438px;
      height: 285px;
    }

    .splash {
      max-width: 800px;
      transform: translateY(2rem) translateX(5rem);
    }
  }
</style>