/* @ngInject */
function RoutesConfig($stateProvider, $urlRouterProvider) {

	$stateProvider.state('Start',
			{
				url :'/',
				component : 'user'
			}
	);
    $stateProvider.state('allFlight',
        {
            url: '/flightHome',
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
        		url: '/bookFlights',
        		component: 'bookFlights'
       				
       		 
        	}
        );
    
  
  $urlRouterProvider.otherwise('/');

}

export default RoutesConfig
