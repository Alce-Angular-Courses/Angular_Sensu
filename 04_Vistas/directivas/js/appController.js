// Controller de AngularJS en formato de AngularJS 1.5
// Aproximadamente segun la guía de estilos de Todd Motto
// que emplea ES6

class AppController  {

    // Inyectamos el scope unicamente para poder mostrarlo por consola
    // como parte del objeto controller (i.e. this)
    constructor ($scope) {
        this.$scope = $scope;
    }

    $onInit () {
        this.sTitulo = 'Ejemplo de directivas y seguridad'; 
        this.sAutor = 'Alejandro Cerezo';
        this.nNumber = 22;
        this.sTexto = `<p>Esto es <b>importante</b></p>
                        <script>
                        // código JS
                        </script>`
        this.isVisible = false;
        console.log(this);
    }

    ratonDentro(oEvent) {
        console.log("ratón dentro");
        console.log(oEvent)
    }
    
    ratonFuera(oEvent) {
        console.log("raton.fuera");
        console.log(oEvent)
    }


    ratonEvento(oEvent) {
        let sTexto;
        switch (oEvent.type) {
            case "mouseover": 
               sTexto = "ratón dentro"
               if (oEvent.target.id == "claro"
                    || oEvent.target.id == "p_claro") {this.isVisible = true}
               break;
            case "mouseout":
                sTexto = "ratón fuera"
                if (oEvent.target.id == "claro"
                    || oEvent.target.id == "p_claro") {this.isVisible = false}
                break;

        }
        console.log(sTexto);
        console.log(oEvent)
    }

}

angular.module("appMain")
.controller("AppController", AppController)







