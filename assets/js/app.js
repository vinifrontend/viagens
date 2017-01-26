(function(){

    var pessoas = [];

    var app = angular.module('cadastro', []);

    app.controller("CadastroController", function($scope, $http){
        this.cadastros = pessoas;

        $scope.url = "assets/js/estados.json";
        $scope.listaEstados = [];
        $scope.listaVeiculos = [];

        // preenchendo a lista de estados
        $scope.fetchEstados = function(){
          $http.get($scope.url).then(function(result){
            $scope.listaEstados = result.data;
          });
        };
        $scope.fetchEstados();

        // preenchendo lista de veiculos
        $scope.url = "assets/js/veiculos.json";
        $scope.fetchVeiculos = function(){
            $http.get($scope.url).then(function(result){
                $scope.listaVeiculos = result.data;
            });
        };
        $scope.fetchVeiculos();

        // verificando quando a input de data e alterada
        $scope.$watch($scope.ida, function(){
            $scope.updateInputDate();
        });

        // atualizando a input de data
        $scope.updateInputDate = function(){
            $scope.ida = $("#ida").val();
        };

        //funcao para registrar um viajante
        $scope.registrarPessoa = function(){

            if($scope.origem == $scope.destino){
                alert("Origem deve ser diferente do destino");

                return false;
            }

            // adiciona um viajante ao array de pessoas
            pessoas.push({
                nome:    $scope.nome,
                tel:     $scope.tel,
                email:   $scope.email,
                origem:  $scope.origem.alias,
                destino: $scope.destino.alias,
                ida:     $scope.ida,
                veiculo: $scope.veiculo.tipo
            });

            $scope.nome    = "";
            $scope.email   = "";
            $scope.tel     = "";
            $scope.origem  = "";
            $scope.destino = "";
            $scope.ida     = "";
            $scope.veiculo = "";

        };

    });

})();