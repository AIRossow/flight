import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
import findComponent from './find.component.js'
import bookComponent from './bookPage/book.component.js'
import routesConfig from './routs.config.js'
import findService from './find.service.js'

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
    .service('findService', findService)
    .config(routesConfig)
    .name
