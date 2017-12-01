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