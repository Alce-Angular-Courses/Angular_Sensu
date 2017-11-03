class AppController  {

    constructor () {}

    $onInit () {
        // Variables para la cabecera y el pie
        this.sTitulo = 'Ejemplo de Clases CSS'; 
        this.sAutor = 'Alejandro Cerezo';
        this.dFecha = new Date();

        // Variables para el article
        this.incremento = 10;
        this.total = this.incremento;
        this.tamTitular = "titulargran";
        this.aClases = ["uno", "dos", "tres"];
        this.sClases = "uno dos tres";
        this.actualizarClaseTotal();
    }
	
	sumar () {
        this.total += parseInt(this.incremento);
        this.actualizarClaseTotal();
	}
	restar () {
        this.total -= parseInt(this.incremento);
        this.actualizarClaseTotal();

    }	
    
    actualizarClaseTotal () {
        this.oClaseTotal = { positivo : (this.total >= 0),
            negativo : (this.total < 0)}
    }

}
angular.module("appMain")
.controller("AppController", AppController)







