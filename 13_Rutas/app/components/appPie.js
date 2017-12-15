class PieController {

    $onInit () {
        this.sAutor = 'Alejandro Cerezo';
    }
}


    angular.module('appMain')
    .component('appPie', {
        templateUrl: './app/components/appPie.partial.html',
        controller: PieController
    });
