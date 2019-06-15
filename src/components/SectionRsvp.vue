<template>
  <section>
    <img class="icon icon-flower-hr" src="@/assets/images/flower-hr.svg" />

    <div class="header" v-if="isSuccess">
      <div class="heading">Thanks for RSVPing</div>
      <p>We look forward to seeing you there!</p>
    </div>

    <form class="form" @submit.prevent="submit" v-else>
      <div class="header">
        <div class="heading">RSVP</div>
      </div>

      <div class="fieldset">
        <div class="field" :class="{ 'field--error': $v.fields.name.$error && $v.$dirty }">
          <label for="name">Name</label>
          <input name="name" id="name" type="text" v-model="$v.fields.name.$model">
          <div class="error" v-if="!$v.fields.name.required && $v.fields.$dirty">Name is required</div>
        </div>
        <div class="field" :class="{ 'field--error': $v.fields.email.$error && $v.$dirty }">
          <label for="email">Email</label>
          <input name="email" id="email" type="text" v-model="$v.fields.email.$model">
          <div class="error" v-if="!$v.fields.email.required && $v.fields.$dirty">Email is required</div>
          <div class="error" v-if="!$v.fields.email.email && $v.fields.$dirty">Must be a valid email</div>
        </div>
      </div>

      <div class="fieldset">
        <div class="field field--full" :class="{ 'field--error': $v.fields.attending.$error && $v.$dirty }">
          <label for="attending">Will you attend?</label>
          <select name="attending" id="attending" v-model.number="$v.fields.attending.$model">
            <option value="" disabled>--Please select one--</option>
            <option value="Yes">Yes, can't wait!</option>
            <option value="No">No, devistated I can't make it.</option>
          </select>
          <div class="error" v-if="!$v.fields.attending.required && $v.fields.$dirty">Please select one</div>
        </div>
      </div>

      <div class="fieldset" v-if="isAttending">
        <div class="field field--full" :class="{ 'field--error': $v.fields.meal.$error && $v.$dirty }">
          <label for="meal">Meal preference</label>
          <select name="meal" id="meal" v-model.number="$v.fields.meal.$model">
            <option value="" disabled>--Please select one--</option>
            <option value="Anything">I eat anything</option>
            <option value="Other">Other (please add in notes)</option>
          </select>
          <div class="error" v-if="!$v.fields.meal.required && $v.fields.$dirty">Please select one</div>
        </div>
      </div>

      <div class="fieldset" v-if="isAttending">
        <div class="field" :class="{ 'field--error': $v.fields.adults.$error && $v.$dirty }">
          <label for="adults"># of adults</label>
          <select name="adults" id="adults" v-model.number="$v.fields.adults.$model">
            <option value="" disabled>--Please select one--</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <div class="error" v-if="!$v.fields.adults.required && $v.fields.$dirty"># of adults is required</div>
        </div>

        <div class="field" :class="{ 'field--error': $v.fields.children.$error && $v.$dirty }" v-if="isAttending">
          <label for="children"># of children</label>
          <select name="children" id="children" v-model.number="$v.fields.children.$model">
            <option value="" disabled>--Please select one--</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <div class="error" v-if="!$v.fields.children.required && $v.fields.$dirty"># of children is required</div>
        </div>

        <div class="field" :class="{ 'field--error': $v.fields.beds.$error && $v.$dirty }" v-if="isAttending">
          <label for="beds"># of beds</label>
          <select name="beds" id="beds" v-model.number="$v.fields.beds.$model">
            <option value="" disabled>--Please select one--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
          </select>
          <div class="error" v-if="!$v.fields.beds.required && $v.fields.$dirty"># of beds is required</div>
        </div>
      </div>

      <div class="fieldset">
        <div class="field field--full">
          <label for="notes">Notes</label>
          <textarea id="notes" name="notes" rows="8" v-model="fields.notes" placeholder="Please attach any extra notes that we may need to know about."></textarea>
        </div>
      </div>
      
      <div class="form-footer">
        <button type="submit">Submit</button>
      </div>
    </form>
  </section>
</template>

<script> 
  import axios from 'axios';
  import { required, minLength, email, requiredIf } from 'vuelidate/lib/validators'

  export default {
    name: 'SectionRsvp',

    data: vm => ({
      fields: {
        name: '',
        email: '',
        attending: '',
        meal: '',
        adults: null,
        children: null,
        beds: null,
        notes: '',
      },
      
      isSuccess: false
    }),

    computed: {
      isAttending () {
        return this.fields.attending === 'Yes' ? true : false;
      }
    },

    validations() {
      let rules = {
        name: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        },
        attending: {
          required
        },
      }

      if (this.isAttending) {
        rules = {
          ...rules,
          meal: {
            required
          },
          adults: {
            required
          },
          children: {
            required
          },
          beds: {
            required
          }
        }
      }

      return {
        fields: rules
      };
    },

    watch: {
      isAttending: function (bool) {
        if (bool) return;

        this.fields.adults = null;
        this.fields.children = null;
        this.fields.beds = null;
      }
    },

    methods: {
      submit() {
        let formData = JSON.parse(JSON.stringify(this.$data.fields));

        this.$v.fields.$touch(); // Triggers Vuelidate to run validations
        if (this.$v.fields.$invalid) return;

        axios({
          method: 'post',
          url: 'https://app.99inbound.com/api/e/WevQhCuJ',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          data: formData
        })
        .then((response) => { 
          console.log(response);
          this.isSuccess = true;
        })
      }
    }
  };
</script>

<style scoped lang="scss">

  .icon-flower-hr {
    display: block;
    margin: 0 auto 6rem auto;

    @include min-sm {
      display: none;
    }
  }

  .header {
    margin: 0 1rem;
    text-align: center;
  }

  .heading {
    margin-bottom: 2rem;
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
    select,
    textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #AD8D82;
      color: #AD8D82;
      font-size: inherit;
    }

    &--full {
      @include min-sm {
        width: 100%;
      }
    }

    &--error {
      input {
        border-color: red;
      }
    }

    .error {
      margin-top: 0.5rem;
      color: red;
    }
  }
</style>