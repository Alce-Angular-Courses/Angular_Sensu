class PadreController {
    constructor ($scope) {
        this.$scope = $scope;
    }

    $onInit () {
        this.oDatos= {};
        this.aviso = "";
        this.$scope.$on("evtBorrado", this.responderBorado.bind(this));
    }

    responderBorado  () {
        this.aviso = "El hijo ha borrado"
        this.oDatos.sName = "";
    }
}

angular.module("appModule")
.component('appPadre', {
    templateUrl: './main/padre-partial.html',
    controller: PadreController
});