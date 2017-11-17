class MainController {
    $onInit() {}
}

angular.module("appModule")
.component('appMain', {
    templateUrl: './main/main-partial.html',
    controller: MainController,
});