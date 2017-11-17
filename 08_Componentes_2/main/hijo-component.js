class HijoController {
    
    $onInit () {
        //this.oDatos = 
        console.log(this);
    }
}

angular.module("appModule")
.component('appHijo', {
    templateUrl: './main/hijo-partial.html',
    controller: HijoController,
    bindings: {
        oDatos : '=datos'
    }, 
    
});