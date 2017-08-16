/* @ngInject */
class findService {
  constructor ($http, $map) {
	this.$map = $map
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
	    	if(this.start.toLowerCase() == item.origin.toLowerCase() && this.dest.toLowerCase() == item.destination.toLowerCase()) {
	    		this.route.push(item)
	    		//return item;
	    	} //else
	    		//return null;
	    })	
	    return this.route
	}
	
	checkConnecting(lay) {
		console.log("checking for connecting flight")
		this.allFlights.forEach((item) => {
	    	if(lay.toLowerCase() == item.origin.toLowerCase() && this.dest.toLowerCase() == item.destination.toLowerCase()
	    			&& item.offset >= (this.flightTime - 1)) {
	    		this.connectingFlight = item
	    		this.route.push(item)
	    	}
	    })
	    return this.route
	}
	
	getRoute() {
		console.log("getting flight route")
		this.singleFlight()
		if(this.route.length > 0) {
			console.log("direct flight ")
			console.log(this.route)
	    	return this.route
		} else {
			this.allFlights.some((item) => {
			if(item.origin.toLowerCase() == this.start.toLowerCase()){
				this.flightTime = item.offset + item.flightTime
				this.route.push(item)
				this.layover = item.destination
				this.checkConnecting(this.layover)
				if(this.route.length > 1){
					return this.route
				}
				else{
					this.route.pop()
					console.log("pop")
				}
			}
			})
		}
//	    this.route.forEach(item => {
//	    	$map.addPath(item.origin, item.destination, BLUE)
//	    })
		console.log(this.route)
		//$state.go($state.book, {}, {reload: true})
	}
}
export default findService