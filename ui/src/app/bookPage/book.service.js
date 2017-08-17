/* @ngInject */
class bookService {
  constructor ($http, $map, $state) {
    this.$http = $http
    this.$map = $map
    this.$state = $state
    this.username = ""
    this.password = ""
 
  }

  bookFlight(flight) {
	  		this.username = sessionStorage.getItem('username')
	  		this.password = sessionStorage.getItem('password')
	  		console.log(flight) 
		    return this.$http({
		      method: 'GET',
		      params: { username: this.username, password: this.password, flightId: flight.id},
		      url: 'http://localhost:8000/users/bookFlight'
		    }).then(result =>{
		       console.log("Flight " + flight.id +" booked")
		    })
  }
}
export default bookService