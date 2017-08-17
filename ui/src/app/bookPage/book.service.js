/* @ngInject */
class bookService {
  constructor ($http, $map, $state) {
    this.$http = $http
    this.$map = $map
    this.$state = $state
    this.username = ""
    this.password = ""
    this.bookedFlights = []
    this.showBook = {visibility: 'hidden'}
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
  
  getBookedFlights(){
	   this.username = sessionStorage.getItem('username')
	   this.password = sessionStorage.getItem('password')
	   return this.$http({
		    method: 'GET',
		    params: { username: this.username, password: this.password},
		    url: 'http://localhost:8000/users/bookedFlight'
	   }).then(result =>{
		    console.log(result.data)
		    this.showBook = {visibility: 'visible'}
		    this.bookedFlights = result.data
	   })
  }
}
export default bookService