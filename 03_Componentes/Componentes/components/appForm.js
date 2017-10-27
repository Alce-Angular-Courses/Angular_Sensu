class FormController {
    
        $onInit () {
            
        }

        borrar () {
            this.inputNombre = '';         
            console.info("Se ha pulsado el botón");
            console.log(this);
        }
    }
    
angular.module('appMain')
.component('appForm', {
    templateUrl: './components/appForm.partial.html',
    controller: FormController
});
    