<template>
  <v-app>
    <v-app-bar 
    color="purple" 
    dense
    app
    class="d-flex justify-center"
    dark
    >
    <div class="align-center text-h2" >
      Search for a College
    </div>

    </v-app-bar>

    <v-main>
      <college />
    </v-main>
  </v-app>
</template>

<script>

import College from './components/College';

export default {
  name: 'App',

  components: {
    College
  },

  data: () => ({
    //
  }),
};
</script>
