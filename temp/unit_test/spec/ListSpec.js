describe("FTVP test suite",function(){
    var list;
    beforeEach(function() {
        list = new List();
        list.Add('listItem01');//0
        list.Add('listItem02');//1
        list.Add([23,'er']);//2
    });
    //case-001
    it("List Add fun",function(){
        list.Contains('listItem02');
        expect('listItem01').toEqual(list.itemArray[0])
    });
    //case-002
    it("List Count property",function(){
        expect(list.Count).toEqual(3);
    });
    //case-003
    it("List AddRange fun",function(){
        list.AddRange(['aaa','bbb',false,12]);//3+4 = 7
        expect(list.Count).toEqual(7);
    });
    //case-004
    it("List GetFirst fun",function(){
        expect(list.GetFirst()).toBe('listItem01');
        expect(list.GetFirst()).toEqual('listItem01');
    });
    //case-005
    it("List GetItem fun",function(){
        list.Add('fff');
        expect(list.GetItem(3)).toEqual('fff');
    });
    //case-006
    it("List Remove fun",function(){
        list.Add('bbb');
        list.Add(23);
        expect(list.GetItem(3)).toEqual('bbb');
        list.Remove('bbb');
        expect(list.GetItem(3)).toEqual(23);
    });
    //case-007
    it("List ToArray fun",function(){
        var isArr = list.ToArray();
        expect(list instanceof List).toBe(true);
        expect(isArr instanceof Array).toBe(true);
    });
    //case-008
    it("List Clear fun",function(){
        list.Clear();
        expect(list.Count).toEqual(0);
    });
});