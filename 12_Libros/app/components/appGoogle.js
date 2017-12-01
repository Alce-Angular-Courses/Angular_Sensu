class GoogleController {
    
        constructor ($http) {
            this.$http = $http
        }

        $onInit () { 
            this.url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
            this.aLibros = []
            this.clave = '';    
            this.claveTitle       
        }

        buscar () {
            this.claveTitle = this.clave  
            this.aLibros = []
            let url = this.url + this.clave
            this.clave = ''
            this.$http.get(url)          
            .then(
                response => {
                    response.data.items.forEach(element => {
                        this.aLibros.push(element.volumeInfo.title)
                    });
                }, // se ejecuta si la promesa se resuelve
                (error) => {console.log(error)} // se ejecuta si la promesa es rechazada
            )
        }
    }
    
angular.module('appMain')
.component('appGoogle', {
    templateUrl: './app/components/appGoogle.partial.html',
    controller: GoogleController
});
    