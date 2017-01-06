var respuesta = new Array();
angular.module('starter.controllers',[])
.controller('cuadroControlador',function($scope){
	$scope.sumar = function(numero1, numero2){
		var res = numero1 + numero2;
        respuesta = new Array();
		respuesta.push(res);
		$scope.resultado = respuesta;
	}
    $scope.restar = function(numero1, numero2){
		var res = numero1 - numero2;
        respuesta = new Array();
		respuesta.push(res);
		$scope.resultado = respuesta;
	}
    $scope.multiplicar = function(numero1, numero2){
		var res = numero1 * numero2;
        respuesta = new Array();
		respuesta.push(res);
		$scope.resultado = respuesta;
	}
    $scope.dividir = function(numero1, numero2){
        var res;
        if (numero1 == 0 && numero2 == 0) {
            res = 'Indeterminación';
        } else if (numero2 == 0) {
            res = 'Infinito';
        } else {
            var res = numero1 / numero2;
        }
        respuesta = new Array();
		respuesta.push(res);
		$scope.resultado = respuesta;
	}
});
