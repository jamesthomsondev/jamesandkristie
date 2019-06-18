<template>
  <section>
    <div class="watercolour">
      <img class="img" src="@/assets/images/watercolour.png" alt="">
      <img class="line" svg-inline src="@/assets/images/watercolour-line.svg" />
    </div>
    <div class="text">
      <p>During our travels we took a road trip through Tuscany with the goal of indulging in the Italian culinary delights that make that region so famous. During that trip we stayed in many beautiful Agriturismos, and Locanda Casanuova was by far the one that stole our hearts. Nestled in the hills of the breathtaking Tuscan countryside just south of Florence, Locanda Casanuova grow their own produce, make their own olive oils, and most importantly, craft their own delicious wine.</p>

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

      .img {
        max-width: 660px;
      }

      .line {
        position: absolute;
        right: -4.6rem;
        top: 36.5rem;
        display: block;
      }
    }

    .text {
      display: flex;
      flex: 1 0 40%;
      flex-direction: column;
      justify-content: flex-end;
      order: 0;
      margin-right: 3rem;
    }
  }
</style>