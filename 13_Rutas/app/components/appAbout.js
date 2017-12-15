
class  AboutComponent {
    constructor () {}
    $onInit() {
        this.sTitulo = 'Rutas en AngularJS'; 
    }
}

    angular.module('appMain')
    .component('appAbout', {
        templateUrl: './app/components/appAbout.partial.html',
        controller: AboutComponent
    });