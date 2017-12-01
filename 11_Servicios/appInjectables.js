
angular.module("appMain")
.constant("EMPRESA", "CAS Training")
.value("formador", "Alejandro" )
.service("datosEmpresa", function() {
    this.empresa = "CAS Training";
    this.formador = "Alejandro";

    this.saludar = function () {
        console.log("Saludos de " + this.formador )
    }
})
.factory("datosFactory",function () {
    return {
        empresa : "CAS Training",
        formador : "Alejandro",
        saludar : function () {
            console.log("Saludos de " + this.formador )
        }
    }
})

// Existirá como datosFinal
// y como datosFinalProvider
.provider("datosFinal", function () {
    this.formador;
    // el objeto instanciado incluye 
    // sus funciones de configuración
    // y la factoria, asociada a la variable $get

    this.setFormador = function (value) {
        this.formador = value;
    }
       
    this.$get = function () {
        return {
            formador : this.formador,
            empresa : "CAS Training",
            saludar : function () {
                console.log("Saludos de " + this.formador )
            }
        }
    }
}) 

.provider('saludar',function(){
	// no es una función constructora => return
	this.mensaje = 'Hola!! Prueba de un proveedor.';
	this.saludo = 'Hola ';
    
    this.setSaludo = function (saludo) {
		this.saludo = saludo;
	};

	this.$get = function () {
		var saludo = this.saludo;

		return function(name){
			alert(saludo + ', ' + name);
		}
	};
})



