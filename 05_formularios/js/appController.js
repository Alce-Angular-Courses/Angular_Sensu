class MainController {

    constructor() {}

    $onInit () {

/*      this.sNombre
        this.sEmail
        this.sCurso
        this.sTurno
        this.isCondicionesOk
        this.isInfoOk */

        this.aTurnos = [
            {id: 'manana', name:'Mañana'},
            {id: 'tarde', name:'Tarde'}
            ]

        this.aCursosManana= [
            {id:'CA23', titulo: 'Angular'},
            {id:'CV12', titulo: 'Vue'},
            {id:'CR45', titulo: 'React'}
        ]

        this.aCursosTarde= [
            {id:'CA24', titulo: 'Angular'},
            {id:'CV14', titulo: 'Vue'},
            {id:'CU44', titulo: 'Aurelia'}
        ]

        this.aCursos = [];

        this.isEviado = "false"

        this.oForm = {
            nombre: "",
            email: "",
            curso: "",
            turno: "",
            isCondicionesOk: "",
            isInfoOk: false,
        }
        
    } // Fin del metodo onInit

    selectCursos() {
        if(this.oForm.turno == 'manana') {
            this.aCursos = this.aCursosManana;
        } else {
            this.aCursos = this.aCursosTarde;
        }
    }

    enviar() {
        this.isEnviado = true;
    }

    confirmar() {
        console.log("Formulario enviado")        
    }
}

angular
    .module('appMain')
    .controller('MainController', MainController);