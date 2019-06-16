<template>
  <section>
    <div class="watercolour">
      <img class="img" src="@/assets/images/watercolour.png" alt="">
      <img class="line" svg-inline src="@/assets/images/watercolour-line.svg" />
    </div>
    <div class="text">
      <p>During our travels we took a road through Tuscany with the goal of sampling the Italian culinary delights that make that region so famous. During that trip we stayed in multiple beautiful Italian Agriturismos, and Locanda Casanuova was definitely a stand out. Set in the beautiful Tuscan countryside just south of Florence they grow their own produce, make their own olive oils and most importantly, make their own delicious wine.</p>

      <p>We would love for you to join us for three nights to celebrate our commitment, and who are we kidding, have a hell of a party!</p>
      <span class="signature">James + Kristie xx</span>
    </div>
  </section>
</template>

<script> 
  export default {
    name: 'SectionIntro'
  };
</script>

<style scoped lang="scss">
  img {
    width: 100%;
  }

  .signature {
    font-family: 'Quentin';
    font-size: var(--h2);
  }

  .watercolour {
    margin: 0 -2rem 2rem;

    .img {
      max-width: 540px;
    }

    .line {
      display: none;
    }
  }
  
  @include min-sm {
    section {
      display: flex;
    }

    img {
      width: auto;
    }

    .watercolour {
      position: relative;
      order: 1;

      .line {
        position: absolute;
        right: -6.6rem;
        top: 29rem;
        display: block;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      order: 0;
      margin-right: 3rem;
    }
  }
</style>