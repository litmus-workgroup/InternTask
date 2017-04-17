var app = angular.module("billApp", []);
app.controller("billAppCtrl", function($scope, $http, $window) {



    $scope.insert = function() {
        console.log($scope.user);
        $http.post('/addDetails', $scope.user).then(function(response) {

            alert('Record Successfully Inserted.');
            $scope.user = '';

        }, function(error) {
            console.log(error)
        });
    }
    $scope.show = function() {
        $window.location.href = "/view_data";
    }

});



app.controller("detailController", function($scope, $http) {

   


        $http.get('/viewdata').then(function(response) {
            $scope.users = response.data;
       
        }, function(error) {
            console.log(error);
        })


    $scope.genrate=function(){
       $window.location.href = "/generate_bill"; 
    }
});

app.controller("billGenCtrl", function($scope, $http) {

    $scope.show = function() {




    }
});
