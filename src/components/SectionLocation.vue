<template>
  <section class="gallery">
    <img src="@/assets/images/gallery/1.jpg" alt="">
    <img src="@/assets/images/gallery/2.jpg" alt="">
    <img src="@/assets/images/gallery/3.jpg" alt="">
    <img src="@/assets/images/gallery/4.jpg" alt="">
    <img src="@/assets/images/gallery/5.jpg" alt="">
    <img src="@/assets/images/gallery/6.jpg" alt="">
    <img src="@/assets/images/gallery/7.jpg" alt="">

    <div class="text">
      <h3 class="h2">Accomodation</h3>
      <p>The agriturismo sleeps around 40 people and will be reserved for family and the bridal party. There is plenty of accommodation very close to the location that our coordinator will help organise for us. Average price is around €65 pp per night, including breakfast.</p>
      <a class="link" href="https://casanuova.info/" target="_blank">Find out more &raquo;</a>
    </div>
    
    <div class="illustration">
      <img class="flowers" svg-inline src="@/assets/images/flowers.svg" />
      <img class="line" svg-inline src="@/assets/images/flowers-line.svg" />
    </div>
  </section>
</template>

<script> 
  export default {
    name: 'SectionLocation'
  };
</script>

<style scoped lang="scss">
  img {
    width: 100%;
  }
  
  .illustration {
    .flowers,
    .line {
      display: none;
    }
  }

  .text {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  @include min-sm {
    .illustration {
      .flowers,
      .line {
        display: block;
      }
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(8, 14rem);
      grid-gap: 2rem;
    }

    .text {
      grid-column-start: 4;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 4;
      
      margin-top: 0;
      margin-bottom: 0;
    }

    .illustration {
      position: relative;
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 6;
      grid-row-end: 9;
      
      .flowers {
        width: 100%;
      }

      .line {
        position: absolute;
        left: 110px;
        top: 300px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    img:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 4;
    }

    img:nth-child(2) {
      grid-column-start: 3;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 4;
    }

    img:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 4;
      grid-row-end: 6;
    }

    img:nth-child(4) {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 6;
    }

    img:nth-child(5) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6;
    }

    img:nth-child(6) {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 6;
      grid-row-end: 8;
    }

    img:nth-child(7) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 6;
      grid-row-end: 8;
    }
  }
</style>