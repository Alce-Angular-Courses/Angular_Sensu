// Controller de AngularJS en formato de AngularJS 1.5
// Aproximadamente segun la guía de estilos de Todd Motto
// que emplea ES6

class AppController  {

    constructor () {}

    $onInit () {
        this.sTitulo = 'Curso de Angular JS y Bootstrap'; 
        this.sAutor = 'Alejandro Cerezo';
        
        this.sIdea = ''; 
        this.aIdeas = [];
    }
   
    add () {
        if (this.sIdea.length) {
            this.aIdeas.push(this.sIdea);
            this.sIdea = ''   
        }
    }
}

angular.module("appMain")
.controller("AppController", AppController)







