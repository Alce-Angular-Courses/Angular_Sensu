class  CabezaController {
    constructor () {}
    $onInit() {
        this.sTitulo = 'Rutas en AngularJS'; 
    }
}

    angular.module('appMain')
    .component('appCabeza', {
        templateUrl: './app/components/appCabeza.partial.html',
        controller: CabezaController
    });

