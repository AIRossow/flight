import templateUrl from './book.component.html'

/* @ngInject */
class bookController {
  constructor ($log, $http, $map, $state, findService) {
	    $log.log('BookController is a go.') 
	    this.$http = $http
	    this.$map = $map
	    this.$state = $state
	    this.findService = findService
	    
    	this.routes = findService.route;
  }

}

export default {
  templateUrl,
  controller: bookController,
  controllerAs: '$bookCtrl'
}