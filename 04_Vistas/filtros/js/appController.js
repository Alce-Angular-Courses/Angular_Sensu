// Controller de AngularJS en formato de AngularJS 1.5
// Aproximadamente segun la guía de estilos de Todd Motto
// que emplea ES6

class AppController  {

    // Inyectamos el scope unicamente para poder mostrarlo por consola
    // como parte del objeto controller (i.e. this)
    constructor ($scope, $locale) {
        this.$scope = $scope;
        this.$locale = $locale; 
    }

    $onInit () {
        this.sTitulo = 'Ejemplo de filtros'; 
        this.sAutor = 'Alejandro Cerezo';
        this.nNumber = 22.561;
        this.sTexto = "Esto es un texto"
        this.dFecha = new Date();
        console.log(this);
    }

}

angular.module("appMain")
.controller("AppController", AppController)







