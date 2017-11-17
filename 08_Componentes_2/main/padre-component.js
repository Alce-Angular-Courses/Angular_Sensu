class PadreController {

    $onInit () {
        this.oDatos= {};
    }
    
}

angular.module("appModule")
.component('appPadre', {
    templateUrl: './main/padre-partial.html',
    controller: PadreController
});