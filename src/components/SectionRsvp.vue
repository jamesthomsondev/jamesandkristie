<template>
  <section>
    <form class="form" @submit.prevent="">
      <div class="header">
        <div class="heading">RSVP</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sit magni, repudiandae! Quisquam officiis quo nulla tenetur, architecto vel! Ipsum, odio nemo vitae repellat id ullam ad reiciendis dolor recusandae.</p>
      </div>

      <div class="fieldset">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" type="text" >
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="text">
        </div>
      </div>

      <div class="fieldset">
        <div class="field field--full">
          <label for="notes">Notes</label>
          <textarea id="notes" rows="8"></textarea>
        </div>
      </div>
      
      <div class="form-footer">
        <button type="submit">Submit</button>
      </div>
    </form>
  </section>
</template>

<script> 
  export default {
    name: 'SectionRsvp'
  };
</script>

<style scoped lang="scss">
  .heading {
    font-family: 'Quentin';
    font-size: 5rem;
    text-align: center;
  }

  .form-footer {
    text-align: center;
  }

  .fieldset {
    padding: 0;
    margin: 0;
    border: 0;

    @include min-sm {
      display: flex;
    }
  }
  
  .field {
    @include min-sm {
      width: 50%;
    }
    
    font-size: 1.4rem;
    margin: 1rem;

    label {
      display: block;
      font-family: 'Garamond';
      font-style: italic;
      font-size: inherit;
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #AD8D82;
      font-size: inherit;
    }

    &--full {
      @include min-sm {
        width: 100%;
      }
    }
  }
</style>