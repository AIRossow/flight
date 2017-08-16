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
	    	this.flightTime = item.offset + item.flightTime
	    	if(this.start.toLowerCase() == item.origin.toLowerCase() && this.dest.toLowerCase() == item.destination.toLowerCase()) {
	    		this.route.push(item)
	    		return item;
	    	} else
	    		return null;
	    })	
	}
	
	checkConnecting(lay) {
		console.log("checking for connecting flight")
		this.allFlights.forEach((item) => {
	    	if(lay.toLowerCase() == item.origin.toLowerCase() && this.dest.toLowerCase() == item.destination.toLowerCase()
	    			&& item.offset >= (this.flightTime - 1)) {
	    		this.connectingFlight = item
	    		this.route.push(item)
	    		return item;
	    	}
	    })
	    return null;
	}
	
	getRoute() {
		console.log("getting flight route")
		if(this.singleFlight() != null) {
	    	return this.route
		} else {
			this.allFlights.some((item) => {
			if(item.origin.toLowerCase() == this.start.toLowerCase()){
				this.flightTime = item.offset + item.flightTime
				this.route.push(item)
				this.layover = item.destination
				if(this.checkConnecting(this.layover) == null){
					this.route.pop()
					console.log("pop")
				}
				else{
					this.route.push(this.connectingFlight)
				}
			}
	
			
//			if(this.checkConnecting(this.layover) != null) {
//				this.route.push(this.connectingFlight)
//			} else {
//				this.route.pop(item)
//			}
//THIS IS TRYING TO DO IT IN ONE FUNCTION
//			this.route.push(this.allFlights.find(this.checkConnecting))
//	    	if(this.layover.toLowerCase() == item.origin.toLowerCase() && this.dest.toLowerCase() == item.destination.toLowerCase()
//	    		&& item.offset >= (this.flightTime - 1)) {
//	    		this.route.push(item);
//	    	}
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