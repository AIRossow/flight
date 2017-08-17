import templateUrl from './user.component.html'

/* @ngInject */
class userController {
  constructor ($log, $http, $map, $state, userService) {
	    $log.log('UserController is a go.') 
	    this.$http = $http
	    this.$map = $map
	    this.$state = $state
	    this.userService = userService
  }

}

export default {
  templateUrl,
  controller: userController,
  controllerAs: '$userCtrl'
}