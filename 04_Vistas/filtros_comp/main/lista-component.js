class ListaController {
    
    $onInit () {
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
            generos: ['fantástico']}
        ];	
    }
}
    
angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});