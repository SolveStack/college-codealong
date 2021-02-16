<template>
  <v-container fluid > 
    <v-card
    elevation="5"
    class="mx-auto mt-2"
    max-width="500"
    >
      <v-system-bar 
      color="purple darken-2" 
      dark
      >
      </v-system-bar>
      <v-toolbar  
      color="purple"
      dark
      >
        <v-toolbar-title>
          Search for a college by name:
        </v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12" >
            <input v-model="nameOfCollege" placeholder="Enter name" >
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn @click="searchByName">
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>


    </v-card>
  </v-container>
</template>

<script>
import { Scorecard } from '@/api/scorecard'

export default {
  name: 'College',
  data () {
    return {
      nameOfCollege: null,
      terms: {
          "school.name": null,
          "_fields": ["id", "school.name", "school.school_url", "school.city", "school.state", "school.price_calculator_url", "latest.admissions.admission_rate.overall", "latest.student.size", "latest.cost.attendance.academic_year", "latest.cost.attendance.program_year"],
          "per_page": 21,
          "page": 0,
          "school.operating" : 1
        },
        cards: []
    }
  },
  methods: {
    async searchByName() {
      this.terms["school.name"] = this.nameOfCollege
      await Scorecard.search(this.terms)
    }
  }
}
</script>

<style scoped>

</style>