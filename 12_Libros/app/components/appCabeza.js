class  CabezaController {
    constructor () {}
    $onInit() {
        this.sTitulo = 'Servicios y Http'; 
    }
}

    angular.module('appMain')
    .component('appCabeza', {
        templateUrl: './app/components/appCabeza.partial.html',
        controller: CabezaController
    });

