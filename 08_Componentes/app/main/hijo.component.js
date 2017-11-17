class HijoController {
    
    constructor () {}
    $onInit() {

    };
}
    
    
angular.module("mainModule")
.component('appHijo', {

    templateUrl: './app/main/hijo.component.html',
    controller: HijoController,
    bindings: {
        sName: '<name'
    },
});


