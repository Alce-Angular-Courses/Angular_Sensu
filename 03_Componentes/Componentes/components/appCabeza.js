class  CabezaController {
    constructor () {}
    $onInit() {
        this.sTitulo = 'Curso de Angular JS y Bootstrap'; 
    }
}

    angular.module('appMain')
    .component('appCabeza', {
        templateUrl: './components/appCabeza.partial.html',
        controller: CabezaController
    });

