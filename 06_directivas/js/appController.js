class MainController {

    $onInit () {
        this.name = "Pepe"
    }
}

angular.module("appMain")
.controller('MainController', MainController)