describe('FTVP web api test suite', function () {
    var a;
    beforeEach(angular.mock.module('ViewPoint.Client.Application.Controllers'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        AppContr = $controller('ViewPoint.Client.App.Controller', {
            $scope: scope
        });
        //App init
        App = new ViewPoint.Client.App.GetApp();
        Application.Current = App;
        var params = new System.Windows.StartupEventsArgs();
        params.InitParams.setItem("Tracing", "false");
        params.InitParams.setItem("TracingWrittenToFile", "false");
        params.InitParams.setItem("SessionID", "g0nxtnqyg35diprtybulqo45");
        params.InitParams.setItem("polling", "");
        params.InitParams.setItem("RefreshIntervalInSeconds", "3600");
        params.InitParams.setItem("ServerType", "");
        params.InitParams.setItem("GetCurrentStatusPingRate", "10");
        params.InitParams.setItem(ViewPoint.Common.Constants.CLIENT_POLLING_RATE_DELAY_KEY, "30");
        params.InitParams.setItem("WebRequestCommandTimeout", "5");
        Application.Current.Host.Content.ActualHeight = 698;
        Application.Current.Host.Content.ActualWidth = 1280;
        Application.Current.Host.InitParams = params.InitParams;
        Application.Current.Application_Startup(null, params);
    }));
    beforeEach(function () {
        a = 'ftvp';
    });
    it('function test', function () {
        expect(a).toEqual('ftvp');
    });
    describe("Main page load",function(){
        //expect(MainPage instanceof ViewPoint.Client.MainPage).toBe(true);
        ////MainPage.InitializeInfoPanel(new Object());
        MainPage.OnLoaded(null, null);
    });
});