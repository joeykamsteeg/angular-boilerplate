var application = angular.module('application',[
	'ngRoute',
	'ngResource'
]);

application.run(['$rootScope', '$location', '$templateCache', '$route','$sce', 
	function( $rootScope, $location, $templateCache, $route, $sce ){

		$rootScope.LoadView = function ( path ){
			if( $location.path() == "/" + viewpath ){
				$rootScope.ReloadView();
			}
			else{
				$location.path( __viewpath );
			}

			$rootScope.$saveApply();
		};

		$rootScope.ReloadView = function(){
			$route.reload();
		};

	}
]);