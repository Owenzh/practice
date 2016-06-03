describe('Core js test suite', function () {
    xdescribe('test suite', function () {
        var a;
        beforeEach(function () {
            a = 'ftvp';
        });
        it('a', function () {
            expect(a).toEqual('ftvp');
        });
    });

    describe('System.Collections.Generic.List test suite', function () {
        var listObj;
        beforeEach(function () {
            listObj = new System.Collections.Generic.List();
            listObj.Add('listItem01');//0
            listObj.Add('listItem02');//1
            listObj.Add([23, 'er']);//2
        });
        it('List can be instance List', function () {
            expect(listObj instanceof System.Collections.Generic.List).toEqual(true);
        });
        it("List Add fun", function () {
            expect('listItem01').toEqual(listObj.itemArray[0])
        });
        it("List Count property", function () {
            expect(listObj.Count).toEqual(3);
        });
        it("List AddRange fun", function () {
            listObj.AddRange(['aaa', 'bbb', false, 12]);//3+4 = 7
            expect(listObj.Count).toEqual(7);
        });
        it("List GetFirst fun", function () {
            expect(listObj.GetFirst()).toBe('listItem01');
            expect(listObj.GetFirst()).toEqual('listItem01');
        });

        it("List GetItem fun", function () {
            listObj.Add('fff');
            expect(listObj.GetItem(3)).toEqual('fff');
        });
        it("List Remove fun", function () {
            listObj.Add('bbb');
            listObj.Add(23);
            expect(listObj.GetItem(3)).toEqual('bbb');
            listObj.Remove('bbb');
            expect(listObj.GetItem(3)).toEqual(23);
        });
        it("List ToArray fun", function () {
            var isArr = listObj.ToArray();
            expect(isArr instanceof Array).toBe(true);
        });

        it("List Clear fun", function () {
            listObj.Clear();
            expect(listObj.Count).toEqual(0);
        });
    });
    describe('CurrentBrowser test suite', function () {
        var browserObj;
        beforeEach(function () {
            browserObj = CurrentBrowser;
        });
        it('Browser Name Should be Chrome', function () {
            var bn = browserObj.browserName();
            expect(bn).toEqual('Chrome');
        });
        it('Browser not isIE10', function () {
            expect(browserObj.isIE10()).toEqual(false);
        })
    });

    describe('MobileUtility test suite', function () {
        it('Is not mobile', function () {
            expect(MobileUtility.IsMobile()).toBe(false);
        });
    });

});