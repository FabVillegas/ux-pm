'use strict';

/**
 * @ngdoc function
 * @name usariaUxpmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the usariaUxpmApp
 */
angular.module('usariaUxpmApp').controller('MainCtrl', function ( $scope, $document ) {
	console.log( '( ͡° ͜ʖ ͡°)' );
	console.log( 'Fabritzio Villegas' );

	var duration = 1000; // 1 s
	var offset = 125; //pixels; adjust for floating menu, context etc

	$scope.scroll = function ( elementName ) {
		var targetElement = angular.element( document.getElementById( elementName ) );
		$document.scrollToElement( targetElement, offset, duration );
	};


});
