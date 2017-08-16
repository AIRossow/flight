/* @ngInject */
class findService {
  constructor ($http) {
    this.$http = $http
    this.start = ""
    this.dest = ""
    this.layover = ""
    this.route = []
    this.flightTime = 0
    this.connectingFlight
  }

	findFlights () {
	    return this.$http
	    .get('http://localhost:8000/flights')
	    .then(result => {
	    	this.allFlights = result.data
	    	return result.data
	    	})
	}
	
	singleFlight() {
		console.log("here")
	    this.allFlights.forEach((item) => {
	    	this.flightTime = item.offset + item.flightTime
	    	if(this.start.toLowerCase() == item.origin.toLowerCase() && this.dest.toLowerCase() == item.destination.toLowerCase()) {
	    		this.route.push(item)
	    		return true;
	    	} else
	    		return false;
	    })	
	}
	
	checkConnecting(lay) {
		console.log("checking for connecting flight")
		this.allFlights.forEach((item) => {
	    	if(lay.toLowerCase() == item.origin.toLowerCase() && this.dest.toLowerCase() == item.destination.toLowerCase()) {
	    		this.route.push(item)
	    		console.log("added here")
	    		return true;
	    	} else
	    		return false;
	    })
	}
	
	getRoute() {
		console.log("getting flight route")
		if(this.singleFlight() != null) {
	    	return true;
		} else {
			this.allFlights.forEach((thing) => {
	    	//this.flightTime = item.offset + item.flightTime
	    	this.layover = thing.destination
	    	//console.log(this.layover)
	    	if(this.checkConnecting(this.layover)) {
	    		console.log(thing)
	    		this.route.push(thing)
	    		return true;
	    	}
			})
		}
	    console.log(this.route)
	}
}
export default findService