(function(){
	var app = angular.module('iwZoom', []);

	app.directive('zoomer', ZoomerDirective);

	function ZoomerDirective() {

 		return {
 			restrict: 'EA',
 			replace: true,
 			transclude: true,
 			template: '<div class="iw-zoom-controller"><button ng-click="zoom.out()">-</button><input type="range" orient="vertical" min="0.75" max="2" step="0.25" value="{{ level }}" ng-model="level"><button ng-click="zoom.in()">+</button></div>',
 			scope: {
 				options: '='
 			},
 			controllerAs: 'zoom',
 			controller: function($scope) {
 				var options = {
 					step: 0.25,
 					min: 0.75,
 					max: 10.0,
 					defaultZoom: 1,
 					selector: 'iZoom'
 				}

 				if ($scope.options !== "undefined") {
 					options.step 		= $scope.options.step ? $scope.options.step : options.step;
 					options.min 		= $scope.options.min ? $scope.options.min : options.min;
 					options.max 		= $scope.options.max ? $scope.options.max : options.max;
 					options.selector 	= $scope.options.selector ? $scope.options.selector : options.selector;
 					options.defaultZoom	= $scope.options.defaultZoom ? $scope.options.defaultZoom : options.defaultZoom;
 				}

				var element = angular.element(document.querySelector(options.selector));

				if (!element.length) {
					throw 'iwZoom Directive did not find a valid selector. Attach the "i-zoom" attribute to an element or specify a valid ID|Class in the options attribute on the zoomer directive.';
				}
 					
 				$scope.$watch('level', function() { 					
 					element.css({
						"transition": "all 0.5s",
						"-webkit-transition": "all 0.5s",
						"-webkit-transition": "all 0.5s",
						"transform":  "scale(" + $scope.level + ")",
						"-webkit-transform": "scale(" + $scope.level + ")"
					});
 				});

 				$scope.level = options.defaultZoom;;

 				this.in = function(amount) {
 					$scope.level = $scope.level + (typeof amount !== "undefined" ? amount : options.step);

 					if ($scope.level > options.max) {
 						resetLevel();
 					}
 				}

 				this.out = function(amount) {
 					$scope.level = $scope.level -(typeof amount !== "undefined" ? amount : options.step);

 					if ($scope.level < options.min) {
 						resetLevel();
 					}
 				}

 				function resetLevel(amount) {
 					$scope.level = (typeof amount !== "undefined") ? amount : options.defaultZoom;
 				}

 			}
		}
	}
})();
