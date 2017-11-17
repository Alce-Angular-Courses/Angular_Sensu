class DirectivaController {

    $onInit () {
        this.name = "Luis"
    }
}

function miDirectiva () {
    return {

        restrict: 'A',
        template: `
            <p>
                Esto es una directiva que saluda a {{$ctrl.name}}
            </<p>`,
        // replace, 
        scope: {
            
        },
        controllerAs: '$ctrl',
        // bindToController: true,       
        controller: DirectivaController,
        link: link
        // link : function (scope, element, attrs) {} 
    }

    function link(scope, element, attrs) {
        console.log(scope)
        console.log(element)
        console.log(attrs)

        element.addClass("roja")
        element.removeClass("verde")
        //attrs.setClass();
    }
}

angular.module("appModule", [])
.controller('AppController', ['$scope', function($scope){

	$scope.message = 'I love AngularJS';
	
}])

.directive('helloWorld', function() {
	return {
		restrict: 'AEC',
		replace: true,
        template: `
        <p ng-click="clearMessage()">
        Hello, World! {{message}} </p>`,
		link: function(scope, elem, attrs) {
			scope.$watch('message', function(value) {
				console.log('Message Changed!');
			});
			scope.clearMessage = function() {
				scope.message = '';
			}
			elem.bind('mouseover', function() {
				elem.css('cursor', 'pointer');
			});
		}
	}
});

angular.module("appMain")
.directive("miDirectiva", miDirectiva);
