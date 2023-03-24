<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Consultants from '../components/Consultants.vue'
</script>

<template>
  <main>
    <Consultants v-on:inchat="inchat" />
  </main>
</template>

<script>
export default {
  name: "Father",
  data() {
    return {
      consultant: null
    };
  },
  methods: {
    inchat(consultant) {
      this.consultant = consultant;
      this.$emit('inchat', consultant)
    }
  }
};
</script>
