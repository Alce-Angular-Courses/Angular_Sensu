class AppController {

    constructor($log, $timeout, $locale, datosFinal, saludar) {
        'nginject';
        this.$log = $log;
        this.$timeout = $timeout;
        this.$locale = $locale;
        this.datosEmpresa = datosFinal;
        this.saludar = saludar;
    }

    $onInit() {
        // this.$locale.id="fr-fr"
        // this.$locale.localeID = "fr-FR";
        this.sName = 'Pepe'
        this.dFecha = new Date();
        this.$log.info("Hemos inyectado un servicio")
        this.$log.log(this) // console.log(this)

        this.datosEmpresa.saludar()
        this.saludar(this.sName)
        
        setTimeout(() => {
            this.sName = "Juan"
            this.$log.log(this.sName)
        }, 2000);

        this.$timeout(() => {
            this.sName = "Martin"
            this.$log.log(this.sName)   
        }, 3000);
    }

}

angular.module("appMain")
.controller("AppController", AppController)