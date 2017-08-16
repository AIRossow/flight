//import $findCtrl from './find.component.js'
/* @ngInject */
function RoutesConfig($stateProvider, $urlRouterProvider) {

    $stateProvider.state('welcome',
        {
            url: '/',
            component: 'flightMap'
        }
    );
    $stateProvider.state('find',
    	{
    		url: '/flights',
    		component: 'findAllFlights'
   				
   		 
    	}
    );
    $stateProvider.state('book',
        	{
        		url: '/flights',
        		component: 'bookFlights'
       				
       		 
        	}
        );
    
  
  $urlRouterProvider.otherwise('/');

}

export default RoutesConfig
