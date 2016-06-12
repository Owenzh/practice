xdescribe("mocking ajax", function () {
    beforeEach(function () {
        jasmine.Ajax.install();
    });
    afterEach(function () {
        jasmine.Ajax.uninstall();
    });
    it("specifying response when you need it", function () {
        var doneFn = jasmine.createSpy("success");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (args) {
            if (this.readyState == this.DONE) {
                doneFn(this.responseText);
            }
        };
        xhr.open("GET", "http://localhost/FTVP/Raml/Blink.ramlz");
        xhr.send();
        expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://localhost/FTVP/Raml/Blink.ramlz');
        expect(doneFn).not.toHaveBeenCalled();
        jasmine.Ajax.requests.mostRecent().respondWith({
            "status": 200,
            "contentType": 'text/plain',
            "responseText": 'awesome response'
        });
        expect(doneFn).toHaveBeenCalledWith('awesome response');
    });
});

describe("HistoricalStatusEvent test suite", function () {
    var hse, result, adminResult, error, requestFinishStatus;
    beforeEach(function () {
        hse = new ViewPoint.Client.Framework.HistoricalStatusEvent();
        result = ViewPoint.Client.Util.HistorianWebService.HistorianServiceResultCode.Success;
        adminResult = ViewPoint.Client.Util.VPAdminWebService.ConfigServiceStatusCode.Success;
        error = false;
        requestFinishStatus = false;
    });
    it("Has instance of HistoricalStatusEvent",function(){
        expect(hse instanceof ViewPoint.Client.Framework.HistoricalStatusEvent).toBe(true);
    });
    it("Build-in properties",function(){
        expect(hse.Result).toBe(result);
        expect(hse._error).toBe(error);
        expect(hse._admResult).toBe(adminResult);
        expect(hse._requestFinishStatus).toBe(requestFinishStatus);
    });
    it("Public properties",function(){
        expect(hse.RequestFinishStatus).toEqual(requestFinishStatus);
        expect(hse.Error).toEqual(error);
        expect(hse.ClientID).toBeUndefined();
    });
});