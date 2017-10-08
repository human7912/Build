// angular.module('buildApp', []).controller('buildCtrl', ['buildSrvc', function($scope, buildSrvc) {
//     $scope.builds = [
//         {id:'001',app_type:'1',build_type:'test',release:'baidu',version:'4.5.0',creater:'Tom',create_time:'2017-10-01'},
//         {id:'002',app_type:'1',build_type:'beta',release:'fm',version:'4.6.0',creater:'Jack',create_time:'2017-10-01'},
//         {id:'003',app_type:'1',build_type:'release',release:'google play',version:'4.7.0',creater:'Charles',create_time:'2017-10-01'}
//     ];
// }]);

angular.module('buildApp', []).controller('buildCtrl', function($scope) {
    $scope.builds = [
        {id:'001',app_type:'1',build_type:'test',release:'baidu',version:'4.5.0',creater:'Tom',create_time:'2017-10-01'},
        {id:'002',app_type:'1',build_type:'beta',release:'fm',version:'4.6.0',creater:'Jack',create_time:'2017-10-01'},
        {id:'003',app_type:'1',build_type:'release',release:'google play',version:'4.7.0',creater:'Charles',create_time:'2017-10-01'}
    ];
});
