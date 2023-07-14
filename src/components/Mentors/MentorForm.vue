<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.value"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">First Name cannot be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.value"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Last Name cannot be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="5"
        v-model="description.value"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description cannot be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="hourlyRate">Hourly Rate</label>
      <input
        type="number"
        id="hourlyRate"
        v-model.number="rate.value"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Please select valid rate</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.value"
        />
        <label for="frontend" :class="{ invalid: !areas.isValid }"
          >Frontend Development</label
        >
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.value"
        />
        <label for="backend" :class="{ invalid: !areas.isValid }"
          >Backend Development</label
        >
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.value"
        />
        <label for="career" :class="{ invalid: !areas.isValid }"
          >Career Advisory</label
        >
      </div>
      <p v-if="!areas.isValid">Atleast one expertise should be selected</p>
    </div>
    <p v-if="!formIsValid">
      Please fix the above errors and submit the form again !!
    </p>
    <base-button>Register</base-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      areas: {
        value: [],
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    // to clear the red colour when user enters in input field and input field's focus is blurred
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if (this.description.value === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.rate.value === '' || this.rate.value < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.value.length === 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) return;
      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        description: this.description.value,
        areas: this.areas.value,
        hourlyRate: this.rate.value,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #2ca00f;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #2ca00f solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
