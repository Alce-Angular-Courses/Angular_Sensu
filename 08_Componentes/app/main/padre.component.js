class PadreController {
    
        constructor ($scope) {
            this.$scope = $scope

            this.$scope.$on("PulsadoBorrar", () => {
                this.oDatos = {} 
            })

        }


        $onInit() {
            this.oDatos = {}
        };
    
    }
    
    angular.module("mainModule")
    .component('appPadre', {
    
        templateUrl: './app/main/padre.component.html',
        controller: PadreController
    
    });