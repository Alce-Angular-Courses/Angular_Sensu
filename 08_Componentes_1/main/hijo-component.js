class HijoController {
    
    $onInit () {
        this.oDatos = this.parent.oDatos;
        console.log(this);
    }
}

angular.module("appModule")
.component('appHijo', {
    templateUrl: './main/hijo-partial.html',
    controller: HijoController,
    require: {
        parent: '^appPadre'
    }, 
    
});