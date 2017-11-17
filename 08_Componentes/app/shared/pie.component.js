class PieController {
        constructor () {}
        $onInit() { 
            this.sAutor="Alejandro L. Cerezo";
			this.sEmpresa = "CAS Training";
			this.fecha = new Date();
        };
    
    }
    
    angular.module("sharedModule")
    .component('appPie', {
    
        templateUrl: './app/shared/pie.component.html',
        controller: PieController,
        //bindings: {
        //    Binding: '=',
        //},
    
    });