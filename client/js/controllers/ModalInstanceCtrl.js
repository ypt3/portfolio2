myPage.controller("ModalInstanceCtrl", function ($scope, $uibModalInstance, project) {


$scope.project = project
console.log(project, "VSSSSSSS", $scope.project)

$scope.myInterval = 5000;
$scope.noWrapSlides = false;
$scope.active = 0;

var slides = $scope.project.slides 
console.log(slides, $scope.project.slides)
var currIndex = 0;

    //dismiss modal
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
