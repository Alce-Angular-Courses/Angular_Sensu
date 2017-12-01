class AppController {

    constructor($scope, localStorageService) {
        this.$scope = $scope, 
        this.localStorageService = localStorageService 
    }

    $onInit() {
        this.aTareas = []
        this.sTarea = ""
        console.log(this)

        this.tempTareas = this.localStorageService.get('tareas');
        this.aTareas = this.tempTareas && this.tempTareas.split('\n') || [];
        
    }

    $onChanges() {
        console.log("Ejecutandose onChanges")
    }

    $doCheck() {
        console.log("Ejecutandose doCheck")
    }


    addTarea() {
        this.aTareas.push(this.sTarea)
        this.sTarea = ""
        this.localStorageService.add('tareas', this.aTareas.join('\n'))
    }


    eliminarTarea(index) {
        this.aTareas.splice(index,1)
        this.localStorageService.add('tareas', this.aTareas.join('\n'))
    }

 
}

angular.module("appMain")
.controller("AppController", AppController)