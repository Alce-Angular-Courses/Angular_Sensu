class AppController {

    constructor($filter, uppercaseFilter) {
        this.$filter = $filter
        this.upperCaseFilter = uppercaseFilter

    }

    $onInit() {
        this.nNumber = 22.561;
        this.precio = 45.5
        this.sTexto = "esto es un texto"
        this.dFecha = new Date();

        console.log(this.$filter('currency')(this.precio))
        console.log(this.$filter('date')(this.dFecha))
        console.log(this.upperCaseFilter(this.sTexto))
    }
}

angular.module("appMain")
.controller("AppController", AppController)