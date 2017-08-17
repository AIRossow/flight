import templateUrl from './find.component.html'

/* @ngInject */
class findController {
  constructor ($log, $http, $map, $state, findService) {
	    $log.log('FindController is a go.') 
	    this.$http = $http
	    this.$map = $map
	    this.$state = $state
	    this.findService = findService
    
    findService.findFlights().then((data) => {
    	this.flights = data;
    });
  }

}

export default {
  templateUrl,
  controller: findController,
  controllerAs: '$findCtrl',
}
