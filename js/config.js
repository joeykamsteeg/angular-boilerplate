application.config(['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/',{
			templateUrl: 'js/views/index.html',
			controller: 'indexController'
		})
		.otherwise({
			redirectTo: '/404'
		});
}]);