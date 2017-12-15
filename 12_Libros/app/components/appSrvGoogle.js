class SrvGoogleController {
    
        constructor (LibrosGoogle) {
            this.LibrosGoogle = LibrosGoogle;            
        }

        $onInit () { 
            this.aLibros = []
            this.clave = '';    
            this.claveTitle       
        }

        buscar () {
            this.claveTitle = this.clave  
            this.aLibros = []
            
            this.LibrosGoogle.buscar(this.clave)          
            .then(
                response => {
                    this.clave = ''
                    response.data.items.forEach(element => {
                        this.aLibros.push(element.volumeInfo.title)
                    });
                }, // se ejecuta si la promesa se resuelve
                (error) => {console.log(error)} // se ejecuta si la promesa es rechazada
            )
        }
    }
    
angular.module('appMain')
.component('appSrvGoogle', {
    templateUrl: './app/components/appSrvGoogle.partial.html',
    controller: GoogleController
});
    