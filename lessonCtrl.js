angular.module('directivePractice').controller('lessonCtrl', function ($scope, lessonService) {

    $scope.lessonsArray = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.test = 'Two-way data binding!'

    $scope.getSchedule = lessonService.getSchedule();

    $scope.announceDay = function (lesson, day) {
        alert (lesson + ' is active on ' + day + '.')
    }

})