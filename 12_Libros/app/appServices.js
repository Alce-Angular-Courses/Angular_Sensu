angular.module("appMain")
.service("LibrosMock", function () {
    
    this.aLibros = [
        'Angular Avanzado',
        'Fundamentos de Angular',
        'Angular en 30 Minutos',
        'Aprende Angular por ti mismo'
    ]

    this.buscar = (clave) => {
        return new Promise (
            (resolve, reject) => {
               setTimeout(() => {
                    resolve(this.aLibros)
                },2000) 
            }
        )
    }
})
.service("LibrosGoogle", ['$http', function($http) {

    this.url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';        
    this.buscar = (clave) => {
        let url = this.url + clave
        return $http.get(url)
    }
}])