class PadreController {
    
        constructor () {}
        $onInit() {
            this.oDatos = {}
        };
    
    }
    
    angular.module("mainModule")
    .component('appPadre', {
    
        templateUrl: './app/main/padre.component.html',
        controller: PadreController
    
    });