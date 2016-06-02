describe("FTVP test suite",function(){
    var List = require('../lib/src/List.js');
    var list;
    beforeEach(function() {
        list = new List();
        list.Add('listItem01');//0
        list.Add('listItem02');//1
        list.Add([23,'er']);//2
    });

    it("List Add fun",function(){
        expect('listItem01').toEqual(list.itemArray[0])
    });
    it("List Count property",function(){
        expect(list.Count).toEqual(3);
    });
    it("List AddRange fun",function(){
        list.AddRange(['aaa','bbb',false,12]);//3+4 = 7
        expect(list.Count).toEqual(7);
    });
    it("List GetFirst fun",function(){
        expect(list.GetFirst()).toBe('listItem01');
        expect(list.GetFirst()).toEqual('listItem01');
    });

    it("List GetItem fun",function(){
        list.Add('fff');
        expect(list.GetItem(3)).toEqual('fff');
    });
    it("List Remove fun",function(){
        list.Add('bbb');
        list.Add(23);
        expect(list.GetItem(3)).toEqual('bbb');
        list.Remove('bbb');
        expect(list.GetItem(3)).toEqual(23);
    });
    it("List ToArray fun",function(){
        var isArr = list.ToArray();
        expect(list instanceof List).toBe(true);
        expect(isArr instanceof Array).toBe(true);
    });

    it("List Clear fun",function(){
        list.Clear();
        expect(list.Count).toEqual(0);
    });
});