describe('nclProjectsWelcomePage component: ', function () {
    var $componentController;
    var $rootScope;
    var $q;
    var ngDialog;
    var ctrl;

    beforeEach(function () {
        module('nuclio.app');

        inject(function (_$rootScope_, _$componentController_, _$q_, _ngDialog_) {
            $rootScope = _$rootScope_;
            $componentController = _$componentController_;
            $q = _$q_;
            ngDialog = _ngDialog_;

            var element = angular.element('<ncl-projects-welcome-page></ncl-projects-welcome-page>');
            var ImportService = {
                importService: null
            };

            ctrl = $componentController('nclProjectsWelcomePage', {$element: element, ImportService: ImportService});
        });
    });

    afterEach(function () {
        $componentController = null;
        $rootScope = null;
        $q = null;
        ngDialog = null;
        ctrl = null;
    });

    describe('$onDestroy(): ', function () {
        it('should close opened ngDialog', function () {
            spyOn(ngDialog, 'close');

            ctrl.$onDestroy();

            expect(ngDialog.close).toHaveBeenCalled();
        });
    });

    describe('openNewProjectDialog(): ', function () {

        // todo
        it('should open ngDialog', function () {
            spyOn(ngDialog, 'open').and.callThrough();

            ctrl.openNewProjectDialog();

            expect(ngDialog.open).toHaveBeenCalled();
        });
    });
});
