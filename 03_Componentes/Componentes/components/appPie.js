class PieController {

    $onInit () {
        this.sAutor = 'Alejandro Cerezo';
    }
}


    angular.module('appMain')
    .component('appPie', {
        templateUrl: './components/appPie.partial.html',
        controller: PieController
    });
