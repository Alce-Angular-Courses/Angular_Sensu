class CabezaController {
    
        constructor () {}
        $onInit() {
            this.sTitulo="Componentes en Angular";
         };
    
    }
    
    
    angular.module("sharedModule")
    .component('appCabeza', {
    
        templateUrl: './app/shared/cabeza.component.html',
        controller: CabezaController,
        //bindings: {
        //    Binding: '=',
        //},
    
    });