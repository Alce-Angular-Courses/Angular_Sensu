// Instanciamos el módulo principal de la aplicación
angular.module("appMain", [
    "ngRoute"
])

.config(['$locationProvider', function ($locationProvider){
    $locationProvider.html5Mode(true);
  }])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    .when('/',{
        template: '<app-inicio></inicio>',
        // controller: 'InicioContoller',
        // controllerAs: 'inicio'
    })
    .when('/about', {
        template: '<app-about></app-about>',
        // templateUrl: 'app/vistas/about.partial.html',
        // controller: 'AboutContoller',
        // controllerAs: 'about'
    }) 
}])