const axios = require('axios')
const queryString = require('query-string')

const baseURL = "https://api.data.gov/ed/collegescorecard/v1/schools"
const api_key = process.env.VUE_APP_API_KEY

function completeQueryString(obj) {
  obj = {api_key, ...obj}
  console.log(`obj: `, obj)
  let string = queryString.stringify(obj, {arrayFormat: 'comma'})
  console.log(`string: `, string)
  return `?${string}`
}

export const Scorecard = {
  search(obj) {
    let querystring = completeQueryString(obj);
    console.log(`querystring: `,querystring)
    //builds complete url to College Scorecard API
    return axios.get(`${baseURL}${querystring}`)
    .then(response=> {
      console.log(`response.data.results: `,response.data.results);
      //first, find total number of universities results from search
      // let total = response.data.metadata.total;
      //array of university objects
      let universityArray = response.data.results.map(university => ({
        id: university.id,
        name: university["school.name"],
        city: university["school.city"],
        state: university["school.state"],
        URL: university["school.school_url"],
        size: university["latest.student.size"],
        admission: university["latest.admissions.admission_rate.overall"],
        costAcademic: university["latest.cost.attendance.academic_year"],
        costProgram: university["latest.cost.attendance.program_year"]
      }));
      //return array with index 0 as the total number of results, the rest university objects
      // let results = [total, universityArray];
      console.log(`universityArray: `, universityArray)
      // return results.flat();
      return universityArray;
    })
    .catch(error => console.error(error));
  }
  }