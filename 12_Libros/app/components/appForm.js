class FormController {
    
        constructor ($scope, LibrosMock) {
            this.$scope = $scope;
            this.LibrosMock = LibrosMock
        }
        $onInit () { 
            this.aLibros = []
            this.clave = '';           
        }

        buscar () {
             
            this.LibrosMock.buscar(this.clave)
            .then(
                response => {
                    this.aLibros = response
                    console.log(this.aLibros)
                    this.clave = ''; 
                    this.$scope.$digest()
                }, // se ejecuta si la promesa se resuelve
                (error) => {console.log(error)} // se ejecuta si la promesa es rechazada
            )      
        }
    }
    
angular.module('appMain')
.component('appForm', {
    templateUrl: './app/components/appForm.partial.html',
    controller: FormController
});
    