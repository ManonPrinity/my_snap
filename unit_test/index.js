var app = angular.module('my_app', []);

app.controller('my_ctrl', function ($scope, $http)
{
    $scope.send_post = function()
    {
        console.log('ffff');
        var data =
        {
           /* json: JSON.stringify(
            {*/
                password: $scope.user_password,
                email: $scope.user_mail
                console.log($scope.user_password);
                console.log($scope.user_mail);
           /* })*/
        };

        $http.post("http://snapchat.samsung-campus.net/api.php?option=inscription", data)
        .success(function(data, status)
        {
            console.log('a');
            console.log(data.error);
            console.log(status);
        })
        .error(function(data, status)
        {
            console.log('b');
            console.log(data);
            console.log(status);
        });
    }                   
});
