const fetch = require('isomorphic-fetch')
const BASE_URL = 'http://localhost:5000'

export default {
  get: (endpoint, callback) =>
    fetch(BASE_URL + endpoint)
      .then(data => data.json())
      .then(callback)
      .catch(console.log)
}
