// Controller de AngularJS en formato de AngularJS 1.5
// Aproximadamente segun la guía de estilos de Todd Motto
// que emplea ES6

class RootController  {

    // Inyectamos el scope unicamente para poder mostrarlo por consola
    // como parte del objeto controller (i.e. this)
    constructor ($scope) {
        this.$scope = $scope;
    }

    $onInit () {
    }
   
}

angular.module("appMain")
.component('appRoot', {
    controller: RootController,
    template: `
    <div class="container">
        <app-cabeza></app-cabeza>
        <app-form></app-form>
        <app-pie></app-pie>
    </div>
    `
})







