class HijoController {
    
    constructor ($scope) {
        this.$scope = $scope;
    }
    $onInit() {
        console.log(this)
    };

    borrar() {
        this.sName = ""
        this.$scope.$emit("PulsadoBorrar")
    }
}
    
    
angular.module("mainModule")
.component('appHijo', {

    templateUrl: './app/main/hijo.component.html',
    controller: HijoController,
    bindings: {
        sName: '<name'
    },
});


