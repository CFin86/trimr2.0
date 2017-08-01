app.controller('SessionCtrl', function($scope, $state,$stateParams, session){
    $scope.session = session;
    $scope.reloadState = function(){
        $state.transitionTo($state.current, $stateParams, {
            reload: true,
            inherit: false,
            notify: true
        });
    }
});