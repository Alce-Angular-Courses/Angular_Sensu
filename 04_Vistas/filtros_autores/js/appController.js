// Controller de AngularJS en formato de AngularJS 1.5
// Aproximadamente segun la guía de estilos de Todd Motto
// que emplea ES6

class AppController  {

    constructor () {}

    $onInit () {
        this.sTitulo = 'Ejemplo de filtros'; 
        this.sAutor = 'Alejandro Cerezo';
        this.dFecha = new Date();

        this.aAutores = [
            {	nombre: 'Georges',
                apellido: 'Simenon',
                fechaNacim: new Date(1903,0,1),
                pais: 'France',
                generos: ['policiaco']},
            {	nombre: 'Isaac',
                apellido: 'Asimov',
                fechaNacim: new Date(1919,0,1),
                pais: 'Russia',
                generos: ['policiaco','ciencia ficción']},
            {	nombre: 'Agatha',
                apellido: 'Christie',
                fechaNacim: new Date(1890,0,1),
                pais: 'UK',
                generos: ['policiaco']},
            {	nombre: 'Stephen',
                apellido: 'King',
                fechaNacim: new Date(1947,0,1),
                pais: 'USA',
                generos: ['policiaco', 'ciencia ficción', 'fantástico']},
            {	nombre: 'Philip K.',
                apellido: 'Dick',
                fechaNacim: new Date(1928,0,1),
                pais: 'USA',
                generos: ['ciencia ficción']},
            {	nombre: 'Terry',
                apellido: 'Pratchett',
                fechaNacim: new Date(1948, 0, 1),
                pais: 'UK',
                generos: ['fantástico']
            }
        ];	
    }
}

angular.module("appMain")
.controller("AppController", AppController)







