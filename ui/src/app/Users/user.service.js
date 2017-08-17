/* @ngInject */
class findService {
  constructor ($http, $map, $state) {
	this.$map = $map
    this.$http = $http
    this.$state = $state
    this.username = ""
    this.password = ""
  }

  register() {
	    console.log(this.username +" "+ this.password) 
	    return this.$http({
	      method: 'GET',
	      params: { username: this.username, password: this.password},
	      url: 'http://localhost:8000/users/register'
	    }).then(result =>{
	       sessionStorage.setItem('username', this.username)
	       sessionStorage.setItem('password', this.password)
	       this.$state.go('allFlight')
	    })
	 }
  
  login() {
	    console.log(this.username +" "+ this.password) 
	    return this.$http({
	      method: 'GET',
	      params: { username: this.username, password: this.password},
	      url: 'http://localhost:8000/users/login'
	    }).then(result =>{
	       sessionStorage.setItem('username', this.username)
	       sessionStorage.setItem('password', this.password)
	       this.$state.go('allFlight')
	    })
	 }
 
}
export default findService