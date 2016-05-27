var app = angular.module('my_app', ["ionic"]);

app.controller('my_ctrl', function ($scope, $http)
{
    $scope.send_post = function()
    {
        var data =
        {
                password: $scope.user_password,
                email: $scope.user_mail
        };

        $http.post("http://snapchat.samsung-campus.net/api.php?option=connexion", data)
        .success(function(data, status)
        {
            console.log('a');
            console.log(data);
            console.log(status);
            $scope.localhost()
        })
        .error(function(data, status)
        {
            console.log('b');
            console.log(data);
            console.log(status);
        });
    }                   
});
