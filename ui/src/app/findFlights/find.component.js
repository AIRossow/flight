import templateUrl from './find.component.html'

/* @ngInject */
class findController {
  constructor ($log, $http, $map, findService) {
	  this.$map = $map
	  this.$http = $http
	this.findService = findService
    $log.log('FindController is a go.')  
    
    findService.findFlights().then((data) => {
    	this.flights = data;
    });
  }

}

export default {
  templateUrl,
  controller: findController,
  controllerAs: '$findCtrl'
}
