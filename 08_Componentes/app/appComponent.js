class RootController {

    constructor () {}
    $onInit() { };
    $onChanges(changesObj) { };
    $onDestroy() { };

}


angular.module("appModule")
.component('appRoot', {

    template:`
        <app-cabeza></app-cabeza>
        <app-main></app-main>
        <app-pie></app-pie>
    `,
    //templateUrl: 'templateUrl',
    controller: RootController,
    //bindings: {
    //    Binding: '=',
    //},

});