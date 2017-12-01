// Controller de AngularJS en formato de AngularJS 1.5
// Aproximadamente segun la guía de estilos de Todd Motto
// que emplea ES6

class RootController  {
    constructor () {}
    $onInit () {}
}

angular.module("appMain")
.component('appRoot', {
    controller: RootController,
    template: `
    <div class="jumbotron">
        <div class="container">
            <app-cabeza class="row"></app-cabeza>
        </div>
    </div>
    <div class="container">    
        <app-form class="row"></app-form>
        <app-google class="row"></app-google>
        <app-pie class="row"></app-pie>
    </div>
    `
})







