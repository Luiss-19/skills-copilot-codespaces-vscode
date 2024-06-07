function skillsMember(){
    return {
        restrict : 'E',
        templateUrl : 'modules/skills/views/member.html',
        controller : 'skillsMemberCtrl',
        controllerAs : 'vm',
        bindToController : true,
        scope : {
            member : '='
        }
    };
}