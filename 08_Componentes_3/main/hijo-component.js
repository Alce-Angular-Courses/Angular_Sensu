class HijoController {

    constructor($scope) {
        this.$scope = $scope;

    }
    
    $onInit () {
        console.log(this);
    }

    btnBorrar () {
        this.sName = "";
        this.$scope.$emit("evtBorrado")

    }
}

angular.module("appModule")
.component('appHijo', {
    templateUrl: './main/hijo-partial.html',
    controller: HijoController,
    bindings: {
        sName : '<nombre'
    }, 
    
});