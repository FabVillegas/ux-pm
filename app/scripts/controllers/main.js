'use strict';

/**
 * @ngdoc function
 * @name usariaUxpmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the usariaUxpmApp
 */
angular.module('usariaUxpmApp').controller('MainCtrl', function ( $scope, $document, $http ) {
	console.log( '( ͡° ͜ʖ ͡°)' );
	console.log( 'Fabritzio Villegas' );

	var duration = 1000; // 1 s
	var offset = 100; //pixels; adjust for floating menu, context etc

	$scope.scroll = function ( elementName ) {
		var targetElement = angular.element( document.getElementById( elementName ) );
		$document.scrollToElement( targetElement, offset, duration );

		var menuElement = angular.element( document.getElementById( 'js-navbar-collapse' ) );
		menuElement.removeClass( 'in');
		menuElement.addClass( 'collapse ');
	};

	$scope.sendEmail = function() {
		$http({
			url: 'resources/email.script.php',
			method: 'GET'
		})
		.success( function( response ) {
			console.log( 'success response >');
			console.log( response );
		})
		.error( function( rejection ) {
			console.log( 'error rejection > ');
			console.log( rejection );
		});
	};


});
