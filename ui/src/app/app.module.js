import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
import findComponent from './find.component.js'
import bookComponent from './bookPage/book.component.js'
import userComponent from './Users/user.component.js'
import routesConfig from './routs.config.js'
import findService from './find.service.js'
import userService from './Users/user.service.js'
import bookService from './bookPage/book.service.js'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      flightMap
    ])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    .component('findAllFlights', findComponent)
    .component('bookFlights', bookComponent)
    .component('user', userComponent)
    .service('userService', userService)
    .service('findService', findService)
    .service('bookService', bookService)
    .config(routesConfig)
    .name
