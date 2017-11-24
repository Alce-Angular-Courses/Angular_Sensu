// Instanciamos el módulo principal de la aplicación

angular.module("appMain", [
    "LocalStorageModule"
])
.config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }
);