app.controller("HowItWorksController", ['$scope',
    function ($scope) {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        } 
        $scope.showme = true;
            $scope.ShowHide = function () {
                //If DIV is hidden it will be visible and vice versa.
                $scope.showme = $scope.showme ? false : true;
            }
              $scope.showit = true;
            $scope.ShowHide2 = function () {
                //If DIV is hidden it will be visible and vice versa.
                $scope.showit = $scope.showit ? false : true;
            }
        $('#aCCORDIONlol').addClass('animated fadeInDown');
        $('#aCCORDIONlol2').addClass('animated fadeInDown');
    }
]);