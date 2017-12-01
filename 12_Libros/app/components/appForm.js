class FormController {
    
        constructor (LibrosMock) {
            this.LibrosMock = LibrosMock
        }
        $onInit () { 
            this.aLibros = []
            this.clave = '';           
        }

        buscar () {
            this.aLibros = this.LibrosMock.buscar(this.clave)
            this.clave = '';         
        }
    }
    
angular.module('appMain')
.component('appForm', {
    templateUrl: './app/components/appForm.partial.html',
    controller: FormController
});
    