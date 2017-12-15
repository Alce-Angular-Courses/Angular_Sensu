
class  InicioComponent {
    constructor () {}
    $onInit() {
        this.sTitulo = 'Rutas en AngularJS'; 
    }
}

    angular.module('appMain')
    .component('appInicio', {
        templateUrl: './app/components/appInicio.partial.html',
        controller: InicioComponent
    });