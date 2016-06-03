function List() {
    this.itemArray = new Array();
}
List.prototype.Add = function (item) {
    this.itemArray.push(item);
};
List.prototype.AddRange = function (collection) {
    if (collection instanceof List) {
        for (var i = 0; i < collection.Count; i++) {
            this.Add(collection.ElementAt(i));
        }
    }
    else if (collection instanceof Array) {
        for (var i = 0; i < collection.length; i++) {
            this.Add(collection[i]);
        }
    }
};
List.prototype.GetFirst = function () {
    return this.itemArray[0];
};
List.prototype.Clear = function () {
    this.itemArray = new Array();
};
List.prototype.GetItem = function (index) {
    return this.itemArray[index];
};
List.prototype.Remove = function (item) {
    for (var i = 0; i < this.itemArray.length; i++) {
        if (this.itemArray[i] === item) {
            this.itemArray.splice(i, 1);
            return true;
        }
        else {
            continue;
        }
    }
    return false;
};
List.prototype.RemoveAt = function (index) {
    var vItem = this.itemArray[index];
    if (vItem) {
        this.itemArray.splice(index, 1);
    }
};
List.prototype.ElementAt = function (index) {
    if (index > 0 || index <= this.itemArray.length)
        return this.itemArray[index];
    else
        throw "ArgumentOutOfRangeException";
};
Object.defineProperty(List.prototype, "Count", {
    get: function () {
        return this.itemArray.length;
    },
    enumerable: true,
    configurable: true
});
List.prototype.Contains = function (item) {
    return this.itemArray.indexOf(item) >= 0;
};
List.prototype.IndexOf = function (item) {
    return this.itemArray.indexOf(item);
};
List.prototype.Sort = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    this.itemArray.sort();
};
List.prototype.Insert = function (index, item) {
    if (index < 0) {
        throw "index cant be negative";
    }
    else if (index > this.Count) {
        throw "index cant be greater than System.Collections.ObjectModel.Collection<T>.Count";
    }
    else {
        this.itemArray.splice(index, 0, item);
    }
};
List.prototype.CopyTo = function (array) {
    return this.itemArray.slice();
};
List.prototype.ToArray = function () {
    return this.itemArray;
};
List.prototype.GetRange = function (index, count) {
    var result = new List();
    for (var i = index; i < index + count; i++) {
        result.Add(this.itemArray[i]);
    }
    return result;
};
List.prototype.RemoveRange = function (index, count) {
    for (var i = index; i < index + count; i++) {
        this.RemoveAt(i);
    }
};

