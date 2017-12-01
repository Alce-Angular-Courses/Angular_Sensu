// Instanciamos el módulo principal de la aplicación

angular.module("appMain", [])

.config(function (datosFinalProvider) {
    datosFinalProvider.setFormador('Alberto');
  }
)

.config(function(saludarProvider) { 
    //get the provider injected
    saludarProvider.setSaludo('Adios')
  }
)
