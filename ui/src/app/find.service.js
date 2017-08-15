/* @ngInject */
class findService {
  constructor ($http) {
    this.$http = $http
  }

	findFlights () {
	    return this.$http
	    .get('http://localhost:8000/flights')
	    .then(result => {
	    	console.log(result.data)
	    	return result.data
	    	})
	}
}
export default findService