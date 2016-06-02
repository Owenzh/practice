var MobileUtility = (function () {
    function MobileUtility() {
    }
    MobileUtility.Orientation = function () {
        var mql = window.matchMedia("(orientation: portrait)");
        if (mql.matches) {
            return "Portrait"; // Portrait orientation
        }
        else {
            return "Landscape"; // Landscape orientation
        }
    };
    MobileUtility.IsMobile = function () {
        var check = false;
        if (MobileUtility.isMobile == null) {
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|tablet|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            MobileUtility.isMobile = check;
        }
        return MobileUtility.isMobile;
    };
    MobileUtility.OS = function () {
        var userAgent = navigator.userAgent || navigator.vendor;
        if (MobileUtility.IsMobile) {
            // On windows phone(Lumia 1520), user agent string would be:
            //
            //    "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:
            //     11.0; IEMobile / 11.0; NOKIA; Lumia 1520) like iPhone OS 7_0_3 Mac OS X AppleWebK
            //     it / 537(KHTML, like Gecko) Mobile Safari / 537"
            //
            // So we should detect 'Windows' before detecting 'iOS', otherwise "Lumia 1520" would 
            // return as an iOS device.
            if (userAgent.match(/Windows/i)) {
                return 'Windows';
            }
            else if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                return 'iOS';
            }
            else if (userAgent.match(/Android/i)) {
                return 'Android';
            }
            else {
                return 'unknown';
            }
        }
        else {
            return 'unknown';
        }
    };
    /**
     * In order to keep canvas drawing quality on HiDPI screens, we need to know
     * `MobileUtility.getDevicePixelRatio()` and canvas context's `backingStorePixelRatio`.  And use them to
     * get canvas drawing ratio.
     *
     * Formular:
     *      canvasDrawingRatio = devicePixelRatio / backingStoreRatio
     */
    MobileUtility.getDeviceCanvasDrawingRatio = function (canvas) {
        var context = canvas.getContext('2d');
        var devicePixelRatio = MobileUtility.getDevicePixelRatio() || 1;
        var backingStoreRatio = context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1;
        return devicePixelRatio / backingStoreRatio;
    };
    MobileUtility.getDevicePixelRatio = function () {
        if (MobileUtility.IsMobile() && MobileUtility.OS() === 'Windows' && devicePixelRatio < 1.5 && navigator.userAgent.indexOf('Tablet') == -1)
            return 2.4;
        else
            return window.devicePixelRatio;
    };
    MobileUtility.isMobile = null;
    return MobileUtility;
})();
var System;
(function (System) {
    var DateTimeConventions = (function () {
        function DateTimeConventions() {
        }
        DateTimeConventions.Format = function (cultureName, id) {
            try {
                if (DateTimeConventions.Formats != null && DateTimeConventions.currentFormat == null) {
                    var ft = null;
                    if ((CurrentBrowser.browserName() == "Firefox" || CurrentBrowser.browserName() == "Chrome" || CurrentBrowser.browserName() == "Safari") && (cultureName.indexOf('-') == -1)) {
                        var mappings = DateTimeConventions.Formats["mapping"];
                        if (mappings != null) {
                            cultureName = mappings[cultureName];
                            if (cultureName == null)
                                cultureName = "en-US";
                        }
                        else {
                            cultureName = "en-US";
                        }
                        System.Globalization.CultureInfo.CurrentCulture.Name = cultureName;
                    }
                    cultureName = cultureName.split('-')[0].toLowerCase() + "-" + cultureName.split('-')[1].toUpperCase();
                    ft = DateTimeConventions.Formats[cultureName];
                    if (ft != null) {
                        DateTimeConventions.currentFormat = ft;
                    }
                    else {
                        DateTimeConventions.currentFormat = DateTimeConventions.defaultFormat;
                    }
                    delete (DateTimeConventions.Formats);
                    return DateTimeConventions.currentFormat[id];
                }
                else if (DateTimeConventions.Formats == null && DateTimeConventions.currentFormat != null) {
                    return DateTimeConventions.currentFormat[id];
                }
                else {
                    return DateTimeConventions.defaultFormat[id];
                }
            }
            catch (exception) {
                return DateTimeConventions.defaultFormat[id];
            }
        };
        DateTimeConventions.DecimalSeparator = function () {
            if (DateTimeConventions.currentFormat)
                return DateTimeConventions.currentFormat[7];
            else
                return DateTimeConventions.defaultFormat[7];
        };
        DateTimeConventions.GroupSeparator = function () {
            if (DateTimeConventions.currentFormat)
                return DateTimeConventions.currentFormat[8];
            else
                return DateTimeConventions.defaultFormat[8];
        };
        DateTimeConventions.GroupSizes = function () {
            if (DateTimeConventions.currentFormat)
                return DateTimeConventions.currentFormat[9];
            else
                return DateTimeConventions.defaultFormat[9];
        };
        DateTimeConventions.defaultFormat = ["M/d/yyyy", "dddd, MMMM dd, yyyy", "h:mm:ss tt", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""], "AM", "PM", ".", ",", [3]];
        DateTimeConventions.Formats = null;
        return DateTimeConventions;
    })();
    System.DateTimeConventions = DateTimeConventions;
})(System || (System = {}));
var CurrentBrowser = (function () {
    function CurrentBrowser() {
    }
    CurrentBrowser.browserName = function () {
        if (CurrentBrowser.userAgent == "")
            CurrentBrowser.userAgent = navigator.userAgent;
        if (CurrentBrowser._browserName != "")
            return CurrentBrowser._browserName;
        if (CurrentBrowser.userAgent.search('Firefox') !== -1)
            CurrentBrowser._browserName = 'Firefox';
        else if (CurrentBrowser.userAgent.search('Edge') !== -1)
            CurrentBrowser._browserName = 'Edge';
        else if (CurrentBrowser.userAgent.search('Chrome') !== -1)
            CurrentBrowser._browserName = 'Chrome';
        else if (document.documentMode !== undefined)
            CurrentBrowser._browserName = 'IE';
        else if (CurrentBrowser.userAgent.search('Safari') !== -1)
            CurrentBrowser._browserName = 'Safari';
        else
            CurrentBrowser._browserName = 'unknown';
        return CurrentBrowser._browserName;
    };
    CurrentBrowser.isIE10 = function () {
        var isIE10 = false;
        if (Function('/*@cc_on return /^10/.test(@_jscript_version) @*/')()) {
            isIE10 = true;
        }
        return isIE10;
    };
    CurrentBrowser.fontcorrection = function () {
        if (CurrentBrowser.browserName() === 'IE') {
            return 1.23;
        }
        if (CurrentBrowser.browserName() === 'Chrome') {
            return 1.15;
        }
        if (CurrentBrowser.browserName() === 'Firefox') {
            return 1.23;
        }
        return 1;
    };
    CurrentBrowser.UnicodeEscape = function (str) {
        if (str) {
            return str.replace(/[\s\S]/g, this.unicodeEscapeCharFix);
        }
        else {
            return str;
        }
    };
    CurrentBrowser.IsEdgeBrowser = function () {
        if (navigator.userAgent.search('Edge') !== -1) {
            return true;
        }
        return false;
    };
    CurrentBrowser.IsWin10IE = function () {
        if (navigator.userAgent.search('Windows NT 10.0;') !== -1 && document.documentMode !== undefined) {
            return true;
        }
        return false;
    };
    CurrentBrowser.unicodeEscapeCharFix = function (character) {
        if (character.charCodeAt(0) == 127) {
            return '\u25af';
        }
        return character;
        //var escape = character.charCodeAt(0).toString(16), longhand = escape.length > 2;
        //return (longhand) ? '\u25af' : character;
    };
    CurrentBrowser.userAgent = "";
    CurrentBrowser._browserName = "";
    return CurrentBrowser;
})();
var Events;
(function (Events) {
    var Delegate = (function () {
        function Delegate() {
            this._eventHandlers = new System.Collections.Generic.Dictionary();
        }
        Delegate.prototype.subscribe = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            var eventHandler = arguments[0];
            if (this._eventHandlers.ContainsKey(eventHandler) == false) {
                if (arguments.length > 1)
                    this._eventHandlers.Add(eventHandler, arguments[1]);
                else
                    this._eventHandlers.Add(eventHandler, null);
            }
        };
        Delegate.prototype.subscribeMultipleEventHandler = function (eventHander, sender) {
            var eventHandler = arguments[0];
            if (arguments.length > 1)
                this._eventHandlers.Add(eventHandler, arguments[1]);
            else
                this._eventHandlers.Add(eventHandler, null);
        };
        Delegate.prototype.unSubscribeMultipleEventHandler = function (eventHandler, sender) {
            for (var i = 0; i < this._eventHandlers.Count; i++) {
                if (this._eventHandlers.ContainsKey(eventHandler) && this._eventHandlers.ContainsValue(sender)) {
                    this._eventHandlers.Remove(eventHandler);
                }
            }
        };
        Delegate.prototype.unsubscribe = function (eventHandler) {
            var i = this._eventHandlers.ContainsKey(eventHandler);
            if (i != false) {
                this._eventHandlers.Remove(eventHandler);
            }
        };
        Delegate.prototype.raise = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            var sender = null;
            if (arguments.length > 0)
                sender = arguments[0];
            var param = null;
            if (arguments.length > 1)
                param = arguments[1];
            for (var i = 0; i < this._eventHandlers.Count; i++) {
                var handler = this._eventHandlers.Keys[i];
                var thisClass = this._eventHandlers.Values[i];
                if (thisClass == null)
                    thisClass = sender;
                if (arguments.length == 4) {
                    handler.call(thisClass, sender, param, arguments[2], arguments[3]);
                }
                else {
                    handler.call(thisClass, sender, param);
                }
            }
        };
        Delegate.prototype.raiseInvert = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            var sender = null;
            if (arguments.length > 0)
                sender = arguments[0];
            var param = null;
            if (arguments.length > 1)
                param = arguments[1];
            for (var i = this._eventHandlers.Count - 1; i >= 0; i--) {
                var handler = this._eventHandlers.Keys[i];
                var thisClass = this._eventHandlers.Values[i];
                if (thisClass == null)
                    thisClass = sender;
                if (arguments.length == 4) {
                    handler.call(thisClass, sender, param, arguments[2], arguments[3]);
                }
                else {
                    handler.call(thisClass, sender, param);
                }
            }
        };
        Delegate.prototype.Invoke = function (sender, param) {
            this.raise(sender, param);
        };
        Delegate.prototype.removeAll = function () {
            this._eventHandlers.Clear();
        };
        Delegate.prototype.subscribeRemovingAll = function (eventHandler) {
            this.removeAll();
            this.subscribe(eventHandler);
        };
        return Delegate;
    })();
    Events.Delegate = Delegate;
    var EventArgs = (function () {
        function EventArgs() {
        }
        return EventArgs;
    })();
    Events.EventArgs = EventArgs;
})(Events || (Events = {}));
var JSLINQ = (function () {
    function JSLINQ(dataItems) {
        this.items = dataItems;
    }
    JSLINQ.prototype.ToArray = function () {
        return this.items;
    };
    JSLINQ.prototype.Where = function (clause) {
        var item;
        var newArray = new Array();
        // The clause was passed in as a Method that return a Boolean
        for (var index = 0; index < this.items.length; index++) {
            if (clause(this.items[index], index)) {
                newArray[newArray.length] = this.items[index];
            }
        }
        return new JSLINQ(newArray);
    };
    JSLINQ.prototype.Select = function (clause) {
        var item;
        var newArray = new Array();
        // The clause was passed in as a Method that returns a Value
        for (var i = 0; i < this.items.length; i++) {
            if (clause(this.items[i])) {
                newArray[newArray.length] = clause(this.items[i]);
            }
        }
        return new JSLINQ(newArray);
    };
    JSLINQ.prototype.OrderBy = function (clause) {
        var tempArray = new Array();
        for (var i = 0; i < this.items.length; i++) {
            tempArray[tempArray.length] = this.items[i];
        }
        return new JSLINQ(tempArray.sort(function (a, b) {
            var x = clause(a);
            var y = clause(b);
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }));
    };
    JSLINQ.prototype.OrderByDescending = function (clause) {
        var tempArray = new Array();
        for (var i = 0; i < this.items.length; i++) {
            tempArray[tempArray.length] = this.items[i];
        }
        return new JSLINQ(tempArray.sort(function (a, b) {
            var x = clause(b);
            var y = clause(a);
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }));
    };
    JSLINQ.prototype.SelectMany = function (clause) {
        var r = new Array();
        for (var i = 0; i < this.items.length; i++) {
            r = r.concat(clause(this.items[i]));
        }
        return new JSLINQ(r);
    };
    JSLINQ.prototype.Count = function (clause) {
        if (clause == null)
            return this.items.length;
        else
            return this.Where(clause).items.length;
    };
    JSLINQ.prototype.Distinct = function (clause) {
        var item;
        var dict = new Object();
        var retVal = new Array();
        for (var i = 0; i < this.items.length; i++) {
            item = clause(this.items[i]);
            // TODO - This doens't correctly compare Objects. Need to fix this
            if (dict[item] == null) {
                dict[item] = true;
                retVal[retVal.length] = item;
            }
        }
        dict = null;
        return new JSLINQ(retVal);
    };
    JSLINQ.prototype.Any = function (clause) {
        for (var index = 0; index < this.items.length; index++) {
            if (clause(this.items[index], index)) {
                return true;
            }
        }
        return false;
    };
    JSLINQ.prototype.All = function (clause) {
        for (var index = 0; index < this.items.length; index++) {
            if (!clause(this.items[index], index)) {
                return false;
            }
        }
        return true;
    };
    JSLINQ.prototype.Reverse = function () {
        var retVal = new Array();
        for (var index = this.items.length - 1; index > -1; index--)
            retVal[retVal.length] = this.items[index];
        return new JSLINQ(retVal);
    };
    JSLINQ.prototype.First = function (clause) {
        if (clause != null) {
            return this.Where(clause).First();
        }
        else {
            // If no clause was specified, then return the First element in the Array
            if (this.items.length > 0)
                return this.items[0];
            else
                return null;
        }
    };
    JSLINQ.prototype.Last = function (clause) {
        if (clause != null) {
            return this.Where(clause).Last();
        }
        else {
            // If no clause was specified, then return the First element in the Array
            if (this.items.length > 0)
                return this.items[this.items.length - 1];
            else
                return null;
        }
    };
    JSLINQ.prototype.ElementAt = function (index) {
        return this.items[index];
    };
    JSLINQ.prototype.Concat = function (array) {
        var arr = array.items || array;
        return new JSLINQ(this.items.concat(arr));
    };
    JSLINQ.prototype.Intersect = function (secondArray, clause) {
        var clauseMethod;
        if (clause != undefined) {
            clauseMethod = clause;
        }
        else {
            clauseMethod = function (item, index, item2, index2) { return item == item2; };
        }
        var sa = secondArray.items || secondArray;
        var result = new Array();
        for (var a = 0; a < this.items.length; a++) {
            for (var b = 0; b < sa.length; b++) {
                if (clauseMethod(this.items[a], a, sa[b], b)) {
                    result[result.length] = this.items[a];
                }
            }
        }
        return new JSLINQ(result);
    };
    JSLINQ.prototype.DefaultIfEmpty = function (defaultValue) {
        if (this.items.length == 0) {
            return defaultValue;
        }
        return this;
    };
    JSLINQ.prototype.ElementAtOrDefault = function (index, defaultValue) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        return defaultValue;
    };
    JSLINQ.prototype.FirstOrDefault = function (defaultValue) {
        return this.First("") || defaultValue;
    };
    JSLINQ.prototype.LastOrDefault = function (defaultValue) {
        return this.Last("") || defaultValue;
    };
    return JSLINQ;
})();
var lang = (function () {
    function lang() {
    }
    lang.asTypeT = function (instance, type) {
        var istype = lang.isTypeT(instance, type);
        if (istype) {
            var typedInstance = instance;
            return typedInstance;
        }
        else
            return null;
    };
    lang.asType = function (instance) {
        var typedInstance = instance;
        return typedInstance;
    };
    lang.isType = function (instance) {
        return lang.asType(instance) != null;
    };
    lang.isTypeT = function (instance, type) {
        return instance instanceof type;
    };
    lang.typeOf = function () {
        return new System.Type().GetType();
    };
    lang.getClassName = function (instance) {
        var type = typeof (instance);
        if (type == "object") {
            var funcNameRegex = /function\s([^(]+)\(/;
            var results = (funcNameRegex).exec(instance["constructor"].toString());
            return (results && results.length > 1) ? results[1].trim() : type;
        }
        else {
            return type;
        }
    };
    lang.isClassName = function (instance, className) {
        return instance !== undefined && (instance === null || lang.getClassName(instance) == className);
    };
    lang.XMLtoString = function (elem) {
        if (elem == null || elem == undefined)
            return "";
        var serialized;
        try {
            // XMLSerializer exists in current Mozilla browsers
            var serializer = new XMLSerializer();
            serialized = serializer.serializeToString(elem);
        }
        catch (e) {
            // Internet Explorer has a different approach to serializing XML
            serialized = elem.xml;
        }
        return serialized ? serialized : "";
    };
    return lang;
})();
//Please check Convert.ts Convert.ToInt function
//window['parseIntOld'] = window['parseInt'];
//window['parseInt'] = function (s: string, radix?: number): number {
//   if (radix && radix == 10 && (/^(\-|\+)?([0-9]+|Infinity)$/.test(s)))
//      return window['parseIntOld'](s, radix);
//   else if (radix && radix == 2 && (/^(\-|\+)?([0-1]+|Infinity)$/.test(s)))
//      return window['parseIntOld'](s, radix);
//   else if (radix && radix == 8 && (/^(\-|\+)?([0-7]+|Infinity)$/.test(s)))
//      return window['parseIntOld'](s, radix);
//   else if (radix && radix == 16 && (/^(\-|\+)?([0-9ABCDEF]+|Infinity)$/.test(s.toUpperCase())))
//      return window['parseIntOld'](s, radix);
//   else if (!radix){
//      var FloatValue = window['parseFloatOld'](s);      
//      var FloatValueAbs = Math.abs(FloatValue);
//      return (FloatValueAbs === 0.5)? 0: (Math.round(FloatValueAbs) * (FloatValue < 0? -1 : 1));
//   }
//   return NaN;
//}
////Please check Convert.ts Convert.ToDouble function
//window['parseFloatOld'] = window['parseFloat'];
//window['parseFloat'] = function (s: string): number {
//   if ((/^(\-|\+)?([0-9,]+(\.[0-9]*)?(((E|e)+(\+|\-)?)?[0-9]+)?|Infinity)$/.test(s)))
//      return window['parseFloatOld'](s);
//   else
//      return NaN;
//}
// 
// Type definitions for Date Format 1.2.3
// Project: http://blog.stevenlevithan.com/archives/date-time-format
// Definitions by: Rob Stutton <https://github.com/balrob>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var Action = (function (_super) {
        __extends(Action, _super);
        function Action() {
            _super.apply(this, arguments);
        }
        return Action;
    })(Events.Delegate);
    System.Action = Action;
})(System || (System = {}));
var System;
(function (System) {
    var Activator = (function () {
        function Activator() {
        }
        /* Dispose function */
        Activator.CreateInstance = function () {
            throw "NotImplemented";
        };
        return Activator;
    })();
    System.Activator = Activator;
})(System || (System = {}));
var System;
(function (System) {
    var AsyncCallback = (function (_super) {
        __extends(AsyncCallback, _super);
        function AsyncCallback() {
            _super.apply(this, arguments);
        }
        return AsyncCallback;
    })(Events.Delegate);
    System.AsyncCallback = AsyncCallback;
})(System || (System = {}));
var System;
(function (System) {
    var BitConverter = (function () {
        function BitConverter() {
        }
        BitConverter.GetBytes = function (value) {
            throw "NotImplemented";
        };
        BitConverter.ToInt32 = function (value, startIndex) {
            throw "NotImplemented";
        };
        return BitConverter;
    })();
    System.BitConverter = BitConverter;
})(System || (System = {}));
var System;
(function (System) {
    var Bool = (function () {
        function Bool() {
        }
        Bool.TryParse = function (s, resultref) {
            var bStr = s != null ? s.toString().toLowerCase() : "";
            var result = false;
            resultref = undefined;
            if (bStr == "false" || bStr == "true" || bStr == "0" || bStr == "1") {
                result = true;
                resultref = ((bStr == "true" || bStr == "1") ? true : false);
            }
            return { result: result, refs: { 0: resultref } };
        };
        return Bool;
    })();
    System.Bool = Bool;
})(System || (System = {}));
var System;
(function (System) {
    var Byte = (function () {
        function Byte() {
        }
        return Byte;
    })();
    System.Byte = Byte;
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var KeyValuePair = (function () {
                function KeyValuePair(Key, Value) {
                    this._Key = Key;
                    this._Value = Value;
                }
                Object.defineProperty(KeyValuePair.prototype, "Value", {
                    get: function () {
                        return this._Value;
                    },
                    set: function (value) {
                        this._Value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(KeyValuePair.prototype, "Key", {
                    get: function () {
                        return this._Key;
                    },
                    set: function (key) {
                        this._Key = key;
                    },
                    enumerable: true,
                    configurable: true
                });
                return KeyValuePair;
            })();
            Generic.KeyValuePair = KeyValuePair;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ComponentModel;
    (function (ComponentModel) {
        var AsyncCompletedEventArgs = (function (_super) {
            __extends(AsyncCompletedEventArgs, _super);
            function AsyncCompletedEventArgs(error, cancelled, userState) {
                _super.call(this);
            }
            Object.defineProperty(AsyncCompletedEventArgs.prototype, "Cancelled", {
                get: function () {
                    return this._Cancelled;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AsyncCompletedEventArgs.prototype, "Error", {
                get: function () {
                    return this._Error;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AsyncCompletedEventArgs.prototype, "UserState", {
                get: function () {
                    return this._UserState;
                },
                enumerable: true,
                configurable: true
            });
            AsyncCompletedEventArgs.prototype.RaiseExceptionIfNecessary = function () {
            };
            return AsyncCompletedEventArgs;
        })(Events.EventArgs);
        ComponentModel.AsyncCompletedEventArgs = AsyncCompletedEventArgs;
    })(ComponentModel = System.ComponentModel || (System.ComponentModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Debugger = (function () {
            function Debugger() {
            }
            Debugger.IsAttached = function () {
                throw "NotImplemented";
            };
            Debugger.Break = function () {
                throw "NotImplemented";
            };
            Debugger.IsLogging = function () {
                throw "NotImplemented";
            };
            Debugger.Launch = function () {
                throw "NotImplemented";
            };
            Debugger.Log = function (level, category, message) {
                throw "NotImplemented";
            };
            return Debugger;
        })();
        Diagnostics.Debugger = Debugger;
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        (function (DateTimeStyles) {
            DateTimeStyles[DateTimeStyles["None"] = 0] = "None";
            DateTimeStyles[DateTimeStyles["AllowLeadingWhite"] = 1] = "AllowLeadingWhite";
            DateTimeStyles[DateTimeStyles["AllowTrailingWhite"] = 2] = "AllowTrailingWhite";
            DateTimeStyles[DateTimeStyles["AllowInnerWhite"] = 4] = "AllowInnerWhite";
            DateTimeStyles[DateTimeStyles["AllowWhiteSpaces"] = 7] = "AllowWhiteSpaces";
            DateTimeStyles[DateTimeStyles["NoCurrentDateDefault"] = 8] = "NoCurrentDateDefault";
            DateTimeStyles[DateTimeStyles["AdjustToUniversal"] = 16] = "AdjustToUniversal";
            DateTimeStyles[DateTimeStyles["AssumeLocal"] = 32] = "AssumeLocal";
            DateTimeStyles[DateTimeStyles["AssumeUniversal"] = 64] = "AssumeUniversal";
            DateTimeStyles[DateTimeStyles["RoundtripKind"] = 128] = "RoundtripKind";
        })(Globalization.DateTimeStyles || (Globalization.DateTimeStyles = {}));
        var DateTimeStyles = Globalization.DateTimeStyles;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Guid = (function () {
        function Guid() {
        }
        Guid.NewGuid = function () {
            return this._p8() + this._p8(true) + this._p8(true) + this._p8();
        };
        Guid._p8 = function (s) {
            if (s === void 0) { s = false; }
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        };
        return Guid;
    })();
    System.Guid = Guid;
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var List = (function () {
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
                return List;
            })();
            Generic.List = List;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var Queue = (function () {
                function Queue() {
                    this.queueArray = new Array();
                }
                Queue.prototype.Enqueue = function (cmd) {
                    var index = this.queueArray.length;
                    this.queueArray[index++] = cmd;
                };
                Object.defineProperty(Queue.prototype, "Count", {
                    get: function () {
                        return this.queueArray.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Queue.prototype.Dequeue = function () {
                    var data = this.queueArray[0];
                    if (this.queueArray.length === 1) {
                        this.queueArray = new Array();
                    }
                    else {
                        var count = 1;
                        var tempArray = new Array();
                        while (count <= this.queueArray.length - 1) {
                            tempArray[count - 1] = this.queueArray[count];
                            count++;
                        }
                        this.queueArray = tempArray;
                    }
                    return data;
                };
                Queue.prototype.ToArray = function () {
                    return this.queueArray;
                };
                return Queue;
            })();
            Generic.Queue = Queue;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var ObjectModel;
        (function (ObjectModel) {
            var Collection = (function (_super) {
                __extends(Collection, _super);
                function Collection() {
                    var allParams = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        allParams[_i - 0] = arguments[_i];
                    }
                    _super.call(this);
                    switch (arguments.length) {
                        case 0:
                            this.constructor_1();
                            break;
                        case 1:
                            this.constructor_2(arguments[0]);
                            break;
                        default: throw "Invalid overload call for: constructor";
                    }
                }
                Collection.prototype.constructor_1 = function () {
                    this.collectList = new Collections.Generic.List();
                };
                Collection.prototype.constructor_2 = function (list) {
                    this.collectList = list;
                };
                Object.defineProperty(Collection.prototype, "Count", {
                    get: function () {
                        return this.collectList.Count;
                    },
                    enumerable: true,
                    configurable: true
                });
                Collection.prototype.getItem = function (index) {
                    if (typeof (index) == "number") {
                        return this.getItem_1(index);
                    }
                    else if (typeof (index) == "string") {
                        return this.getItem_2(index);
                    }
                    throw "Invalid case";
                };
                Collection.prototype.setItem = function (index, value) {
                    if (typeof (index) == "number") {
                        this.setItem_1(index, value);
                    }
                    else if (typeof (index) == "string") {
                        this.setItem_2(index, value);
                    }
                    else
                        throw "Invalid case";
                };
                Collection.prototype.getItem_1 = function (num) {
                    throw "NotImplemented";
                };
                Collection.prototype.setItem_1 = function (num, value) {
                    throw "NotImplemented";
                };
                Collection.prototype.getItem_2 = function (name) {
                    throw "NotImplemented";
                };
                Collection.prototype.setItem_2 = function (name, value) {
                    throw "NotImplemented";
                };
                Collection.prototype.GetEnumerator = function () {
                    return this.enumeratorVar;
                };
                Collection.prototype.Insert = function (index, item) {
                    this.collectList.Insert(index, item);
                };
                return Collection;
            })(Collections.Generic.List);
            ObjectModel.Collection = Collection;
        })(ObjectModel = Collections.ObjectModel || (Collections.ObjectModel = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var ObjectModel;
        (function (ObjectModel) {
            var ObservableCollection = (function (_super) {
                __extends(ObservableCollection, _super);
                function ObservableCollection() {
                    _super.call(this);
                    this.CollectionChanged = new Events.Delegate();
                }
                ObservableCollection.prototype.OnCollectionChanged = function (e /*NotifyCollectionChangedEventArgs*/) {
                };
                return ObservableCollection;
            })(ObjectModel.Collection);
            ObjectModel.ObservableCollection = ObservableCollection;
        })(ObjectModel = Collections.ObjectModel || (Collections.ObjectModel = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ComponentModel;
    (function (ComponentModel) {
        var PropertyChangedEventArgs = (function (_super) {
            __extends(PropertyChangedEventArgs, _super);
            function PropertyChangedEventArgs(propertName) {
                _super.call(this);
            }
            return PropertyChangedEventArgs;
        })(Events.EventArgs);
        ComponentModel.PropertyChangedEventArgs = PropertyChangedEventArgs;
    })(ComponentModel = System.ComponentModel || (System.ComponentModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ComponentModel;
    (function (ComponentModel) {
        var PropertyChangedEventHandler = (function (_super) {
            __extends(PropertyChangedEventHandler, _super);
            function PropertyChangedEventHandler() {
                _super.apply(this, arguments);
            }
            return PropertyChangedEventHandler;
        })(Events.Delegate);
        ComponentModel.PropertyChangedEventHandler = PropertyChangedEventHandler;
    })(ComponentModel = System.ComponentModel || (System.ComponentModel = {}));
})(System || (System = {}));
Number.prototype.CompareTo = function (value) {
    return this == value ? 0 : this > value ? 1 : -1;
};
Number.prototype.ToString = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    /*switch (arguments.length) {
       case 1: return System.Double.ToString(arguments[0]);
       case 2: return System.Double.ToString(arguments[0], arguments[1]);
       default: throw "NotImplemented";
    }*/
    var provider = lang.asTypeT(arguments[1], System.Globalization.CultureInfo);
    var separator;
    if (provider && provider.NumberFormat) {
        separator = provider.NumberFormat.NumberDecimalSeparator;
    }
    var numbertostring = this.toString();
    if (typeof (params[0]) == "string") {
        if (numbertostring.indexOf('.') > 0 && arguments[0].indexOf('.') == (arguments[0].length - 1)) {
            numbertostring = numbertostring.slice(0, numbertostring.indexOf('.'));
        }
        else if (numbertostring.indexOf('.') === -1 && arguments[0].indexOf('.') != (arguments[0].length - 1)) {
            numbertostring += '.0';
        }
        // Custom Numeric Format Strings
        if (params[0].indexOf('E0') > 0) {
            try {
                var numberOfSignificant = params[0].substring(params[0].indexOf('.') + 1, params[0].indexOf('E0')).length;
                return Number(this).toExponential(numberOfSignificant).replace(/\+/g, "").toUpperCase();
            }
            catch (e) {
                return "NaN";
            }
        }
        else if (params[0].indexOf('F') == 0) {
            var nDec = 2;
            if (params[0] != "F") {
                var num = parseInt(params[0].substring(1, params[0].length));
                if (!isNaN(num)) {
                    nDec = num;
                }
            }
            params[0] = "#." + System.String.createString("0", nDec);
        }
        if (params[0].indexOf('#') !== -1 || params[0].indexOf(".0") !== -1) {
            var format = params[0];
            /*decimals obtain the zeros after the dot*/
            var decimals = format.substring((format.indexOf('.') + 1), format.length);
            /*number of decimals to obtain the exponent of 10 for round*/
            var numberofdecimals = Math.pow(10, decimals.length);
            if (CurrentBrowser.browserName() == "Chrome")
                numberofdecimals = parseFloat(numberofdecimals.toPrecision(1));
            var round = (Math.round(Math.abs(this * numberofdecimals)) / numberofdecimals) * (this < -0 ? -1 : 1);
            var result = round.toString();
            //Fix for bug CR 69389
            //This is a special case, when the number is 0.0000001 or 0.000000001, the result should not be a scientific notation.
            if (result.toLowerCase().indexOf('e-') > 0)
                result = round.toFixed(20);
            if (result.indexOf('.') === -1 && decimals !== '') {
                result += '.';
            }
            result += decimals;
            //split the extra digits and return the correct number of decimals
            numbertostring = result.substring(0, (result.indexOf('.') > 0) ? (result.indexOf('.') + decimals.length + 1) : result.length);
            numbertostring = numbertostring.replace(/\#/g, '0');
        }
        else if (params[0].indexOf('E') !== -1) {
            var format = params[0];
            var zeroes = format.substring(0, format.indexOf('E'));
            var decimals = zeroes.substring(zeroes.indexOf('.') + 1, zeroes.length);
            numbertostring = this.toExponential(decimals.length).replace('e+', 'E');
        }
    }
    return separator && numbertostring ? numbertostring.replace(".", separator) : numbertostring;
};
var System;
(function (System) {
    var Double = (function () {
        function Double() {
        }
        /* Double IsNaN Declaration */
        Double.IsNaN = function (d) {
            return isNaN(d);
        };
        /* Double IsNegativeInfinity Declaration */
        Double.IsNegativeInfinity = function (d) {
            return d == this.NegativeInfinity;
        };
        /* Double IsPositiveInfinity Declaration */
        Double.IsPositiveInfinity = function (d) {
            return d == this.PositiveInfinity;
        };
        Double.TryParse = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            var s = arguments[0] != null ? arguments[0].toString() : "";
            switch (arguments.length) {
                case 2: return Double.TryParse_2(s, arguments[1]);
                case 4: return Double.TryParse_4(s, arguments[1], arguments[2], arguments[3]);
            }
            throw "Double TryParse Arguments Exception. The functions Double.TryParse take a rong number of parameters";
        };
        Double.TryParse_2 = function (s, resultref) {
            resultref = (System.Convert.To64Float(s) * 1.0);
            return { result: (!isNaN(resultref)), refs: { 0: resultref } };
        };
        Double.TryParse_4 = function (s, style, provider, resultref) {
            var res = "0";
            var find = "";
            if (provider != null) {
                var info = lang.asTypeT(provider, System.Globalization.NumberFormatInfo);
                if (info != null) {
                    /*Group Separator*/
                    s = Double.ReplaceGroupSeparator(s, info);
                    /*Group Separator*/
                    find = (info.NumberDecimalSeparator == ",") ? "." : ",";
                    if (s.indexOf(find) == -1)
                        res = s.replace(info.NumberDecimalSeparator, ".");
                    else
                        res = "NaN";
                }
                else {
                    res = s;
                }
            }
            else {
                res = s;
            }
            resultref = (System.Convert.To64Float(res) * 1.0);
            return { result: (!isNaN(resultref)), refs: { 0: resultref } };
        };
        /*Group Separator*/
        Double.ReplaceGroupSeparator = function (s, info) {
            var regex, result, str;
            if (info.NumberGroupSeparator != null && info.NumberGroupSizes != null) {
                if (info.NumberGroupSizes.length == 1) {
                    str = info.NumberGroupSeparator + "(\\d{3})";
                    str = str.replace(/\./g, "\\.");
                    regex = new RegExp(str, "g");
                    result = s.replace(regex, "$1");
                }
                else if (info.NumberGroupSizes.length == 2) {
                    if (info.NumberGroupSizes[1] == 0) {
                        str = info.NumberGroupSeparator + "(\\d{3})(" + info.NumberDecimalSeparator + "|$)";
                        str = str.replace(/\./g, "\\.");
                        regex = new RegExp(str, "g");
                        result = s.replace(regex, "$1$2");
                    }
                    else {
                        str = "^(\\d{1,2})(" + info.NumberGroupSeparator + "(\\d{2}))*" + info.NumberGroupSeparator + "(\\d{3})(" + info.NumberDecimalSeparator + "|$)";
                        str = str.replace(/\./g, "\\.");
                        regex = new RegExp(str, "g");
                        result = s.replace(regex, "$1$3$4$5");
                    }
                }
            }
            else {
                result = s;
            }
            return result;
        };
        Double.Parse = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1: return Double.Parse_1(arguments[0]);
                case 2: return Double.Parse_2(arguments[0], arguments[1]);
                case 3: return Double.Parse_3(arguments[0], arguments[1], arguments[2]);
            }
        };
        Double.Parse_1 = function (s) {
            if (s === null) {
                console.assert(s !== null, "Parse double not performed");
                throw "Double.Parse() Argument Null Exception";
            }
            else {
                var result = parseFloat(s);
                if (!isNaN(result)) {
                    return result;
                }
                else {
                    //console.assert(!isNaN(result), "Double.Parse() Format Exception");
                    throw "Double.Parse() Format Exception";
                }
            }
        };
        Double.Parse_2 = function (s, provider) {
            if (!provider) {
                return Double.Parse_1(s);
            }
            else {
                var res = "0";
                var info = lang.asTypeT(provider, System.Globalization.CultureInfo);
                if (info != null) {
                    s = Double.ReplaceGroupSeparator(s, info.NumberFormat);
                    res = s.replace(info.NumberFormat.NumberDecimalSeparator, ".");
                }
                else {
                    res = s;
                }
                return Double.Parse_1(res);
            }
        };
        Double.Parse_3 = function (s, provider, decimalPlaces) {
            var ret = 0;
            if (!provider) {
                ret = Double.Parse_1(s);
            }
            else {
                var res = "0";
                var info = lang.asTypeT(provider, System.Globalization.CultureInfo);
                if (info != null) {
                    s = Double.ReplaceGroupSeparator(s, info.NumberFormat);
                    res = s.replace(info.NumberFormat.NumberDecimalSeparator, ".");
                }
                else {
                    res = s;
                }
                ret = Double.Parse_1(res);
            }
            return System.Mathematics.roundTo(ret, decimalPlaces);
        };
        /* Double TryParse Declaration */
        /*public static ToString(format: string): string;
        public static ToString(provider: IFormatProvider): string;
        public static ToString(format: string, provider: IFormatProvider): string;
        public static ToString(...params): string {
           switch (arguments.length) {
              case 1:
                 if (typeof (arguments[0]) == "string") {
                    return Double.ToString_1(arguments[0]);
                 } else if (typeof (arguments[0]) == "IFormatProvider") {
                    return Double.ToString_2(arguments[0]);
                 } else {
                    throw "Invalid case";
                 }
              case 2: return Double.ToString_3(arguments[0], arguments[1]);
              default: throw "Invalid case";
           }
        }
        private static ToString_1(format: string): string {
           throw "NotImplemented";
        }
        private static ToString_2(provider: IFormatProvider): string {
           throw "NotImplemented";
        }
        private static ToString_3(format: string, provider: IFormatProvider): string {
           //AIS_TODO throw "NotImplemented";
           return "";
        }*/
        Double.IsInfinity = function (d) {
            if (d == Number.POSITIVE_INFINITY || d == Number.NEGATIVE_INFINITY) {
                return true;
            }
            return false;
        };
        Double.MaxValue = 1.79769e+308;
        Double.MinValue = -1.79769e+308;
        Double.NaN = 0.00 / 0.00;
        Double.NegativeInfinity = -1.0 / 0.00;
        Double.PositiveInfinity = 1.0 / 0.00;
        return Double;
    })();
    System.Double = Double;
})(System || (System = {}));
var System;
(function (System) {
    var GC = (function () {
        function GC() {
        }
        GC.SuppressFinalize = function (obj) {
            //AIS-TODO throw "NotImplemented";
        };
        GC.Collect = function () {
            //AIS-TODO throw "NotImplemented";
        };
        return GC;
    })();
    System.GC = GC;
})(System || (System = {}));
var System;
(function (System) {
    var Exception = (function () {
        function Exception() {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 0:
                    this.construc_0();
                    break;
                case 1:
                    this.construc_1(arguments[0]);
                    break;
                case 2:
                    this.construc_2(arguments[0], arguments[1]);
                    break;
                default:
                    throw "Invalid overload call for: exception constructor";
            }
        }
        Exception.prototype.construc_0 = function () {
            this._Message = "";
            this._InnerException = null;
        };
        Exception.prototype.construc_1 = function (message) {
            this._Message = message;
            this._InnerException = null;
        };
        Exception.prototype.construc_2 = function (message, innerexception) {
            this._Message = message;
            this._InnerException = innerexception;
        };
        Object.defineProperty(Exception.prototype, "InnerException", {
            get: function () {
                return this._InnerException;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Exception.prototype, "Message", {
            get: function () {
                return this._Message;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Exception.prototype, "StackTrace", {
            get: function () {
                throw "NotImplemented";
            },
            enumerable: true,
            configurable: true
        });
        Exception.prototype.ToString = function () {
            return lang.getClassName(this);
        };
        return Exception;
    })();
    System.Exception = Exception;
})(System || (System = {}));
var System;
(function (System) {
    var Mathematics = (function () {
        function Mathematics() {
        }
        /* Math roundTo Declaration */
        Mathematics.roundTo = function (value, digits) {
            var sign = "";
            if (value <= -0.5) {
                sign = "-";
                value = Math.abs(value);
            }
            var expresion = value + "e+" + digits;
            var expNum = +expresion;
            return +(sign + Math.round(expNum) + "e-" + digits);
        };
        return Mathematics;
    })();
    System.Mathematics = Mathematics;
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        (function (BasicHttpSecurityMode) {
            BasicHttpSecurityMode[BasicHttpSecurityMode["None"] = 0] = "None";
            BasicHttpSecurityMode[BasicHttpSecurityMode["Transport"] = 1] = "Transport";
            BasicHttpSecurityMode[BasicHttpSecurityMode["TransportWithMessageCredential"] = 3] = "TransportWithMessageCredential";
            BasicHttpSecurityMode[BasicHttpSecurityMode["TransportCredentialOnly"] = 4] = "TransportCredentialOnly";
        })(ServiceModel.BasicHttpSecurityMode || (ServiceModel.BasicHttpSecurityMode = {}));
        var BasicHttpSecurityMode = ServiceModel.BasicHttpSecurityMode;
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var Channels;
        (function (Channels) {
            var MessageHeaderInfo = (function () {
                function MessageHeaderInfo() {
                }
                Object.defineProperty(MessageHeaderInfo.prototype, "Actor", {
                    get: function () {
                        return this._Actor;
                    },
                    set: function (value) {
                        this._Actor = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MessageHeaderInfo.prototype, "IsReferenceParameter", {
                    get: function () {
                        return this._IsReferenceParameter;
                    },
                    set: function (value) {
                        this._IsReferenceParameter = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MessageHeaderInfo.prototype, "MustUnderstand", {
                    get: function () {
                        return this._MustUnderstand;
                    },
                    set: function (value) {
                        this._MustUnderstand = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MessageHeaderInfo.prototype, "Name", {
                    get: function () {
                        return this._Name;
                    },
                    set: function (value) {
                        this._Name = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MessageHeaderInfo.prototype, "Namespace", {
                    get: function () {
                        return this._Namespace;
                    },
                    set: function (value) {
                        this._Namespace = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MessageHeaderInfo.prototype, "Relay", {
                    get: function () {
                        return this._Relay;
                    },
                    set: function (value) {
                        this._Relay = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return MessageHeaderInfo;
            })();
            Channels.MessageHeaderInfo = MessageHeaderInfo;
        })(Channels = ServiceModel.Channels || (ServiceModel.Channels = {}));
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var SystemException = (function (_super) {
        __extends(SystemException, _super);
        function SystemException() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _super.call(this);
            switch (args.length) {
                case 0:
                    //0 args
                    break;
                case 1:
                    //1 args
                    break;
                case 2:
                    //2 args
                    break;
                default:
                    break;
            }
        }
        return SystemException;
    })(System.Exception);
    System.SystemException = SystemException;
})(System || (System = {}));
var System;
(function (System) {
    var NotImplementedException = (function (_super) {
        __extends(NotImplementedException, _super);
        function NotImplementedException() {
            _super.call(this);
            throw "NotImplementedException";
        }
        return NotImplementedException;
    })(System.SystemException);
    System.NotImplementedException = NotImplementedException;
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var ChannelBase = (function () {
            function ChannelBase() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
            }
            ChannelBase.prototype.AllowOutputBatching = function () {
                throw "NotImplemented";
            };
            ChannelBase.prototype.BeginInvoke = function (methodName, args, callback, state) {
            };
            ChannelBase.prototype.EndInvoke = function (methodName, args, result) {
            };
            return ChannelBase;
        })();
        ServiceModel.ChannelBase = ChannelBase;
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var Channels;
        (function (Channels) {
            var Binding = (function () {
                function Binding() {
                }
                return Binding;
            })();
            Channels.Binding = Binding;
        })(Channels = ServiceModel.Channels || (ServiceModel.Channels = {}));
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var ClientBase = (function () {
            function ClientBase() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
            }
            Object.defineProperty(ClientBase.prototype, "Channel", {
                get: function () {
                    throw "NotImplemented";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ClientBase.prototype, "InnerChannel", {
                get: function () {
                    throw "NotImplemented";
                },
                enumerable: true,
                configurable: true
            });
            return ClientBase;
        })();
        ServiceModel.ClientBase = ClientBase;
        var BeginOperationDelegate = (function (_super) {
            __extends(BeginOperationDelegate, _super);
            function BeginOperationDelegate() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                _super.call(this);
            }
            return BeginOperationDelegate;
        })(Events.Delegate);
        ServiceModel.BeginOperationDelegate = BeginOperationDelegate;
        var EndOperationDelegate = (function (_super) {
            __extends(EndOperationDelegate, _super);
            function EndOperationDelegate() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                _super.call(this);
            }
            return EndOperationDelegate;
        })(Events.Delegate);
        ServiceModel.EndOperationDelegate = EndOperationDelegate;
        var InvokeAsync = (function (_super) {
            __extends(InvokeAsync, _super);
            function InvokeAsync() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                _super.call(this);
            }
            return InvokeAsync;
        })(Events.Delegate);
        ServiceModel.InvokeAsync = InvokeAsync;
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Int64 = (function () {
        function Int64() {
        }
        Int64.Parse = function () {
            var allParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                allParams[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1:
                    return this.Parse_1(arguments[0]);
                case 2:
                    return this.Parse_2(arguments[0], arguments[1]);
                case 3:
                    return this.Parse_3(arguments[0], arguments[1], arguments[2]);
                default:
                    throw "Invalid overload call for: constructor";
            }
        };
        Int64.Parse_1 = function (s) {
            throw "NotImplemented";
        };
        Int64.Parse_2 = function (s, provider) {
            throw "NotImplemented";
        };
        Int64.Parse_3 = function (s, style, provider) {
            throw "NotImplemented";
        };
        Int64.MaxValue = 9223372036854775807;
        Int64.MinValue = -9223372036854775808;
        return Int64;
    })();
    System.Int64 = Int64;
})(System || (System = {}));
var System;
(function (System) {
    var InvalidOperationException = (function (_super) {
        __extends(InvalidOperationException, _super);
        function InvalidOperationException() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _super.call(this);
            switch (args.length) {
                case 0:
                    //0 args
                    break;
                case 1:
                    //1 args
                    break;
                case 2:
                    //2 args
                    break;
                default:
                    break;
            }
        }
        return InvalidOperationException;
    })(System.SystemException);
    System.InvalidOperationException = InvalidOperationException;
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var Stream = (function () {
            function Stream() {
            }
            Object.defineProperty(Stream.prototype, "Position", {
                get: function () { throw "NotImplemented"; },
                set: function (value) {
                    this._Position = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Stream.prototype, "Length", {
                get: function () {
                    return this._Length;
                },
                enumerable: true,
                configurable: true
            });
            /* SetLength function */
            Stream.prototype.SetLength = function (value) {
                throw "NotImplemented";
            };
            /* Dispose function */
            Stream.prototype.Dispose = function () {
                throw "NotImplemented";
            };
            /* Close function */
            Stream.prototype.Close = function () {
                throw "NotImplemented";
            };
            return Stream;
        })();
        IO.Stream = Stream;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        (function (FileAccess) {
            // Summary:
            //     Read access to the file. Data can be read from the file. Combine with Write
            //     for read/write access.
            FileAccess[FileAccess["Read"] = 1] = "Read";
            //
            // Summary:
            //     Write access to the file. Data can be written to the file. Combine with Read
            //     for read/write access.
            FileAccess[FileAccess["Write"] = 2] = "Write";
            //
            // Summary:
            //     Read and write access to the file. Data can be written to and read from the
            //     file.
            FileAccess[FileAccess["ReadWrite"] = 3] = "ReadWrite";
        })(IO.FileAccess || (IO.FileAccess = {}));
        var FileAccess = IO.FileAccess;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        (function (FileMode) {
            // Summary:
            //     Specifies that the operating system should create a new file.
            FileMode[FileMode["CreateNew"] = 1] = "CreateNew";
            //
            // Summary:
            //     Specifies that the operating system should create a new file. If the file
            //     already exists, it will be overwritten. System.IO.FileMode.Create is equivalent
            //     to requesting that if the file does not exist, use System.IO.FileMode.CreateNew;
            //     otherwise, use System.IO.FileMode.Truncate.
            FileMode[FileMode["Create"] = 2] = "Create";
            //
            // Summary:
            //     Specifies that the operating system should open an existing file. The ability
            //     to open the file is dependent on the value specified by System.IO.FileAccess.
            //     A System.IO.FileNotFoundException is thrown if the file does not exist.
            FileMode[FileMode["Open"] = 3] = "Open";
            //
            // Summary:
            //     Specifies that the operating system should open a file if it exists; otherwise,
            //     a new file should be created.
            FileMode[FileMode["OpenOrCreate"] = 4] = "OpenOrCreate";
            //
            // Summary:
            //     Specifies that the operating system should open an existing file. Once opened,
            //     the file should be truncated so that its size is zero bytes.
            FileMode[FileMode["Truncate"] = 5] = "Truncate";
            //
            // Summary:
            //     Opens the file if it exists and seeks to the end of the file, or creates
            //     a new file. System.IO.FileMode.Append can only be used in conjunction with
            //     System.IO.FileAccess.Write. Attempting to seek to a position before the end
            //     of the file will throw an System.IO.IOException and any attempt to read fails
            //     and throws an System.NotSupportedException.
            FileMode[FileMode["Append"] = 6] = "Append";
        })(IO.FileMode || (IO.FileMode = {}));
        var FileMode = IO.FileMode;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        (function (FileShare) {
            // Summary:
            //     Declines sharing of the current file. Any request to open the file (by this
            //     process or another process) will fail until the file is closed.
            FileShare[FileShare["None"] = 0] = "None";
            //
            // Summary:
            //     Allows subsequent opening of the file for reading. If this flag is not specified,
            //     any request to open the file for reading (by this process or another process)
            //     will fail until the file is closed.
            FileShare[FileShare["Read"] = 1] = "Read";
            //
            // Summary:
            //     Allows subsequent opening of the file for writing. If this flag is not specified,
            //     any request to open the file for writing (by this process or another process)
            //     will fail until the file is closed.
            FileShare[FileShare["Write"] = 2] = "Write";
            //
            // Summary:
            //     Allows subsequent opening of the file for reading or writing. If this flag
            //     is not specified, any request to open the file for reading or writing (by
            //     this process or another process) will fail until the file is closed.
            FileShare[FileShare["ReadWrite"] = 3] = "ReadWrite";
            //
            // Summary:
            //     Allows subsequent deleting of a file.
            FileShare[FileShare["Delete"] = 4] = "Delete";
            //
            // Summary:
            //     Makes the file handle inheritable by child processes.
            FileShare[FileShare["Inheritable"] = 16] = "Inheritable";
        })(IO.FileShare || (IO.FileShare = {}));
        var FileShare = IO.FileShare;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var FileStream = (function (_super) {
            __extends(FileStream, _super);
            function FileStream() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                switch (arguments.length) {
                    case 2:
                        this.constructor_FS2(arguments[0], arguments[1]);
                        break;
                    case 3:
                        _super.call(this);
                        this.constructor_FS3(arguments[0], arguments[1], arguments[2]);
                        break;
                    case 4:
                        _super.call(this);
                        this.constructor_FS4(arguments[0], arguments[1], arguments[2], arguments[3]);
                        break;
                    default:
                        throw "NotImplemented";
                }
            }
            FileStream.prototype.constructor_FS2 = function (path, mode) {
                this._Mode = mode;
                this._Path = path;
            };
            FileStream.prototype.constructor_FS3 = function (path, mode, access) {
                throw "NotImplemented";
            };
            FileStream.prototype.constructor_FS4 = function (path, mode, access, share) {
                throw "NotImplemented";
            };
            FileStream.prototype.Dispose = function () {
                this._Mode = null;
                this._Path = null;
            };
            return FileStream;
        })(IO.Stream);
        IO.FileStream = FileStream;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var IsolatedStorage;
        (function (IsolatedStorage) {
            var IsolatedStorageFile = (function () {
                function IsolatedStorageFile() {
                    /*2,5 MB*/
                    this._AvailableFreeSpace = localStorage.remainingSpace;
                }
                Object.defineProperty(IsolatedStorageFile.prototype, "AvailableFreeSpace", {
                    get: function () {
                        return this._AvailableFreeSpace;
                    },
                    enumerable: true,
                    configurable: true
                });
                IsolatedStorageFile.prototype.FileExists = function (path) {
                    if (window.localStorage) {
                        return localStorage.getItem(path) != null;
                    }
                };
                IsolatedStorageFile.GetUserStoreForApplication = function () {
                    var ISF = new IsolatedStorageFile();
                    return ISF;
                };
                /* Dispose function */
                IsolatedStorageFile.prototype.Dispose = function () {
                    this._AvailableFreeSpace = null;
                };
                IsolatedStorageFile.GetUserStoreForSite = function () {
                    var ISF = new IsolatedStorageFile();
                    return ISF;
                };
                IsolatedStorageFile.prototype.OpenFile = function (path, mode) {
                    return new IsolatedStorage.IsolatedStorageFileStream(path, mode);
                };
                IsolatedStorageFile.prototype.SaveFile = function (stream, path) {
                    IsolatedStorage.IsolatedStorageFileStream.Save(stream, path);
                };
                IsolatedStorageFile.prototype.DeleteFile = function (path) {
                    localStorage.removeItem(path);
                };
                return IsolatedStorageFile;
            })();
            IsolatedStorage.IsolatedStorageFile = IsolatedStorageFile;
        })(IsolatedStorage = IO.IsolatedStorage || (IO.IsolatedStorage = {}));
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var IsolatedStorage;
        (function (IsolatedStorage) {
            var IsolatedStorageFileStream = (function (_super) {
                __extends(IsolatedStorageFileStream, _super);
                function IsolatedStorageFileStream() {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i - 0] = arguments[_i];
                    }
                    switch (arguments.length) {
                        case 2:
                            _super.call(this, arguments[0], arguments[1]);
                            this.constructor_2(arguments[0], arguments[1]);
                            break;
                        case 3:
                            _super.call(this, arguments[0], arguments[1], arguments[2]);
                            this.constructor_3(arguments[0], arguments[1], arguments[2]);
                            break;
                        case 4:
                            _super.call(this, arguments[0], arguments[1], arguments[2], arguments[3]);
                            this.constructor_4(arguments[0], arguments[1], arguments[2], arguments[3]);
                            break;
                        default:
                            throw "NotImplemented";
                    }
                }
                Object.defineProperty(IsolatedStorageFileStream.prototype, "Stream", {
                    get: function () {
                        return this._Stream;
                    },
                    set: function (stream) {
                        this._Stream = stream;
                    },
                    enumerable: true,
                    configurable: true
                });
                IsolatedStorageFileStream.prototype.constructor_2 = function (path, mode) {
                    var stream = "";
                    if (window.localStorage) {
                        if (mode == IO.FileMode.Create || mode == IO.FileMode.CreateNew || mode == IO.FileMode.OpenOrCreate) {
                            localStorage.setItem(path, "");
                        }
                        if (localStorage.getItem(path) != null) {
                            stream = localStorage.getItem(path);
                        }
                    }
                    this._Stream = stream;
                };
                IsolatedStorageFileStream.Save = function (stream, path) {
                    if (window.localStorage) {
                        localStorage.setItem(path, stream);
                    }
                };
                IsolatedStorageFileStream.prototype.constructor_3 = function (path, mode, isf) {
                    throw "NotImplemented";
                };
                IsolatedStorageFileStream.prototype.constructor_4 = function (path, mode, access, isf) {
                    throw "NotImplemented";
                };
                IsolatedStorageFileStream.prototype.Flush = function () {
                    throw "NotImplemented";
                };
                return IsolatedStorageFileStream;
            })(IO.FileStream);
            IsolatedStorage.IsolatedStorageFileStream = IsolatedStorageFileStream;
        })(IsolatedStorage = IO.IsolatedStorage || (IO.IsolatedStorage = {}));
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var TextReader = (function () {
            function TextReader() {
            }
            /* Close function */
            TextReader.prototype.Close = function () {
                throw "NotImplemented";
            };
            TextReader.prototype.Dispose = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                switch (arguments.length) {
                    case 0:
                        this.Dispose_1();
                        break;
                    case 1:
                        this.Dispose_2(arguments[0]);
                        break;
                    default: throw "Invalid overload call for: Dispose";
                }
            };
            TextReader.prototype.Dispose_1 = function () {
                throw "NotImplemented";
            };
            TextReader.prototype.Dispose_2 = function (disposing) {
                throw "NotImplemented";
            };
            return TextReader;
        })();
        IO.TextReader = TextReader;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var StreamReader = (function (_super) {
            __extends(StreamReader, _super);
            function StreamReader() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                _super.call(this);
                switch (arguments.length) {
                    case 1:
                        this.constructor_1(arguments[0]);
                        break;
                    case 2:
                        this.constructor_2(arguments[0], arguments[1]);
                        break;
                    default: throw "Invalid overload call for: constructor";
                }
            }
            StreamReader.prototype.constructor_1 = function (stream) {
                this.varStream = stream;
            };
            StreamReader.prototype.constructor_2 = function (stream, encoding /*AIS_TODO: Encoding*/) {
                this.varStream = stream;
                this.varEncoding = encoding;
            };
            /* ReadToEnd function */
            StreamReader.prototype.ReadToEnd = function () {
                throw "NotImplemented";
            };
            StreamReader.prototype.Dispose = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                switch (arguments.length) {
                    case 0:
                        this.Dispose_1_();
                        break;
                    case 1:
                        this.Dispose_2_(arguments[0]);
                        break;
                    default: throw "Invalid overload call for: Dispose";
                }
            };
            StreamReader.prototype.Dispose_1_ = function () {
                throw "NotImplemented";
            };
            StreamReader.prototype.Dispose_2_ = function (disposing) {
                throw "NotImplemented";
            };
            return StreamReader;
        })(IO.TextReader);
        IO.StreamReader = StreamReader;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var StreamWriter = (function () {
            function StreamWriter(stream) {
            }
            StreamWriter.prototype.Close = function () {
                throw "NotImplemented";
            };
            /* Dispose function */
            StreamWriter.prototype.Dispose = function (disposing) {
                throw "NotImplemented";
            };
            StreamWriter.prototype.Write = function (value) {
                throw "NotImplemented";
            };
            StreamWriter.prototype.WriteLine = function (value) {
                throw "NotImplemented";
            };
            return StreamWriter;
        })();
        IO.StreamWriter = StreamWriter;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Net;
    (function (Net) {
        var DownloadStringCompletedEventHandler = (function (_super) {
            __extends(DownloadStringCompletedEventHandler, _super);
            function DownloadStringCompletedEventHandler() {
                _super.apply(this, arguments);
            }
            return DownloadStringCompletedEventHandler;
        })(Events.Delegate);
        Net.DownloadStringCompletedEventHandler = DownloadStringCompletedEventHandler;
    })(Net = System.Net || (System.Net = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Net;
    (function (Net) {
        var WebResponse = (function () {
            function WebResponse() {
            }
            WebResponse.prototype.Dispose = function () {
                throw "NotImplemented";
            };
            WebResponse.prototype.GetResponseStream = function () {
                throw "NotImplemented";
            };
            return WebResponse;
        })();
        Net.WebResponse = WebResponse;
    })(Net = System.Net || (System.Net = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Net;
    (function (Net) {
        var HttpWebResponse = (function (_super) {
            __extends(HttpWebResponse, _super);
            function HttpWebResponse() {
                _super.call(this);
            }
            return HttpWebResponse;
        })(Net.WebResponse);
        Net.HttpWebResponse = HttpWebResponse;
    })(Net = System.Net || (System.Net = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Net;
    (function (Net) {
        var WebClient = (function () {
            function WebClient() {
            }
            WebClient.prototype.DownloadStringAsync = function (address, userToken) {
            };
            Object.defineProperty(WebClient.prototype, "IsBusy", {
                get: function () {
                    return this._IsBusy;
                },
                enumerable: true,
                configurable: true
            });
            WebClient.prototype.CancelAsync = function () {
            };
            return WebClient;
        })();
        Net.WebClient = WebClient;
    })(Net = System.Net || (System.Net = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Net;
    (function (Net) {
        var WebException = (function (_super) {
            __extends(WebException, _super);
            function WebException() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                _super.call(this);
                switch (args.length) {
                    case 0:
                        //0 args
                        break;
                    case 1:
                        //1 args
                        break;
                    case 2:
                        //2 args
                        break;
                    case 3:
                        //3 args
                        break;
                    case 4:
                        //4 args
                        break;
                    default:
                        break;
                }
            }
            Object.defineProperty(WebException.prototype, "Response", {
                get: function () {
                    return this._Response;
                },
                set: function (value) {
                    this._Response = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebException.prototype, "Status", {
                get: function () {
                    return this._Status;
                },
                enumerable: true,
                configurable: true
            });
            return WebException;
        })(System.InvalidOperationException);
        Net.WebException = WebException;
    })(Net = System.Net || (System.Net = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Net;
    (function (Net) {
        (function (WebExceptionStatus) {
            WebExceptionStatus[WebExceptionStatus["Success"] = 0] = "Success";
            WebExceptionStatus[WebExceptionStatus["ConnectFailure"] = 2] = "ConnectFailure";
            WebExceptionStatus[WebExceptionStatus["SendFailure"] = 4] = "SendFailure";
            WebExceptionStatus[WebExceptionStatus["RequestCanceled"] = 6] = "RequestCanceled";
            WebExceptionStatus[WebExceptionStatus["Pending"] = 13] = "Pending";
            WebExceptionStatus[WebExceptionStatus["UnknownError"] = 16] = "UnknownError";
            WebExceptionStatus[WebExceptionStatus["MessageLengthLimitExceeded"] = 17] = "MessageLengthLimitExceeded";
        })(Net.WebExceptionStatus || (Net.WebExceptionStatus = {}));
        var WebExceptionStatus = Net.WebExceptionStatus;
    })(Net = System.Net || (System.Net = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Reflection;
    (function (Reflection) {
        var MemberInfo = (function () {
            function MemberInfo() {
            }
            Object.defineProperty(MemberInfo.prototype, "Name", {
                get: function () {
                    return this._Name;
                },
                set: function (val) {
                    this._Name = val;
                },
                enumerable: true,
                configurable: true
            });
            return MemberInfo;
        })();
        Reflection.MemberInfo = MemberInfo;
    })(Reflection = System.Reflection || (System.Reflection = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Reflection;
    (function (Reflection) {
        var PropertyInfo = (function (_super) {
            __extends(PropertyInfo, _super);
            function PropertyInfo() {
                _super.apply(this, arguments);
            }
            /* GetValue function */
            PropertyInfo.prototype.GetValue = function (obj, index) {
                throw "NotImplemented";
            };
            /* SetValue function */
            PropertyInfo.prototype.SetValue = function (obj, value, index) {
                throw "NotImplemented";
            };
            return PropertyInfo;
        })(Reflection.MemberInfo);
        Reflection.PropertyInfo = PropertyInfo;
    })(Reflection = System.Reflection || (System.Reflection = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Single = (function () {
        function Single() {
        }
        /* Single IsNaN Declaration */
        Single.IsNaN = function (d) {
            return d == this.NaN;
        };
        /* Single IsNegativeInfinity Declaration */
        Single.IsNegativeInfinity = function (d) {
            return d == this.NegativeInfinity;
        };
        /* Single IsPositiveInfinity Declaration */
        Single.IsPositiveInfinity = function (d) {
            return d == this.PositiveInfinity;
        };
        Single.ToString = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1:
                    if (typeof (arguments[0]) == "string") {
                        return Single.ToString_1(arguments[0]);
                    }
                    else if (typeof (arguments[0]) == "IFormatProvider") {
                        return Single.ToString_2(arguments[0]);
                    }
                    else {
                        throw "Invalid case";
                    }
                case 2: return Single.ToString_3(arguments[0], arguments[1]);
                default: throw "Invalid case";
            }
        };
        Single.ToString_1 = function (format) {
            throw "NotImplemented";
        };
        Single.ToString_2 = function (provider) {
            throw "NotImplemented";
        };
        Single.ToString_3 = function (format, provider) {
            throw "NotImplemented";
        };
        Single.NaN = 0.00 / 0.00;
        Single.NegativeInfinity = -1.0 / 0.00;
        Single.PositiveInfinity = 1.0 / 0.00;
        return Single;
    })();
    System.Single = Single;
})(System || (System = {}));
var System;
(function (System) {
    var Threading;
    (function (Threading) {
        var Interlocked = (function () {
            function Interlocked() {
            }
            Object.defineProperty(Interlocked, "Dispatchers", {
                get: function () {
                    if (Interlocked._Dispatchers == null)
                        Interlocked._Dispatchers = new System.Collections.Generic.Dictionary();
                    return Interlocked._Dispatchers;
                },
                enumerable: true,
                configurable: true
            });
            Interlocked.Exchange = function (refLocationVariable, value) {
                var retValue = null;
                if (refLocationVariable != "" && refLocationVariable != null) {
                    if (value != null && value > 0) {
                        for (var i = 0; i < Interlocked.Dispatchers.Count; i++) {
                            if (Interlocked.Dispatchers.Values[i].RefLocationVariable == refLocationVariable) {
                                Interlocked.Dispatchers.Values[i].Dispatcher.Stop();
                                Interlocked.Dispatchers.Values[i].Dispatcher.Interval = System.TimeSpan.FromMilliseconds(value);
                                Interlocked.Dispatchers.Values[i].Dispatcher.Start();
                                retValue = Interlocked._Dispatchers.Values[i].Dispatcher.Interval.Milliseconds;
                            }
                        }
                        return retValue;
                    }
                    else {
                        throw new System.ArgumentNullException("The address of parameter 'value' is a null pointer");
                    }
                }
                else {
                    throw new System.ArgumentNullException("The address of parameter 'refLocationVariable' is a null pointer");
                }
            };
            Interlocked.AddDispatcher = function (refLocationVariable, dispatcher) {
                if (!Interlocked.Dispatchers.ContainsKey(dispatcher)) {
                    Interlocked.Dispatchers.Add(dispatcher, new DispatcherInfo(refLocationVariable, dispatcher));
                }
            };
            Interlocked.RemoveDispatcher = function (dispatcher) {
                if (Interlocked.Dispatchers.ContainsKey(dispatcher)) {
                    Interlocked.Dispatchers.Remove(dispatcher);
                }
            };
            return Interlocked;
        })();
        Threading.Interlocked = Interlocked;
        var DispatcherInfo = (function () {
            function DispatcherInfo(refLocationVariable, dispatcher) {
                this._dispatcher = dispatcher;
                this._refLocationVariable = refLocationVariable;
            }
            Object.defineProperty(DispatcherInfo.prototype, "RefLocationVariable", {
                get: function () {
                    return this._refLocationVariable;
                },
                set: function (refLocationVariable) {
                    this._refLocationVariable = refLocationVariable;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DispatcherInfo.prototype, "Dispatcher", {
                get: function () {
                    return this._dispatcher;
                },
                enumerable: true,
                configurable: true
            });
            return DispatcherInfo;
        })();
        Threading.DispatcherInfo = DispatcherInfo;
    })(Threading = System.Threading || (System.Threading = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Threading;
    (function (Threading) {
        var SendOrPostCallback = (function (_super) {
            __extends(SendOrPostCallback, _super);
            function SendOrPostCallback() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                _super.call(this);
            }
            return SendOrPostCallback;
        })(Events.Delegate);
        Threading.SendOrPostCallback = SendOrPostCallback;
    })(Threading = System.Threading || (System.Threading = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Threading;
    (function (Threading) {
        var Timer = (function () {
            function Timer(callback, state, dueTime, period) {
                this.Callback = callback;
                this.State = state;
                this.DueTime = dueTime;
                this.Period = period;
                this._Tick = new Events.Delegate();
            }
            Object.defineProperty(Timer.prototype, "Tick", {
                get: function () {
                    return this._Tick;
                },
                enumerable: true,
                configurable: true
            });
            Timer.prototype.Start = function () {
                //setTimeout(this.InitTimer, this.DueTime);
                this.InitTimer();
            };
            Timer.prototype.InitTimer = function () {
                var func = this._Tick.raise;
                var scope = this._Tick;
                this._intervalID = setInterval(function () { func.call(scope); }, this.Period);
                this._isEnabled = true;
            };
            Timer.prototype.Stop = function () {
                clearInterval(this._intervalID);
                this._isEnabled = false;
            };
            Timer.prototype.Dispose = function () {
                if (this._isEnabled && this._intervalID) {
                    clearInterval(this._intervalID);
                    this._isEnabled = false;
                }
            };
            return Timer;
        })();
        Threading.Timer = Timer;
    })(Threading = System.Threading || (System.Threading = {}));
})(System || (System = {}));
var System;
(function (System) {
    var UInt64 = (function () {
        function UInt64() {
        }
        UInt64.Parse = function () {
            var allParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                allParams[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2:
                    return this.Parse_1(arguments[0], arguments[1]);
                case 3:
                    return this.Parse_2(arguments[0], arguments[1], arguments[2]);
                default:
                    throw "Invalid overload call for: Parse";
            }
        };
        UInt64.Parse_1 = function (s, provider) {
            throw "NotImplemented";
        };
        UInt64.Parse_2 = function (s, style, provider) {
            throw "NotImplemented";
        };
        UInt64.MaxValue = 18446744073709551615;
        UInt64.MinValue = 0;
        return UInt64;
    })();
    System.UInt64 = UInt64;
})(System || (System = {}));
var System;
(function (System) {
    (function (UriComponents) {
        // Summary:
        //     The complete System.Uri context that is needed for Uri Serializers. The context
        //     includes the IPv6 scope.
        UriComponents[UriComponents["SerializationInfoString"] = -2147483648] = "SerializationInfoString";
        //
        // Summary:
        //     The System.Uri.Scheme data.
        UriComponents[UriComponents["Scheme"] = 1] = "Scheme";
        //
        // Summary:
        //     The System.Uri.UserInfo data.
        UriComponents[UriComponents["UserInfo"] = 2] = "UserInfo";
        //
        // Summary:
        //     The System.Uri.Host data.
        UriComponents[UriComponents["Host"] = 4] = "Host";
        //
        // Summary:
        //     The System.Uri.Port data.
        UriComponents[UriComponents["Port"] = 8] = "Port";
        //
        // Summary:
        //     The System.Uri.Scheme, System.Uri.Host, and System.Uri.Port data.
        UriComponents[UriComponents["SchemeAndServer"] = 13] = "SchemeAndServer";
        //
        // Summary:
        //     The System.Uri.LocalPath data.
        UriComponents[UriComponents["Path"] = 16] = "Path";
        //
        // Summary:
        //     The System.Uri.Query data.
        UriComponents[UriComponents["Query"] = 32] = "Query";
        //
        // Summary:
        //     The System.Uri.LocalPath and System.Uri.Query data.
        UriComponents[UriComponents["PathAndQuery"] = 48] = "PathAndQuery";
        //
        // Summary:
        //     The System.Uri.Scheme, System.Uri.Host, System.Uri.Port, System.Uri.LocalPath,
        //     and System.Uri.Query data.
        UriComponents[UriComponents["HttpRequestUrl"] = 61] = "HttpRequestUrl";
        //
        // Summary:
        //     The System.Uri.Fragment data.
        UriComponents[UriComponents["Fragment"] = 64] = "Fragment";
        //
        // Summary:
        //     The System.Uri.Scheme, System.Uri.UserInfo, System.Uri.Host, System.Uri.Port,
        //     System.Uri.LocalPath, System.Uri.Query, and System.Uri.Fragment data.
        UriComponents[UriComponents["AbsoluteUri"] = 127] = "AbsoluteUri";
        //
        // Summary:
        //     The System.Uri.Port data. If no port data is in the System.Uri and a default
        //     port has been assigned to the System.Uri.Scheme, the default port is returned.
        //     If there is no default port, -1 is returned.
        UriComponents[UriComponents["StrongPort"] = 128] = "StrongPort";
        //
        // Summary:
        //     The System.Uri.Host and System.Uri.Port data. If no port data is in the Uri
        //     and a default port has been assigned to the System.Uri.Scheme, the default
        //     port is returned. If there is no default port, -1 is returned.
        UriComponents[UriComponents["HostAndPort"] = 132] = "HostAndPort";
        //
        // Summary:
        //     The System.Uri.UserInfo, System.Uri.Host, and System.Uri.Port data. If no
        //     port data is in the System.Uri and a default port has been assigned to the
        //     System.Uri.Scheme, the default port is returned. If there is no default port,
        //     -1 is returned.
        UriComponents[UriComponents["StrongAuthority"] = 134] = "StrongAuthority";
        //
        // Summary:
        //     Specifies that the delimiter should be included.
        UriComponents[UriComponents["KeepDelimiter"] = 1073741824] = "KeepDelimiter";
    })(System.UriComponents || (System.UriComponents = {}));
    var UriComponents = System.UriComponents;
})(System || (System = {}));
var System;
(function (System) {
    // Summary:
    //     Controls how URI information is escaped.
    (function (UriFormat) {
        // Summary:
        //     Escaping is performed according to the rules in RFC 3986.
        UriFormat[UriFormat["UriEscaped"] = 1] = "UriEscaped";
        //
        // Summary:
        //     No escaping is performed.
        UriFormat[UriFormat["Unescaped"] = 2] = "Unescaped";
        //
        // Summary:
        //     Characters that have a reserved meaning in the requested URI components remain
        //     escaped. All others are not escaped. See Remarks.
        UriFormat[UriFormat["SafeUnescaped"] = 3] = "SafeUnescaped";
    })(System.UriFormat || (System.UriFormat = {}));
    var UriFormat = System.UriFormat;
})(System || (System = {}));
var System;
(function (System) {
    (function (UriKind) {
        UriKind[UriKind["RelativeOrAbsolute"] = 0] = "RelativeOrAbsolute";
        UriKind[UriKind["Absolute"] = 1] = "Absolute";
        UriKind[UriKind["Relative"] = 2] = "Relative";
    })(System.UriKind || (System.UriKind = {}));
    var UriKind = System.UriKind;
})(System || (System = {}));
var System;
(function (System) {
    var Uri = (function () {
        function Uri() {
            var paramns = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                paramns[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1:
                    this.constructor_1(arguments[0]);
                    break;
                case 2:
                    this.constructor_2(arguments[0], arguments[1]);
                    break;
                default: throw "Invalid overload call for: constructor";
            }
        }
        Uri.prototype.constructor_1 = function (uriString) {
            if (uriString == null) {
                throw "ArgumentNullException";
            }
            this.AbsoluteUri = uriString;
        };
        Uri.prototype.constructor_2 = function (uriString, uriKind) {
            if (uriString == null) {
                throw "ArgumentNullException";
            }
            switch (uriKind) {
                case 0:
                    throw "Not Implemented";
                    break;
                case 1:
                    if (uriString.startsWith("http://") || uriString.startsWith("https://"))
                        this.AbsoluteUri = uriString;
                    else
                        throw "Exception uriString contains a relative URI and uriKind is System.UriKind.Absolute";
                    break;
                case 2:
                    if (!uriString.startsWith("http://") || uriString.startsWith("https://"))
                        this.RelativeUri = uriString;
                    else
                        throw "Exception uriString contains an absolute URI and uriKind is System.UriKind.Relative";
                    break;
                default: throw "Invalid UriKind";
            }
        };
        Object.defineProperty(Uri.prototype, "OriginalString", {
            get: function () {
                return this._OriginalString;
            },
            set: function (originalString) {
                this._OriginalString = originalString;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uri.prototype, "AbsoluteUri", {
            get: function () {
                return this._AbsoluteUri;
            },
            set: function (originalString) {
                this._AbsoluteUri = originalString;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Uri.prototype, "RelativeUri", {
            get: function () {
                return this._RelativeUri;
            },
            set: function (originalString) {
                this._RelativeUri = originalString;
            },
            enumerable: true,
            configurable: true
        });
        Uri.prototype.GetComponents = function (components, format) {
            var varComponents = "";
            switch (components) {
                case System.UriComponents.SchemeAndServer:
                    varComponents = varComponents + window.location.protocol + "//" + window.location.hostname;
                    break;
                case System.UriComponents.Path:
                    varComponents = varComponents + window.location.pathname;
                    break;
                case System.UriComponents.Scheme:
                    varComponents = varComponents + window.location.protocol;
                    break;
                case System.UriComponents.Host:
                    varComponents = varComponents + window.location.protocol + "//" + window.location.host;
                    break;
            }
            switch (format) {
                case System.UriFormat.Unescaped:
                    varComponents = decodeURIComponent(varComponents);
                    break;
            }
            return varComponents;
        };
        return Uri;
    })();
    System.Uri = Uri;
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var Channels;
        (function (Channels) {
            var MessageHeader = (function (_super) {
                __extends(MessageHeader, _super);
                function MessageHeader() {
                    _super.call(this);
                }
                MessageHeader.CreateHeader = function (name, ns, value) {
                    var varMessageHeader = new MessageHeader();
                    varMessageHeader.Actor = "";
                    varMessageHeader.Name = name;
                    varMessageHeader.Namespace = ns;
                    varMessageHeader.IsReferenceParameter = false;
                    varMessageHeader.MustUnderstand = false;
                    varMessageHeader.Relay = false;
                    this.messageHeader = this.messageHeader.format([ns, value]);
                    return varMessageHeader;
                };
                MessageHeader.messageHeader = "{<?xml version=\"1.0\" encoding=\"utf-16\"?><VPHeader xmlns=\"{0}\">{1}}</VPHeader>}";
                return MessageHeader;
            })(Channels.MessageHeaderInfo);
            Channels.MessageHeader = MessageHeader;
        })(Channels = ServiceModel.Channels || (ServiceModel.Channels = {}));
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var Channels;
        (function (Channels) {
            var MessageHeaders = (function () {
                function MessageHeaders() {
                }
                MessageHeaders.prototype.Add = function (header) {
                    throw ("not implemented");
                };
                return MessageHeaders;
            })();
            Channels.MessageHeaders = MessageHeaders;
        })(Channels = ServiceModel.Channels || (ServiceModel.Channels = {}));
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var OperationContext = (function () {
            function OperationContext(channel) {
            }
            Object.defineProperty(OperationContext, "Current", {
                get: function () {
                    return this._Current;
                },
                set: function (val) {
                    this._Current = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OperationContext.prototype, "OutgoingMessageHeaders", {
                get: function () {
                    return this._OutgoingMessageHeaders;
                },
                enumerable: true,
                configurable: true
            });
            return OperationContext;
        })();
        ServiceModel.OperationContext = OperationContext;
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var OperationContextScope = (function () {
            function OperationContextScope() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                if (typeof (arguments[0]) == "IContextChannel")
                    this.constructor_1(arguments[0]);
                else if (typeof (arguments[0]) == "OperationContext")
                    this.constructor_2(arguments[0]);
                else
                    throw "Invalid overload call for: constructor";
            }
            OperationContextScope.prototype.constructor_1 = function (channel) {
                this.varChannel = channel;
            };
            OperationContextScope.prototype.constructor_2 = function (context) {
                this.varContext = context;
            };
            OperationContextScope.prototype.Dispose = function () {
                throw ("not implemented");
            };
            return OperationContextScope;
        })();
        ServiceModel.OperationContextScope = OperationContextScope;
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ArgumentException = (function (_super) {
        __extends(ArgumentException, _super);
        function ArgumentException(message, paramName) {
            _super.call(this);
        }
        return ArgumentException;
    })(System.SystemException);
    System.ArgumentException = ArgumentException;
})(System || (System = {}));
var System;
(function (System) {
    var InvalidCastException = (function (_super) {
        __extends(InvalidCastException, _super);
        function InvalidCastException() {
            _super.apply(this, arguments);
        }
        return InvalidCastException;
    })(System.SystemException);
    System.InvalidCastException = InvalidCastException;
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var Dictionary = (function () {
                function Dictionary() {
                    var allParams = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        allParams[_i - 0] = arguments[_i];
                    }
                    switch (arguments.length) {
                        case 0:
                            this.constructor_1();
                            break;
                        case 1:
                            this.constructor_2(arguments[0]);
                            break;
                        default:
                            throw "Invalid overload call for: constructor";
                    }
                }
                Dictionary.prototype.constructor_1 = function () {
                    this.Count = 0;
                    this.Keys = new Array();
                    this.Values = new Array();
                    this.LastIndexSearched = -1;
                    this.LastKeySearched = null;
                    this.LastItemSearched = null;
                };
                Dictionary.prototype.constructor_2 = function (comparer) {
                    this.constructor_1();
                    this.Comparer = comparer;
                };
                Object.defineProperty(Dictionary.prototype, "LastIndexSearched", {
                    get: function () {
                        return this.lastIndexSearched;
                    },
                    set: function (value) {
                        this.lastIndexSearched = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dictionary.prototype, "LastKeySearched", {
                    get: function () {
                        return this.lastKeySearched;
                    },
                    set: function (value) {
                        this.lastKeySearched = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dictionary.prototype, "LastItemSearched", {
                    get: function () {
                        return this.lastItemSearched;
                    },
                    set: function (value) {
                        this.lastItemSearched = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dictionary.prototype, "Comparer", {
                    get: function () {
                        return this._Comparer;
                    },
                    set: function (comparer) {
                        this._Comparer = comparer;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dictionary.prototype, "Count", {
                    get: function () {
                        return this._Count;
                    },
                    set: function (enume) {
                        this._Count = enume;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dictionary.prototype, "Keys", {
                    get: function () {
                        return this._Keys;
                    },
                    set: function (key) {
                        this._Keys = key;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dictionary.prototype, "Values", {
                    get: function () {
                        return this._Values;
                    },
                    set: function (value) {
                        this._Values = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dictionary.prototype, "ToList", {
                    get: function () {
                        throw "NotImplemented";
                    },
                    enumerable: true,
                    configurable: true
                });
                Dictionary.prototype.Add = function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i - 0] = arguments[_i];
                    }
                    switch (arguments.length) {
                        case 1:
                            this.Count++;
                            this.Keys.push(arguments[0].Key);
                            this.Values.push(arguments[0].Value);
                            break;
                        case 2:
                            this.Count++;
                            this.Keys.push(arguments[0]);
                            this.Values.push(arguments[1]);
                            break;
                    }
                };
                /* Clear function implementation */
                Dictionary.prototype.Clear = function () {
                    for (var i in this.Keys) {
                        delete this.Keys[i];
                    }
                    for (var i in this.Values) {
                        delete this.Keys[i];
                    }
                    this.Count = 0;
                    this.LastIndexSearched = -1;
                    this.LastKeySearched = null;
                    this.LastItemSearched = null;
                };
                /* ContainsKey function implementation */
                Dictionary.prototype.ContainsKey = function (key) {
                    if (key == undefined) {
                        return false;
                    }
                    var result = false;
                    if (this.LastKeySearched != key) {
                        this.LastIndexSearched = this.Keys.indexOf(key);
                        result = (this.LastIndexSearched >= 0);
                        if (result) {
                            this.LastKeySearched = key;
                            this.LastItemSearched = this.Values[this.LastIndexSearched];
                        }
                        else {
                            this.LastKeySearched = null;
                            this.LastItemSearched = null;
                        }
                    }
                    else {
                        result = true;
                    }
                    return result;
                };
                /* ContainsValue function implementation */
                Dictionary.prototype.ContainsValue = function (value) {
                    if (value == undefined) {
                        return false;
                    }
                    var result = false;
                    if (this.LastItemSearched != value) {
                        this.LastIndexSearched = this.Values.indexOf(value);
                        result = (this.LastIndexSearched >= 0);
                        if (result) {
                            this.LastKeySearched = this.Keys[this.LastIndexSearched];
                            this.LastItemSearched = value;
                        }
                        else {
                            this.LastKeySearched = null;
                            this.LastItemSearched = null;
                        }
                    }
                    else {
                        result = true;
                    }
                    return result;
                    //return (this.Values.indexOf(value) >= 0);
                };
                /* GetEnumerator function implementation */
                Dictionary.prototype.GetEnumerator = function () {
                    throw "NotImplemented";
                };
                Dictionary.prototype.Remove = function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i - 0] = arguments[_i];
                    }
                    var tmp_previous;
                    var index = -1;
                    var value = null;
                    if (arguments[0] instanceof Generic.KeyValuePair)
                        value = arguments[0].Key;
                    else
                        value = arguments[0];
                    if (this.LastKeySearched == value) {
                        index = this.LastIndexSearched;
                        if (index >= 0) {
                            this.LastIndexSearched = -1;
                            this.LastKeySearched = null;
                            this.LastItemSearched = null;
                        }
                    }
                    else {
                        index = this.Keys.indexOf(value);
                    }
                    if (index >= 0) {
                        this.Count--;
                        this.Keys.splice(index, 1);
                        this.Values.splice(index, 1);
                        return true;
                    }
                    return false;
                };
                /* TryGetValue function implementation */
                Dictionary.prototype.TryGetValue = function (key, value) {
                    value = this.getItem(key);
                    return {
                        refs: [value],
                        result: value != undefined
                    };
                };
                Object.defineProperty(Dictionary.prototype, "Enumerator", {
                    get: function () {
                        return this._Enumerator;
                    },
                    set: function (enume) {
                        this._Enumerator = enume;
                    },
                    enumerable: true,
                    configurable: true
                });
                Dictionary.prototype.getItem = function (key) {
                    if (this.LastKeySearched == key) {
                        return this.LastItemSearched;
                    }
                    else {
                        this.LastIndexSearched = this.Keys.indexOf(key);
                        if (this.LastIndexSearched >= 0) {
                            this.LastKeySearched = key;
                            this.LastItemSearched = this.Values[this.LastIndexSearched];
                        }
                        else {
                            this.LastKeySearched = null;
                            this.LastItemSearched = null;
                        }
                    }
                    return this.LastItemSearched;
                };
                Dictionary.prototype.setItem = function (key, value) {
                    if (this.LastKeySearched != key) {
                        this.LastIndexSearched = this.Keys.indexOf(key);
                    }
                    if (this.LastIndexSearched >= 0) {
                        this.LastKeySearched = key;
                        this.Values[this.LastIndexSearched] = value;
                        this.LastItemSearched = value;
                    }
                    else {
                        this.LastIndexSearched = -1;
                        this.LastKeySearched = null;
                        this.LastItemSearched = null;
                        this.Add(key, value);
                    }
                };
                return Dictionary;
            })();
            Generic.Dictionary = Dictionary;
            var Enumerator = (function () {
                function Enumerator() {
                }
                Enumerator.prototype.Current = function () {
                    return null;
                };
                /* MoveNext function */
                Enumerator.prototype.MoveNext = function () {
                    return false;
                };
                /* Reset function */
                Enumerator.prototype.Reset = function () {
                };
                Enumerator.prototype.Dispose = function () {
                };
                return Enumerator;
            })();
            Generic.Enumerator = Enumerator;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Convert = (function () {
        function Convert() {
        }
        Convert.ToString = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1:
                    return this.ToString_1(arguments[0]);
                case 2:
                    if (typeof (arguments[1]) == "number") {
                        return this.ToString_2(arguments[0], arguments[1]);
                    }
                    else if (typeof (arguments[1]) == "IFormatProvider") {
                        return this.ToString_3(arguments[0], arguments[1]);
                    }
                    else {
                        return arguments[0].toString();
                    }
                default: throw "NotImplemented";
            }
        };
        Convert.ToString_1 = function (value) {
            return value;
        };
        Convert.ToString_2 = function (value, toBase) {
            if (toBase === 2)
                return this.dec2Bin(value, true); //(value < 0 ? (value >>> 0).toString(2) : value.toString(2));
            if (toBase === 8) {
                if (value < 0)
                    return this.convertBinaryToOctal(this.dec2Bin(value, false)); //(value < 0 ? (0xFFFFFFFF + value + 1).toString(8).replace("3", "177777777777") : value.toString(8));
                else
                    return parseInt(this.dec2Bin(value, true), 2).toString(8);
            }
            if (toBase === 10)
                return value + '';
            if (toBase === 16) {
                if (value < 0)
                    return this.convertBinaryToHexadecimal(this.dec2Bin(value, false)); //(value < 0 ? "FFFFFFFF" + (0xFFFFFFFF + value + 1).toString(16) : value.toString(16));
                else
                    return parseInt(this.dec2Bin(value, true), 2).toString(16);
            }
        };
        Convert.ToString_3 = function (value, provider) {
            throw "NotImplemented";
        };
        Convert.ToFloat = function (s) {
            if ((/^(\-|\+)?([0-9,]+(\.[0-9]*)?(((E|e)+(\+|\-)?)?[0-9]+)?|Infinity)$/.test(s))) {
                var x = parseFloat(s);
                var f32 = new Float32Array(1);
                return f32[0] = x, f32[0];
            }
            else
                return NaN;
        };
        Convert.To64Float = function (s) {
            if ((/^(\-|\+)?([0-9,]+(\.[0-9]*)?(((E|e)+(\+|\-)?)?[0-9]+)?|Infinity)$/.test(s))) {
                var x = parseFloat(s);
                var f64 = new Float64Array(1);
                return f64[0] = x, f64[0];
            }
            else
                return NaN;
        };
        // Seven digits verification (.NET precision emulation)
        Convert.ToNetFloat = function (s) {
            var result = Convert.ToFloat(s);
            var str_result = result.toString();
            if (str_result.indexOf(".") >= 0 && str_result.length - 1 > 7) {
                result = parseFloat(result.toFixed(7 - str_result.indexOf(".")));
            }
            return result;
        };
        Convert.ToInteger = function (s, radix) {
            if (radix && radix == 10 && (/^(\-|\+)?([0-9]+|Infinity)$/.test(s)))
                return parseInt(s, radix);
            else if (radix && radix == 2 && (/^(\-|\+)?([0-1]+|Infinity)$/.test(s)))
                return parseInt(s, radix);
            else if (radix && radix == 8 && (/^(\-|\+)?([0-7]+|Infinity)$/.test(s)))
                return parseInt(s, radix);
            else if (radix && radix == 16 && (/^(\-|\+)?([0-9ABCDEF]+|Infinity)$/.test(s.toUpperCase())))
                return parseInt(s, radix);
            else if (!radix) {
                var FloatValue = parseFloat(s);
                var FloatValueAbs = Math.abs(FloatValue);
                return (FloatValueAbs === 0.5) ? 0 : (Math.round(FloatValueAbs) * (FloatValue < 0 ? -1 : 1));
            }
            return NaN;
        };
        Convert.ToDouble = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            var value;
            if (arguments.length >= 1)
                value = this.BooleanConvertToNumber(arguments[0]);
            switch (arguments.length) {
                case 1: return Convert.ToDouble_1(value);
                case 2:
                    if (typeof arguments[1] == "string")
                        return Convert.ToDouble_2(value, arguments[1]);
                    else
                        return Convert.ToDouble_1(value);
                default: throw "Invalid overload call for: ToDouble";
            }
        };
        Convert.ToDouble_1 = function (value) {
            /*Double is always 64 bits double-precision, it is not necessary to Convert it to 32 bits
               for more reference:  https://msdn.microsoft.com/en-us/library/678hzkk9.aspx
                                    https://msdn.microsoft.com/en-us/library/aa691146(v=vs.71).aspx
            */
            var r = Convert.To64Float(value);
            if (isNaN(r))
                throw new System.FormatException();
            return r;
        };
        Convert.ToDouble_2 = function (value, type) {
            var r = null;
            if (type == "float")
                r = Convert.ToFloat(value);
            else
                r = parseFloat(value);
            if (isNaN(r))
                throw new System.FormatException();
            return r;
        };
        Convert.BooleanConvertToNumber = function (value) {
            if (typeof (value) === "boolean") {
                return value ? 1 : 0;
            }
            if (typeof (value) === "string") {
                return value.toLowerCase() === "true" ? 1 : (value.toLowerCase() === "false" ? 0 : value);
            }
            return value;
        };
        /* Convert ToInt16 Declaration */
        Convert.ToInt16 = function (value) {
            return Math.round(value);
        };
        Convert.ToInt64 = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1: return Convert.ToInt64_1(arguments[0]);
                case 2: return Convert.ToInt64_2(arguments[0], arguments[1]);
                default: throw "NotImplemented";
            }
        };
        Convert.ToInt64_1 = function (value) {
            var r = Convert.ToInteger(value);
            if (isNaN(r))
                throw new System.FormatException();
            return r;
        };
        Convert.ToInt64_2 = function (value, fromBase) {
            var r = Convert.ToInteger(value, fromBase);
            if (fromBase == 2 && value.length >= 32 && value.startsWith('1'))
                r = r >> 0;
            if (isNaN(r))
                throw new System.FormatException();
            return r;
        };
        /* Convert ToUInt64 Declaration */
        Convert.ToUInt64 = function (value, fromBase) {
            return Convert.ToInteger(value, fromBase);
        };
        Convert.ToBoolean = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1: return Convert.ToBoolean_1(arguments[0]);
                case 2: return Convert.ToBoolean_2(arguments[0], arguments[1]);
            }
        };
        Convert.ToBoolean_1 = function (value) {
            if (value != null) {
                if (!isNaN(value))
                    if (value != 0)
                        return true;
                    else
                        return false;
                else if (value === "True" || value === "true")
                    return true;
                else if (value === "False" || value === "false")
                    return false;
                else
                    throw "FormatException";
            }
            else {
                throw "ArgumentNullException";
            }
        };
        Convert.ToBoolean_2 = function (value, provider) {
            if (value != null) {
                if (!isNaN(value))
                    if (value != 0)
                        return true;
                    else
                        return false;
                else if (value === "True" || value === "true")
                    return true;
                else if (value === "False" || value === "false")
                    return false;
                else
                    throw "FormatException";
            }
            else {
                throw "ArgumentNullException";
            }
        };
        /* Convert ToDateTime Declaration */
        Convert.ToDateTime = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1:
                    return new System.DateTime(arguments[0]);
                case 2:
                    //Should be reviewed how to make a datetime using IProviderFormat, the second parametr is the format.
                    return new System.DateTime(arguments[0]);
            }
        };
        Convert.ToBase64String = function (value) {
            throw "NotImplemented";
        };
        Convert.dec2Bin = function (dec, justBin) {
            if (dec >= 0)
                return dec.toString(2);
            else {
                dec = dec * -1;
                var numBin = dec.toString(2);
                var length = numBin.length;
                // Complete the size of the binary num
                if (justBin) {
                    if (length < 32) {
                        numBin = this.completeBinary((33 - length)) + numBin;
                    }
                    else {
                        numBin = this.completeBinary((65 - length)) + numBin;
                    }
                }
                else {
                    numBin = this.completeBinary((65 - length)) + numBin;
                }
                var negBinNum = this.invertBinary(numBin);
                negBinNum = this.addOneBite(negBinNum);
                return negBinNum;
            }
        };
        Convert.completeBinary = function (copies) {
            var newStr = '0';
            copies = (copies > 0) ? copies : 1;
            while (--copies) {
                newStr += '0';
            }
            return newStr;
        };
        Convert.invertBinary = function (value) {
            var newValue = "";
            for (var i = 0; i < value.length; i++) {
                if (value[i] == "1")
                    newValue = newValue.concat("0");
                else
                    newValue = newValue.concat("1");
            }
            return newValue;
        };
        Convert.addOneBite = function (value) {
            var carry = "1";
            var newValue = "";
            for (var i = value.length - 1; i > 0; i--) {
                if (value[i] == "1") {
                    if (carry == "1") {
                        carry = "1";
                        newValue = "0".concat(newValue);
                    }
                    else {
                        newValue = value[i].concat(newValue);
                    }
                }
                else {
                    if (carry == "1") {
                        newValue = "1".concat(newValue);
                        carry = "0";
                    }
                    else {
                        newValue = value[i].concat(newValue);
                    }
                }
            }
            return newValue;
        };
        Convert.convertBinaryToHexadecimal = function (binaryString) {
            if (binaryString.length < 8)
                return parseInt(binaryString, 2).toString(16);
            var output = "", bytes = "", hex = "";
            for (var i = 0; i < binaryString.length; i += 4) {
                // Grab a chunk of 4 bits
                bytes = binaryString.substr(i, 4);
                hex = parseInt(bytes, 2).toString(16);
                // Uppercase all the letters and append to output
                output += hex.toUpperCase();
            }
            return output;
        };
        Convert.convertBinaryToOctal = function (binaryString) {
            var output = "", bytes = "", oct = "", binLenght = binaryString.length;
            var modBin = binLenght % 3;
            if (modBin > 0) {
                bytes = binaryString.substr(0, modBin);
                oct = parseInt(bytes, 2).toString(8);
                output += oct;
            }
            for (var i = modBin; i < binaryString.length; i += 3) {
                // Grab a chunk of 3 bits
                bytes = binaryString.substr(i, 3);
                oct = parseInt(bytes, 2).toString(8);
                output += oct;
            }
            return output;
        };
        return Convert;
    })();
    System.Convert = Convert;
})(System || (System = {}));
var System;
(function (System) {
    var ArgumentNullException = (function (_super) {
        __extends(ArgumentNullException, _super);
        function ArgumentNullException() {
            var allParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                allParams[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1:
                    _super.call(this, "", arguments[0]);
                    break;
                case 2:
                    _super.call(this, arguments[0], arguments[1]);
                    break;
            }
        }
        return ArgumentNullException;
    })(System.ArgumentException);
    System.ArgumentNullException = ArgumentNullException;
})(System || (System = {}));
var System;
(function (System) {
    var Char = (function () {
        function Char() {
        }
        Char.IsWhiteSpace = function (c) {
            return c.trim().length == 0;
        };
        Char.Substract = function (c1, c2) {
            return ((c1 * 1) - (c2 * 1));
        };
        return Char;
    })();
    System.Char = Char;
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var BinaryReader = (function () {
            function BinaryReader() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                this.byteArray = this.Decode(arguments[0]);
                this.jDataViewp = new jDataView(this.byteArray);
                this.jDataViewp.littleEndian = BinaryReader.littleEndian;
                this.bufferIndex = 0;
            }
            BinaryReader.prototype.Decode = function (input, arrayBuffer) {
                //get last chars to see if are valid
                var lkey1 = this._keyStr.indexOf(input.charAt(input.length - 1));
                var lkey2 = this._keyStr.indexOf(input.charAt(input.length - 2));
                var bytes = (input.length / 4) * 3;
                if (lkey1 == 64)
                    bytes--; //padding chars, so skip
                if (lkey2 == 64)
                    bytes--; //padding chars, so skip
                var uarray;
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;
                var j = 0;
                if (arrayBuffer)
                    uarray = new Uint8Array(arrayBuffer);
                else
                    uarray = new Uint8Array(bytes);
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                for (i = 0; i < bytes; i += 3) {
                    //get the 3 octects in 4 ascii chars
                    enc1 = this._keyStr.indexOf(input.charAt(j++));
                    enc2 = this._keyStr.indexOf(input.charAt(j++));
                    enc3 = this._keyStr.indexOf(input.charAt(j++));
                    enc4 = this._keyStr.indexOf(input.charAt(j++));
                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;
                    uarray[i] = chr1;
                    if (enc3 != 64)
                        uarray[i + 1] = chr2;
                    if (enc4 != 64)
                        uarray[i + 2] = chr3;
                }
                return uarray;
            };
            BinaryReader.prototype.Dispose = function () {
            };
            BinaryReader.prototype.Read = function () {
            };
            BinaryReader.prototype.ReadInt64 = function () {
                var res = { lo: -1, hi: -1 };
                try {
                    res = this.jDataViewp.getInt64(this.bufferIndex, BinaryReader.littleEndian);
                }
                catch (_) {
                }
                this.bufferIndex += 8;
                return res;
            };
            BinaryReader.prototype.ReadUInt64 = function () {
                var res = { lo: -1, hi: -1 };
                try {
                    res = this.jDataViewp.getUint64(this.bufferIndex, BinaryReader.littleEndian);
                }
                catch (_) {
                }
                this.bufferIndex += 8;
                return parseFloat(res.toString());
            };
            BinaryReader.prototype.ReadBoolean = function () {
                return this.ReadInt8() != 0;
            };
            BinaryReader.prototype.ReadString = function () {
                var stringlength = this.Read7BitEncodedInt();
                if (stringlength < 0)
                    throw "Rockwell_InvalidLength";
                var res = "";
                res = this.jDataViewp.getString(stringlength);
                this.bufferIndex += stringlength;
                return res;
            };
            BinaryReader.prototype.ReadUInt32 = function () {
                var res = -1;
                try {
                    res = this.jDataViewp.getUint32(this.bufferIndex, BinaryReader.littleEndian);
                }
                catch (_) {
                }
                this.bufferIndex += 4;
                return res;
            };
            BinaryReader.prototype.ReadDouble = function () {
                var res = -1;
                try {
                    res = this.jDataViewp.getFloat64(this.bufferIndex, BinaryReader.littleEndian);
                }
                catch (_) {
                }
                this.bufferIndex += 8;
                return res;
            };
            BinaryReader.prototype.ReadUInt16 = function () {
                var res = -1;
                try {
                    res = this.jDataViewp.getUint16(this.bufferIndex, BinaryReader.littleEndian);
                }
                catch (_) {
                }
                this.bufferIndex += 2;
                return res;
            };
            BinaryReader.prototype.ReadInt8 = function () {
                var res = -1;
                try {
                    res = this.jDataViewp.getInt8(this.bufferIndex, BinaryReader.littleEndian);
                }
                catch (_) {
                }
                if (res < 0) {
                    res = this.jDataViewp.getUint8(this.bufferIndex, BinaryReader.littleEndian);
                    this.bufferIndex += 2;
                    return res;
                }
                this.bufferIndex += 1;
                return res;
            };
            BinaryReader.prototype.ReadInt32 = function () {
                var res = -1;
                try {
                    res = this.jDataViewp.getInt32(this.bufferIndex, BinaryReader.littleEndian);
                }
                catch (_) {
                }
                this.bufferIndex += 4;
                return res;
            };
            BinaryReader.prototype.Read7BitEncodedInt = function () {
                var returnValue = 0;
                var bitIndex = 0;
                while (bitIndex != 35) {
                    var currentByte = this.jDataViewp.getBytes(1, this.bufferIndex, BinaryReader.littleEndian);
                    returnValue = returnValue | (currentByte[0] & 127) << bitIndex;
                    bitIndex += 7;
                    this.bufferIndex++;
                    if ((currentByte[0] & 128) == 0)
                        return returnValue;
                }
            };
            BinaryReader.prototype.BaseStream = function () {
                return null;
            };
            BinaryReader.prototype.Close = function () {
                this.byteArray = null;
                this.jDataViewp = null;
            };
            BinaryReader.littleEndian = true;
            return BinaryReader;
        })();
        IO.BinaryReader = BinaryReader;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var BinaryWriter = (function () {
            function BinaryWriter() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                this.jDataViewp = new jDataView([]);
                this.jDataViewp.littleEndian = BinaryWriter.littleEndian;
                this.bufferIndex = 0;
            }
            BinaryWriter.prototype.Dispose = function () {
            };
            BinaryWriter.prototype.Write = function (value) {
            };
            BinaryWriter.prototype.Flush = function () {
            };
            BinaryWriter.prototype.Close = function () {
            };
            BinaryWriter.prototype.BaseStream = function () {
                throw "NotImplemented";
            };
            BinaryWriter.prototype.WriteInt64 = function (value) {
                try {
                    this.jDataViewp.writeInt64(this.bufferIndex, BinaryWriter.littleEndian);
                }
                catch (_) {
                    return false;
                }
                this.bufferIndex += 8;
                return this.jDataViewp;
            };
            BinaryWriter.littleEndian = true;
            return BinaryWriter;
        })();
        IO.BinaryWriter = BinaryWriter;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var MemoryStream = (function (_super) {
            __extends(MemoryStream, _super);
            function MemoryStream() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                _super.call(this);
                throw "NotImplemented";
            }
            MemoryStream.prototype.ToArray = function () {
                return null;
            };
            return MemoryStream;
        })(IO.Stream);
        IO.MemoryStream = MemoryStream;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var BasicHttpBinding = (function () {
            function BasicHttpBinding() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
            }
            Object.defineProperty(BasicHttpBinding.prototype, "MaxReceivedMessageSize", {
                get: function () {
                    return this._MaxReceivedMessageSize;
                },
                set: function (value) {
                    this._MaxReceivedMessageSize = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BasicHttpBinding.prototype, "MaxBufferSize", {
                get: function () {
                    return this._MaxBufferSize;
                },
                set: function (value) {
                    this._MaxBufferSize = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BasicHttpBinding.prototype, "OpenTimeut", {
                set: function (value) {
                    this._OpenTimeout = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BasicHttpBinding.prototype, "OpenTimeout", {
                get: function () {
                    return this._OpenTimeout;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BasicHttpBinding.prototype, "ReceiveTimeout", {
                get: function () {
                    return this._ReceiveTimeout;
                },
                set: function (value) {
                    this._ReceiveTimeout = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BasicHttpBinding.prototype, "SendTimeout", {
                get: function () {
                    return this._SendTimeout;
                },
                set: function (value) {
                    this._SendTimeout = value;
                },
                enumerable: true,
                configurable: true
            });
            return BasicHttpBinding;
        })();
        ServiceModel.BasicHttpBinding = BasicHttpBinding;
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ServiceModel;
    (function (ServiceModel) {
        var EndpointAddress = (function () {
            function EndpointAddress(uri) {
            }
            return EndpointAddress;
        })();
        ServiceModel.EndpointAddress = EndpointAddress;
    })(ServiceModel = System.ServiceModel || (System.ServiceModel = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ArithmeticException = (function (_super) {
        __extends(ArithmeticException, _super);
        function ArithmeticException() {
            _super.apply(this, arguments);
        }
        return ArithmeticException;
    })(System.SystemException);
    System.ArithmeticException = ArithmeticException;
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        var NumberFormatInfo = (function () {
            function NumberFormatInfo() {
            }
            NumberFormatInfo.prototype.GetFormat = function () {
                throw "NotImplemented";
            };
            Object.defineProperty(NumberFormatInfo.prototype, "NumberDecimalSeparator", {
                get: function () {
                    return this._NumberDecimalSeparator;
                },
                set: function (value) {
                    this._NumberDecimalSeparator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NumberFormatInfo.prototype, "NumberGroupSeparator", {
                get: function () {
                    return this._NumberGroupSeparator;
                },
                set: function (value) {
                    this._NumberGroupSeparator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NumberFormatInfo.prototype, "NumberGroupSizes", {
                get: function () {
                    return this._NumberGroupSizes;
                },
                set: function (value) {
                    this._NumberGroupSizes = value;
                },
                enumerable: true,
                configurable: true
            });
            return NumberFormatInfo;
        })();
        Globalization.NumberFormatInfo = NumberFormatInfo;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var OverflowException = (function (_super) {
        __extends(OverflowException, _super);
        function OverflowException() {
            _super.apply(this, arguments);
        }
        return OverflowException;
    })(System.ArithmeticException);
    System.OverflowException = OverflowException;
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        (function (CompareOptions) {
            CompareOptions[CompareOptions["None"] = 0] = "None";
            CompareOptions[CompareOptions["IgnoreCase"] = 1] = "IgnoreCase";
            CompareOptions[CompareOptions["IgnoreNonSpace"] = 2] = "IgnoreNonSpace";
            CompareOptions[CompareOptions["IgnoreSymbols"] = 4] = "IgnoreSymbols";
            CompareOptions[CompareOptions["IgnoreKanaType"] = 8] = "IgnoreKanaType";
            CompareOptions[CompareOptions["IgnoreWidth"] = 16] = "IgnoreWidth";
            CompareOptions[CompareOptions["OrdinalIgnoreCase"] = 268435456] = "OrdinalIgnoreCase";
            CompareOptions[CompareOptions["StringSort"] = 536870912] = "StringSort";
            CompareOptions[CompareOptions["Ordinal"] = 1073741824] = "Ordinal";
        })(Globalization.CompareOptions || (Globalization.CompareOptions = {}));
        var CompareOptions = Globalization.CompareOptions;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        (function (NumberStyles) {
            NumberStyles[NumberStyles["None"] = 0] = "None";
            NumberStyles[NumberStyles["AllowLeadingWhite"] = 1] = "AllowLeadingWhite";
            NumberStyles[NumberStyles["AllowTrailingWhite"] = 2] = "AllowTrailingWhite";
            NumberStyles[NumberStyles["AllowLeadingSign"] = 4] = "AllowLeadingSign";
            NumberStyles[NumberStyles["Integer"] = 7] = "Integer";
            NumberStyles[NumberStyles["AllowTrailingSign"] = 8] = "AllowTrailingSign";
            NumberStyles[NumberStyles["AllowParentheses"] = 16] = "AllowParentheses";
            NumberStyles[NumberStyles["AllowDecimalPoint"] = 32] = "AllowDecimalPoint";
            NumberStyles[NumberStyles["AllowThousands"] = 64] = "AllowThousands";
            NumberStyles[NumberStyles["Number"] = 111] = "Number";
            NumberStyles[NumberStyles["AllowExponent"] = 128] = "AllowExponent";
            NumberStyles[NumberStyles["Float"] = 167] = "Float";
            NumberStyles[NumberStyles["AllowCurrencySymbol"] = 256] = "AllowCurrencySymbol";
            NumberStyles[NumberStyles["Currency"] = 383] = "Currency";
            NumberStyles[NumberStyles["Any"] = 511] = "Any";
            NumberStyles[NumberStyles["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
            NumberStyles[NumberStyles["HexNumber"] = 515] = "HexNumber";
        })(Globalization.NumberStyles || (Globalization.NumberStyles = {}));
        var NumberStyles = Globalization.NumberStyles;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Int32 = (function () {
        function Int32() {
        }
        Int32.Parse = function () {
            var allParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                allParams[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2:
                    return this.Parse_1(arguments[0], arguments[1]);
                case 3:
                    return this.Parse_2(arguments[0], arguments[1], arguments[2]);
                default:
                    throw "Invalid overload call for: Parse";
            }
        };
        Int32.Parse_1 = function (s, provider) {
            return System.Convert.ToInteger(s);
        };
        Int32.Parse_2 = function (s, style, provider) {
            var result;
            switch (style) {
                case System.Globalization.NumberStyles.HexNumber:
                    result = System.Convert.ToInteger(s, 16);
                    break;
                default:
                    result = System.Convert.ToInteger(s);
                    break;
            }
            return result;
        };
        Int32.TryParse = function (s, result) {
            result = Number(s);
            return {
                refs: [result],
                result: !isNaN(result)
            };
        };
        Int32.MaxValue = 2147483647;
        Int32.MinValue = -2147483648;
        return Int32;
    })();
    System.Int32 = Int32;
})(System || (System = {}));
var System;
(function (System) {
    (function (StringSplitOptions) {
        StringSplitOptions[StringSplitOptions["None"] = 0] = "None";
        StringSplitOptions[StringSplitOptions["RemoveEmptyEntries"] = 1] = "RemoveEmptyEntries";
    })(System.StringSplitOptions || (System.StringSplitOptions = {}));
    var StringSplitOptions = System.StringSplitOptions;
})(System || (System = {}));
var System;
(function (System) {
    (function (StringComparison) {
        StringComparison[StringComparison["CurrentCulture"] = 0] = "CurrentCulture";
        StringComparison[StringComparison["CurrentCultureIgnoreCase"] = 1] = "CurrentCultureIgnoreCase";
        StringComparison[StringComparison["InvariantCulture"] = 2] = "InvariantCulture";
        StringComparison[StringComparison["InvariantCultureIgnoreCase"] = 3] = "InvariantCultureIgnoreCase";
        StringComparison[StringComparison["Ordinal"] = 4] = "Ordinal";
        StringComparison[StringComparison["OrdinalIgnoreCase"] = 5] = "OrdinalIgnoreCase";
    })(System.StringComparison || (System.StringComparison = {}));
    var StringComparison = System.StringComparison;
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        var CultureInfo = (function () {
            function CultureInfo(name) {
                this._Name = name;
                this._NumberFormat = new Globalization.NumberFormatInfo();
                this._NumberFormat.NumberDecimalSeparator = System.DateTimeConventions.DecimalSeparator();
                this._NumberFormat.NumberGroupSeparator = System.DateTimeConventions.GroupSeparator();
                this._NumberFormat.NumberGroupSizes = System.DateTimeConventions.GroupSizes();
            }
            Object.defineProperty(CultureInfo.prototype, "Name", {
                get: function () {
                    return this._Name;
                },
                set: function (val) {
                    this._Name = val;
                },
                enumerable: true,
                configurable: true
            });
            CultureInfo.prototype.GetFormat = function () {
                throw "NotImplemented";
            };
            Object.defineProperty(CultureInfo, "InvariantCulture", {
                get: function () {
                    if (!this._InvariantCulture) {
                        this._InvariantCulture = new CultureInfo("en-US");
                        var numberformatinfo = new Globalization.NumberFormatInfo();
                        numberformatinfo.NumberDecimalSeparator = '.';
                        CultureInfo.InvariantCulture.NumberFormat = numberformatinfo;
                    }
                    return this._InvariantCulture;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CultureInfo, "CurrentCulture", {
                get: function () {
                    if (!this._CurrentCulture) {
                        if (navigator.userLanguage) {
                            this._CurrentCulture = new CultureInfo(navigator.userLanguage);
                        }
                        else if (navigator && navigator.language) {
                            this._CurrentCulture = new CultureInfo(navigator.language);
                        }
                        else {
                            return this._InvariantCulture;
                        }
                    }
                    this._CurrentCulture.NumberFormat.NumberDecimalSeparator = System.DateTimeConventions.DecimalSeparator();
                    this._CurrentCulture.NumberFormat.NumberGroupSeparator = System.DateTimeConventions.GroupSeparator();
                    this._CurrentCulture.NumberFormat.NumberGroupSizes = System.DateTimeConventions.GroupSizes();
                    return this._CurrentCulture;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CultureInfo.prototype, "NumberFormat", {
                get: function () {
                    return this._NumberFormat;
                },
                set: function (value) {
                    this._NumberFormat = value;
                },
                enumerable: true,
                configurable: true
            });
            return CultureInfo;
        })();
        Globalization.CultureInfo = CultureInfo;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var FormatException = (function (_super) {
        __extends(FormatException, _super);
        function FormatException() {
            _super.apply(this, arguments);
        }
        return FormatException;
    })(System.SystemException);
    System.FormatException = FormatException;
})(System || (System = {}));
var System;
(function (System) {
    var Enum = (function () {
        function Enum() {
        }
        Enum.Parse = function (value, ignoreCase) {
            //throw "NotImplemented";            
            return value;
        };
        return Enum;
    })();
    System.Enum = Enum;
})(System || (System = {}));
String.prototype.GetHashCode = function () {
    var hash = 0, i, chr, len;
    if (this.length == 0)
        return hash;
    for (i = 0, len = this.length; i < len; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};
String.prototype.Insert = function (index, value) {
    if (index > 0)
        return this.substring(0, index) + value + this.substring(index, this.length);
    else
        return value + this;
};
String.prototype.endsWith = function (suffix) {
    /// <summary>Determines whether the end of this instance matches the specified string.</summary>
    /// <param name="suffix" type="String">A string to compare to.</param>
    /// <returns type="Boolean">true if suffix matches the end of this instance; otherwise, false.</returns>
    return (this.substr(this.length - suffix.length) === suffix);
};
String.prototype.EndsWith = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    switch (arguments.length) {
        case 1: return System.String.EndsWith(this, arguments[0]);
        case 2: return System.String.EndsWith(this, arguments[0], arguments[1]);
        default: throw "Invalid overload call for: EndsWith";
    }
};
String.prototype.startsWith = function (prefix) {
    /// <summary >Determines whether the beginning of this instance matches the specified string.</summary>
    /// <param name="prefix" type="String">The String to compare.</param>
    /// <returns type="Boolean">true if prefix matches the beginning of this string; otherwise, false.</returns>
    return (this.substr(0, prefix.length) === prefix);
};
String.prototype.StartsWith = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    switch (arguments.length) {
        case 1: return System.String.StartsWith(this, arguments[0]);
        case 2: return System.String.StartsWith(this, arguments[0], arguments[1]);
        default: throw "Invalid overload call for: StartsWith";
    }
};
String.prototype.trim = function () {
    /// <summary >Removes all leading and trailing white-space characters from the current String object.</summary>
    /// <returns type="String">The string that remains after all white-space characters are removed from the start and end of the current String object.</returns>
    return this.replace(/^\s+|\s+$/g, '');
};
String.prototype.trimEnd = function () {
    /// <summary >Removes all trailing white spaces from the current String object.</summary>
    /// <returns type="String">The string that remains after all white-space characters are removed from the end of the current String object.</returns>
    return this.replace(/\s+$/, '');
};
String.prototype.TrimEnd = function (trimChars) {
    var regex = new RegExp('[' + trimChars + ']+$');
    var position = this.search(regex);
    if (position < 0)
        return this;
    return this.substring(0, position);
    //return trimChars;
};
String.prototype.trimStart = function () {
    /// <summary >Removes all leading white spaces from the current String object.</summary>
    /// <returns type="String">The string that remains after all white-space characters are removed from the start of the current String object.</returns>
    return this.replace(/^\s+/, '');
};
String.prototype.TrimStart = function (trimChars) {
    var flags = flags || "g";
    var characters = "";
    for (var c in trimChars) {
        characters += trimChars[c];
    }
    return this.replace(new RegExp("^[" + characters + "]+|[" + characters + "]+$", flags), '');
};
String.prototype.format = function (args) {
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
        if (m == "{{") {
            return "{";
        }
        if (m == "}}") {
            return "}";
        }
        if (m == "{}") {
            return "";
        }
        return args[n] ? args[n] : "";
    });
};
String.prototype.IndexOf = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    switch (arguments.length) {
        case 1: return System.String.IndexOf(this, arguments[0]);
        case 2: return System.String.IndexOf(this, arguments[0], arguments[1]);
    }
};
String.prototype.Equals = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    switch (arguments.length) {
        case 1: return System.String.Equals(this, arguments[0]);
        case 2: return System.String.Equals(this, arguments[0], arguments[1]);
    }
};
String.prototype.Split = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    switch (arguments.length) {
        case 1: return System.String.Split(this, arguments[0]);
        case 2: return System.String.Split(this, arguments[0], arguments[1]);
    }
};
String.prototype.ToCharArray = function () {
    return this.split('');
};
String.prototype.ToUpper = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    // Pending CultureInfo
    return this.toUpperCase();
};
String.prototype.ToLower = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    // Pending CultureInfo
    return this.toLowerCase();
};
String.prototype.ToString = function (provider) {
    return this;
};
String.prototype.Contains = function (value) {
    throw "NotImplemented";
};
String.prototype.Contains = function (value) {
    return System.String.Contains(this, value);
};
var System;
(function (System) {
    var String = (function () {
        function String() {
            var paramas = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                paramas[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 1:
                    this.constructor_1(arguments[0], arguments[1]);
                    break;
                default: throw "Invalid overload call for: constructor";
            }
        }
        String.prototype.constructor_1 = function (s, count) {
            throw "NotImplemented";
        };
        String.prototype.constructor_2 = function (s, startIndex, length) {
            throw "NotImplemented";
        };
        String.prototype.constructor_3 = function (s, startIndex, length) {
            throw "NotImplemented";
        };
        String.createString = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            var newString;
            switch (arguments.length) {
                case 2:
                    newString = this.createString_2(arguments[0], System.Convert.ToInteger(arguments[1]));
                    break;
                case 3:
                    throw "Not implemented exception for: createString";
                    break;
                default:
                    throw "Invalid overload call for: createString";
                    break;
            }
            return newString;
        };
        String.createString_2 = function (s, count) {
            return new Array(count + 1).join(s);
        };
        String.Compare = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2: return String.Compare_2(arguments[0], arguments[1]);
                case 3: return String.Compare_3(arguments[0], arguments[1], arguments[2]);
                case 4: return String.Compare_4(arguments[0], arguments[1], arguments[2], arguments[3]);
                default: throw "Invalid overload call for: Compare";
            }
        };
        String.Compare_2 = function (v1, v2) {
            return (v1 == v2) ? 0 : (v1 > v2) ? 1 : -1;
        };
        String.Compare_3 = function (v1, v2, comparisonType) {
            if (comparisonType == System.StringComparison.CurrentCultureIgnoreCase || comparisonType == System.StringComparison.InvariantCultureIgnoreCase || comparisonType == System.StringComparison.OrdinalIgnoreCase) {
                if (v1 == null || v2 == null)
                    return null;
                if (v1.toLocaleUpperCase() === v2.toLocaleUpperCase()) {
                    return 0;
                }
                else {
                    if (v1.length < v2.length) {
                        return v1.length - v2.length;
                    }
                    if (v1.length > v2.length) {
                        return v2.length - v1.length;
                    }
                    else {
                        return -1;
                    }
                }
            }
            else {
                return (v1 == v2) ? 0 : (v1 > v2) ? 1 : -1;
            }
        };
        String.Compare_4 = function (v1, v2, culture, options) {
            if (options == System.Globalization.CompareOptions.IgnoreCase || options == System.Globalization.CompareOptions.OrdinalIgnoreCase) {
                if (v1.toLocaleUpperCase() === v2.toLocaleUpperCase()) {
                    return 0;
                }
                else {
                    if (v1.length < v2.length) {
                        return v1.length - v2.length;
                    }
                    if (v1.length > v2.length) {
                        return v2.length - v1.length;
                    }
                    else {
                        return -1;
                    }
                }
            }
            else {
                if (v1 === v2) {
                    return 0;
                }
                else {
                    if (v1.length < v2.length) {
                        return v1.length - v2.length;
                    }
                    if (v1.length > v2.length) {
                        return v2.length - v1.length;
                    }
                    else {
                        return -1;
                    }
                }
            }
        };
        String.CompareOrdinal = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2: return String.CompareOrdinal_1(arguments[0], arguments[1]);
                default: throw "Invalid overload call for: CompareOrdinal";
            }
        };
        String.CompareOrdinal_1 = function (strA, strB) {
            return System.String.Compare(strA, strB, System.StringComparison.Ordinal);
        };
        String.Format = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            if (typeof (arguments[0]) == "string") {
                return System.String.Format_1(arguments[0], params.slice(1));
            }
            else {
                return System.String.Format_2(arguments[0], arguments[1], params.slice(2));
            }
        };
        String.Format_1 = function (s, params) {
            return s.format(params);
        };
        String.Format_2 = function (provider, s, params) {
            return s.format(params);
        };
        String.IndexOf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2: return System.String.IndexOf_1(arguments[0], arguments[1]);
                case 3: return System.String.IndexOf_2(arguments[0], arguments[1], arguments[2]);
                default: throw "Invalid overload call for: IndexOf";
            }
        };
        String.IndexOf_1 = function (s, value) {
            if (value == null) {
                throw "value cant be null";
            }
            else if (value == "") {
                return 0;
            }
            return s.indexOf(value);
        };
        String.IndexOf_2 = function (s, value, comparisonType) {
            if (value == null) {
                throw "value cant be null";
            }
            else if (value == "") {
                return 0;
            }
            var noCaseStr, noCaseStrValue;
            switch (comparisonType) {
                case System.StringComparison.CurrentCultureIgnoreCase:
                    noCaseStr = s.ToLower();
                    noCaseStrValue = value.ToLower();
                    return noCaseStr.indexOf(noCaseStrValue);
                case System.StringComparison.InvariantCultureIgnoreCase:
                    noCaseStr = s.ToLower();
                    noCaseStrValue = value.ToLower();
                    return noCaseStr.indexOf(noCaseStrValue);
            }
            return s.indexOf(value);
        };
        String.Equals = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2: return System.String.Equals_2(arguments[0], arguments[1]);
                case 3: return System.String.Equals_3(arguments[0], arguments[1], arguments[2]);
                default: throw "Invalid overload call for: Equals";
            }
        };
        String.Equals_2 = function (a, b) {
            return (a == b);
        };
        String.Equals_3 = function (a, b, comparisonType) {
            switch (comparisonType) {
                case System.StringComparison.Ordinal:
                case System.StringComparison.CurrentCulture:
                case System.StringComparison.InvariantCulture:
                    return (a == b);
                case System.StringComparison.OrdinalIgnoreCase:
                case System.StringComparison.CurrentCultureIgnoreCase:
                case System.StringComparison.InvariantCultureIgnoreCase:
                    return (a.toLowerCase() == b.toLowerCase());
                default:
                    throw "String.Equals StringComparision = " + comparisonType + " Not Implemented";
            }
        };
        String.EndsWith = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2: return System.String.EndsWith_1(arguments[0], arguments[1]);
                case 3: return System.String.EndsWith_2(arguments[0], arguments[1], arguments[2]);
                default: throw "Invalid overload call for: EndsWith";
            }
        };
        String.EndsWith_1 = function (s, value) {
            return s.endsWith(value);
        };
        String.EndsWith_2 = function (s, value, comparisonType) {
            var strEnd = s.length - value.length;
            switch (comparisonType) {
                case System.StringComparison.Ordinal:
                    return s.endsWith(value);
                case System.StringComparison.CurrentCulture:
                case System.StringComparison.InvariantCulture:
                    return (s.indexOf(value) == strEnd);
                case System.StringComparison.OrdinalIgnoreCase:
                case System.StringComparison.CurrentCultureIgnoreCase:
                case System.StringComparison.InvariantCultureIgnoreCase:
                    return (s.toLowerCase().indexOf(value.toLowerCase()) == strEnd);
                default: throw "Not Implemented";
            }
        };
        String.StartsWith = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2: return System.String.StartsWith_1(arguments[0], arguments[1]);
                case 3: return System.String.StartsWith_2(arguments[0], arguments[1], arguments[2]);
                default: throw "Invalid overload call for: StartsWith";
            }
        };
        String.StartsWith_1 = function (s, value) {
            return s.startsWith(value);
        };
        String.StartsWith_2 = function (s, value, comparisonType) {
            switch (comparisonType) {
                case System.StringComparison.Ordinal:
                case System.StringComparison.CurrentCulture:
                case System.StringComparison.InvariantCulture:
                    return (s.indexOf(value) == 0);
                case System.StringComparison.OrdinalIgnoreCase:
                case System.StringComparison.CurrentCultureIgnoreCase:
                case System.StringComparison.InvariantCultureIgnoreCase:
                    return (s.toLowerCase().indexOf(value.toLowerCase()) == 0);
                default: throw "Not Implemented";
            }
        };
        /* String IsNullOrEmpty Declaration */
        String.IsNullOrEmpty = function (value) {
            if (value == null)
                return true;
            if (value.toString() == "[object Object]")
                return true;
            return value /*.trim()*/.length == 0;
        };
        String.Split = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            switch (arguments.length) {
                case 2: return System.String.Split_1(arguments[0], arguments[1]);
                case 3: return System.String.Split_2(arguments[0], arguments[1], arguments[2]);
                default: throw "Invalid overload call for: Split";
            }
        };
        String.Split_1 = function (str, separator) {
            return str.split(separator);
        };
        String.Split_2 = function (str, separator, options) {
            var strArr, newSeparator;
            switch (options) {
                case System.StringSplitOptions.None:
                    if (separator.length > 1) {
                        newSeparator = new RegExp(separator.join("|"));
                    }
                    else {
                        newSeparator = separator;
                    }
                    strArr = String.Split_1(str, newSeparator);
                    if ((strArr.length == 1) && (strArr[0] == "")) {
                        return strArr;
                    }
                    else {
                        while (strArr.indexOf("") >= 0) {
                            strArr.splice(0, 1);
                        }
                        return strArr;
                    }
                case System.StringSplitOptions.RemoveEmptyEntries:
                    if (separator.length > 1) {
                        newSeparator = new RegExp(separator.join("|"));
                    }
                    else {
                        newSeparator = separator;
                    }
                    strArr = String.Split_1(str, newSeparator);
                    //Now, we will clear the empty strings
                    strArr = strArr.filter(Boolean);
                    return strArr;
                default: throw ("Split Option not define it");
            }
        };
        /* String Copy Declaration */
        String.Copy = function (str) {
            return str + '';
        };
        /* String Join Declaration */
        String.Join = function (separator, value) {
            var res = "";
            for (var i = 0; i < value.length; i++) {
                res += value[i] + (value.length - 1 ? "" : separator);
            }
            return res;
        };
        /* String LastIndexOf Declaration */
        String.prototype.LastIndexOf = function (value) {
            throw ("NotImplemented");
        };
        /* String Contains Declaration */
        String.Contains = function (str, value) {
            return str.indexOf(value) != -1;
        };
        String.Decode = function (s) {
            //return decodeURIComponent(this);
            var decodedStr = s.toString();
            decodedStr = decodedStr.replace(/&/g, '&amp;');
            decodedStr = decodedStr.replace(/</g, '&lt;');
            decodedStr = decodedStr.replace(/>/g, '&gt;');
            return decodedStr;
        };
        String.Encode = function (s) {
            //return decodeURIComponent(this);
            try {
                var decodedStr = "";
                if (typeof s == "string") {
                    decodedStr = s.toString();
                    decodedStr = decodedStr.replace(/&amp;/g, '&');
                    decodedStr = decodedStr.replace(/&lt;/g, '<');
                    decodedStr = decodedStr.replace(/&gt;/g, '>');
                }
                return decodedStr;
            }
            catch (e) {
                return s;
            }
        };
        return String;
    })();
    System.String = String;
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var RegularExpressions;
        (function (RegularExpressions) {
            var Capture = (function () {
                function Capture() {
                }
                Object.defineProperty(Capture.prototype, "Index", {
                    get: function () {
                        return this._Index;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Capture.prototype, "Length", {
                    get: function () {
                        return this._Length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Capture.prototype, "Value", {
                    get: function () {
                        return this._Value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Capture.prototype.toString = function () {
                    throw ("not Implemented");
                };
                return Capture;
            })();
            RegularExpressions.Capture = Capture;
        })(RegularExpressions = Text.RegularExpressions || (Text.RegularExpressions = {}));
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var RegularExpressions;
        (function (RegularExpressions) {
            var Group = (function (_super) {
                __extends(Group, _super);
                function Group() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(Group.prototype, "Success", {
                    get: function () {
                        return this._Success;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Group;
            })(RegularExpressions.Capture);
            RegularExpressions.Group = Group;
        })(RegularExpressions = Text.RegularExpressions || (Text.RegularExpressions = {}));
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var RegularExpressions;
        (function (RegularExpressions) {
            var GroupCollection = (function (_super) {
                __extends(GroupCollection, _super);
                function GroupCollection() {
                    _super.apply(this, arguments);
                }
                return GroupCollection;
            })(System.Collections.ObjectModel.Collection);
            RegularExpressions.GroupCollection = GroupCollection;
        })(RegularExpressions = Text.RegularExpressions || (Text.RegularExpressions = {}));
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var RegularExpressions;
        (function (RegularExpressions) {
            var Match = (function (_super) {
                __extends(Match, _super);
                function Match() {
                    _super.apply(this, arguments);
                    /* GET Funtion for Groups */
                    this._Groups = new RegularExpressions.GroupCollection();
                }
                Object.defineProperty(Match, "Empty", {
                    get: function () {
                        return this._Empty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Match.prototype, "Groups", {
                    get: function () {
                        return this._Groups;
                    },
                    enumerable: true,
                    configurable: true
                });
                /* NextMatch function */
                Match.prototype.NextMatch = function () {
                    throw ("Not implemented");
                };
                return Match;
            })(RegularExpressions.Group);
            RegularExpressions.Match = Match;
        })(RegularExpressions = Text.RegularExpressions || (Text.RegularExpressions = {}));
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var RegularExpressions;
        (function (RegularExpressions) {
            var MatchCollection = (function () {
                function MatchCollection() {
                }
                Object.defineProperty(MatchCollection.prototype, "Count", {
                    get: function () {
                        return this._Count;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatchCollection.prototype, "IsReadOnly", {
                    get: function () {
                        return this._IsReadOnly;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatchCollection.prototype, "IsSynchronized", {
                    get: function () {
                        return this._IsSynchronized;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatchCollection.prototype, "SyncRoot", {
                    get: function () {
                        return this._SyncRoot;
                    },
                    enumerable: true,
                    configurable: true
                });
                MatchCollection.prototype.CopyTo = function (array, arrayIndex) {
                };
                MatchCollection.prototype.GetEnumerator = function () {
                    throw "not Implemented";
                };
                return MatchCollection;
            })();
            RegularExpressions.MatchCollection = MatchCollection;
        })(RegularExpressions = Text.RegularExpressions || (Text.RegularExpressions = {}));
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var RegularExpressions;
        (function (RegularExpressions) {
            var Regex = (function () {
                function Regex() {
                    var allParams = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        allParams[_i - 0] = arguments[_i];
                    }
                    switch (arguments.length) {
                        case 0:
                            this.constructor_1();
                            break;
                        case 1:
                            this.constructor_2(arguments[0]);
                            break;
                        case 2:
                            this.constructor_3(arguments[0], arguments[1]);
                            break;
                        default:
                            throw "Invalid overload call for: constructor";
                    }
                }
                Regex.prototype.constructor_1 = function () {
                    this._Pattern = "";
                    this._Options = RegularExpressions.RegexOptions.None;
                    this._RightToLeft = false;
                };
                Regex.prototype.constructor_2 = function (pattern) {
                    this._Pattern = pattern;
                    this._Options = RegularExpressions.RegexOptions.None;
                    this._RightToLeft = false;
                };
                Regex.prototype.constructor_3 = function (pattern, options) {
                    this._Pattern = pattern;
                    this._Options = options;
                    this._RightToLeft = false;
                };
                Object.defineProperty(Regex.prototype, "Pattern", {
                    get: function () {
                        this.pattern = this._Pattern;
                        return this._Pattern;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Regex.prototype, "Options", {
                    get: function () {
                        this.roptions = this._Options;
                        return this._Options;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Regex.prototype, "RightToLeft", {
                    get: function () {
                        return this._RightToLeft;
                    },
                    enumerable: true,
                    configurable: true
                });
                /* Match function */
                Regex.prototype.Match = function (input) {
                    var patt = new RegExp(this.pattern);
                    if (this.Options == RegularExpressions.RegexOptions.IgnoreCase) {
                        patt.ignoreCase = true;
                    }
                    if (this.Options == RegularExpressions.RegexOptions.Multiline) {
                        patt.multiline = true;
                    }
                    var regExResult = patt.exec(input);
                    var matchResult = new RegularExpressions.Match();
                    matchResult.Success = (regExResult != null);
                    matchResult.Value = null;
                    if (matchResult.Success) {
                        matchResult.Value = regExResult.toString();
                        if (regExResult.length > 1) {
                            for (var i = 1; i < regExResult.length; i++) {
                                var g = new RegularExpressions.Group();
                                g.Index = i;
                                g.Success = true;
                                g.Value = regExResult[i];
                                matchResult.Groups.Add(g);
                            }
                        }
                    }
                    return matchResult;
                };
                Regex.Escape = function (input) {
                    if (input) {
                        return input.replace(/"/g, '\\"');
                    }
                };
                Regex.Unescape = function (input) {
                    return input.replace(/\\"/g, '"');
                };
                Regex.Replace = function (input, pattern, replacement) {
                    var patt = new RegExp(pattern);
                    return input.replace(patt, replacement);
                };
                return Regex;
            })();
            RegularExpressions.Regex = Regex;
        })(RegularExpressions = Text.RegularExpressions || (Text.RegularExpressions = {}));
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var RegularExpressions;
        (function (RegularExpressions) {
            (function (RegexOptions) {
                // Summary:
                //     Specifies that no options are set.
                RegexOptions[RegexOptions["None"] = 0] = "None";
                //
                // Summary:
                //     Specifies case-insensitive matching.
                RegexOptions[RegexOptions["IgnoreCase"] = 1] = "IgnoreCase";
                //
                // Summary:
                //     Multiline mode. Changes the meaning of ^ and $ so they match at the beginning
                //     and end, respectively, of any line, and not just the beginning and end of
                //     the entire string.
                RegexOptions[RegexOptions["Multiline"] = 2] = "Multiline";
                //
                // Summary:
                //     Specifies that the only valid captures are explicitly named or numbered groups
                //     of the form (?<name>…). This allows unnamed parentheses to act as noncapturing
                //     groups without the syntactic clumsiness of the expression (?:…).
                RegexOptions[RegexOptions["ExplicitCapture"] = 4] = "ExplicitCapture";
                //
                // Summary:
                //     Specifies single-line mode. Changes the meaning of the dot (.) so it matches
                //     every character (instead of every character except \n).
                RegexOptions[RegexOptions["Singleline"] = 16] = "Singleline";
                //
                // Summary:
                //     Eliminates unescaped white space from the pattern and enables comments marked
                //     with #. However, the System.Text.RegularExpressions.RegexOptions.IgnorePatternWhitespace
                //     value does not affect or eliminate white space in character classes
                RegexOptions[RegexOptions["IgnorePatternWhitespace"] = 32] = "IgnorePatternWhitespace";
                //
                // Summary:
                //     Specifies that the search will be from right to left instead of from left
                //     to right.
                RegexOptions[RegexOptions["RightToLeft"] = 64] = "RightToLeft";
                //
                // Summary:
                //     Enables ECMAScript-compliant behavior for the expression. This value can
                //     be used only in conjunction with the System.Text.RegularExpressions.RegexOptions.IgnoreCase
                //     and System.Text.RegularExpressions.RegexOptions.Multiline values. The use
                //     of this value with any other values results in an exception.
                RegexOptions[RegexOptions["ECMAScript"] = 256] = "ECMAScript";
                //
                // Summary:
                //     Specifies that cultural differences in language are ignored. Ordinarily,
                //     the regular expression engine performs string comparisons based on the conventions
                //     of the current culture. If the System.Text.RegularExpressions.RegexOptions.CultureInvariant
                //     option is specified, it uses the conventions of the invariant culture.
                RegexOptions[RegexOptions["CultureInvariant"] = 512] = "CultureInvariant";
            })(RegularExpressions.RegexOptions || (RegularExpressions.RegexOptions = {}));
            var RegexOptions = RegularExpressions.RegexOptions;
        })(RegularExpressions = Text.RegularExpressions || (Text.RegularExpressions = {}));
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Type = (function (_super) {
        __extends(Type, _super);
        function Type() {
            _super.apply(this, arguments);
        }
        /* GetType function */
        Type.prototype.GetType = function () {
            //AIS_TODO throw ("Not implemented");
            return null;
        };
        /* GetProperty function */
        Type.prototype.GetProperty = function (name) {
            throw ("Not implemented");
        };
        Type.prototype.IsInstanceOfType = function (o) {
            throw ("Not implemented");
        };
        return Type;
    })(System.Reflection.MemberInfo);
    System.Type = Type;
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Browser;
        (function (Browser) {
            var HtmlDocument = (function () {
                function HtmlDocument() {
                    /*AIS_TODO*/
                    this._DocumentUri = new System.Uri(window.location.href);
                }
                Object.defineProperty(HtmlDocument.prototype, "Body", {
                    get: function () {
                        return this._Body;
                    },
                    set: function (element) {
                        this._Body = element;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlDocument.prototype, "DocumentUri", {
                    get: function () {
                        if (!this._DocumentUri)
                            this._DocumentUri = new System.Uri(window.location.hostname);
                        return this._DocumentUri;
                    },
                    set: function (document) {
                        this._DocumentUri = document;
                    },
                    enumerable: true,
                    configurable: true
                });
                HtmlDocument.prototype.QueryStringParser = function (qs) {
                    var result = new Array();
                    if (qs != null && qs != "") {
                        try {
                            var partsAux = qs.split("?");
                            var parts = (partsAux[1]).split("#");
                            if (parts[1]) {
                                var element1;
                                element1.Key = "#";
                                element1.Value = decodeURIComponent(parts[1]);
                                result.push(element1);
                            }
                            var params = parts[0].split("&");
                            if (params != null) {
                                for (var i = 0; i < params.length; i++) {
                                    var parkeyvalue = params[i].split("=");
                                    var element = new System.Collections.Generic.KeyValuePair(parkeyvalue[0], decodeURIComponent(parkeyvalue[1]));
                                    result.push(element);
                                }
                            }
                        }
                        catch (e) {
                            throw e;
                        }
                    }
                    return result;
                };
                Object.defineProperty(HtmlDocument.prototype, "QueryString", {
                    get: function () {
                        throw "NotImplemented";
                    },
                    enumerable: true,
                    configurable: true
                });
                HtmlDocument.prototype.GetElementById = function (id) {
                    throw "NotImplemented";
                };
                HtmlDocument.prototype.CreateElement = function (tagName) {
                    throw "NotImplemented";
                };
                return HtmlDocument;
            })();
            Browser.HtmlDocument = HtmlDocument;
        })(Browser = Windows.Browser || (Windows.Browser = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Browser;
        (function (Browser) {
            var HtmlElement = (function () {
                function HtmlElement() {
                }
                HtmlElement.prototype.AppendChild = function (element) {
                    throw "NotImplemented";
                };
                return HtmlElement;
            })();
            Browser.HtmlElement = HtmlElement;
        })(Browser = Windows.Browser || (Windows.Browser = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Browser;
        (function (Browser) {
            var HtmlWindow = (function () {
                function HtmlWindow() {
                }
                HtmlWindow.prototype.Eval = function (code) {
                    eval(code);
                };
                HtmlWindow.prototype.Navigate = function (navigateToUri) {
                    parent.window.location.href = navigateToUri.AbsoluteUri;
                };
                return HtmlWindow;
            })();
            Browser.HtmlWindow = HtmlWindow;
        })(Browser = Windows.Browser || (Windows.Browser = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Browser;
        (function (Browser) {
            var HtmlPage = (function () {
                function HtmlPage() {
                }
                Object.defineProperty(HtmlPage, "Document", {
                    get: function () {
                        if (!HtmlPage._Document)
                            HtmlPage._Document = new Browser.HtmlDocument();
                        return HtmlPage._Document;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlPage, "Window", {
                    get: function () {
                        return HtmlPage._Window;
                    },
                    enumerable: true,
                    configurable: true
                });
                HtmlPage.staticConstructor = (function () {
                    HtmlPage._Window = new Browser.HtmlWindow();
                    HtmlPage._Document = new Browser.HtmlDocument();
                })();
                return HtmlPage;
            })();
            Browser.HtmlPage = HtmlPage;
        })(Browser = Windows.Browser || (Windows.Browser = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Browser;
        (function (Browser) {
            var HttpUtility = (function () {
                function HttpUtility() {
                }
                HttpUtility.HtmlDecode = function (html) {
                    return decodeURIComponent(html);
                };
                HttpUtility.HtmlEncode = function (html) {
                    return encodeURIComponent(html);
                };
                HttpUtility.UrlDecode = function (url) {
                    return decodeURIComponent(url);
                };
                HttpUtility.UrlEncode = function (url) {
                    return encodeURIComponent(url);
                };
                return HttpUtility;
            })();
            Browser.HttpUtility = HttpUtility;
        })(Browser = Windows.Browser || (Windows.Browser = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Resources;
        (function (Resources) {
            var StreamResourceInfo = (function () {
                function StreamResourceInfo(stream, contentType) {
                    this.Stream = stream;
                    this.ContentType = contentType;
                }
                Object.defineProperty(StreamResourceInfo.prototype, "ContentType", {
                    get: function () {
                        return this._ContentType;
                    },
                    set: function (value) {
                        this._ContentType = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StreamResourceInfo.prototype, "Stream", {
                    get: function () {
                        return this._Stream;
                    },
                    set: function (value) {
                        this._Stream = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return StreamResourceInfo;
            })();
            Resources.StreamResourceInfo = StreamResourceInfo;
        })(Resources = Windows.Resources || (Windows.Resources = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Threading;
        (function (Threading) {
            var Dispatcher = (function () {
                function Dispatcher() {
                }
                Dispatcher.prototype.CheckAccess = function () {
                    return true;
                };
                Dispatcher.prototype.BeginInvoke = function (d) {
                    var params = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        params[_i - 1] = arguments[_i];
                    }
                    if (arguments.length <= 1) {
                        d.raise();
                    }
                    else if (arguments.length == 2) {
                        d.raise(arguments[1]);
                    }
                    else if (arguments.length == 3) {
                        d.raise(arguments[1], arguments[2]);
                    }
                    else if (arguments.length == 4) {
                        d.raise(arguments[1], arguments[2], arguments[3]);
                    }
                    else if (arguments.length == 5) {
                        d.raise(arguments[1], arguments[2], arguments[3], arguments[4]);
                    }
                    else {
                        throw "BeginInvoke: Number of arguments not supported.";
                    }
                };
                Dispatcher.prototype.BeginInvokeAction = function (d, that) {
                    d.call(that);
                };
                return Dispatcher;
            })();
            Threading.Dispatcher = Dispatcher;
        })(Threading = Windows.Threading || (Windows.Threading = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Threading;
        (function (Threading) {
            var DispatcherTimer = (function () {
                function DispatcherTimer(name) {
                    this._Tick = new Events.Delegate();
                    this.Interval = new System.TimeSpan(0);
                    if (name != null) {
                        this.name = name;
                    }
                }
                Object.defineProperty(DispatcherTimer.prototype, "Name", {
                    get: function () {
                        return this.name;
                    },
                    set: function (value) {
                        this.name = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DispatcherTimer.prototype, "IntervalID", {
                    get: function () {
                        return this.intervalID;
                    },
                    set: function (value) {
                        this.intervalID = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DispatcherTimer.prototype, "Interval", {
                    get: function () {
                        return this._Interval;
                    },
                    set: function (value) {
                        this._Interval = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DispatcherTimer.prototype, "IsEnabled", {
                    get: function () {
                        return this._isEnabled;
                    },
                    set: function (value) {
                        this._isEnabled = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                DispatcherTimer.prototype.Start = function () {
                    var func = this._Tick.raise;
                    var scope = this._Tick;
                    if (this.IntervalID) {
                        this.Stop();
                    }
                    this.intervalID = setInterval(function () { func.call(scope); }, this.Interval.Milliseconds);
                    this._isEnabled = true;
                };
                DispatcherTimer.prototype.Stop = function () {
                    clearInterval(this.intervalID);
                    this._isEnabled = false;
                };
                /// <summary>
                /// Start timer only for color blink animation Fixed XZhang
                /// </summary>
                DispatcherTimer.prototype.StartAnimate = function (ac) {
                    var that = this;
                    var func = this._Tick.raise;
                    var scope = this._Tick;
                    var callback = function () {
                        func.call(scope, that, ac);
                        if (that.IsEnabled) {
                            that.intervalID = setTimeout(callback, that.Interval.Milliseconds);
                            //Save timeoutid for clear them after using.
                            that.OwnTimeoutIDs.push(that.intervalID);
                        }
                    };
                    callback();
                };
                Object.defineProperty(DispatcherTimer.prototype, "Tick", {
                    get: function () {
                        return this._Tick;
                    },
                    enumerable: true,
                    configurable: true
                });
                return DispatcherTimer;
            })();
            Threading.DispatcherTimer = DispatcherTimer;
        })(Threading = Windows.Threading || (Windows.Threading = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Windows;
    (function (Windows) {
        var Threading;
        (function (Threading) {
            var ManualResetEvent = (function () {
                function ManualResetEvent(value) {
                    this._ManualResetEvent = value;
                }
                ManualResetEvent.prototype.Close = function () {
                    //Not Implemented
                };
                ManualResetEvent.prototype.Set = function () {
                    //Not Implemented
                };
                ManualResetEvent.prototype.Reset = function () {
                    //Not Implemented
                };
                ManualResetEvent.prototype.WaitOne = function () {
                    //Not Implemented
                };
                return ManualResetEvent;
            })();
            Threading.ManualResetEvent = ManualResetEvent;
        })(Threading = Windows.Threading || (Windows.Threading = {}));
    })(Windows = System.Windows || (System.Windows = {}));
})(System || (System = {}));
var System;
(function (System) {
    var DateTime = (function () {
        function DateTime() {
            var allParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                allParams[_i - 0] = arguments[_i];
            }
            this._options_d = { year: "numeric", month: "2-digit", day: "2-digit" };
            this._options_D = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
            this._options_F = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
            this._options_T = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
            switch (arguments.length) {
                case 0:
                    this._Date = new Date();
                    this.InternalTicks = this._Date.valueOf() + 621355968000000000;
                    break;
                case 1:
                    this.constructor_1(arguments[0]);
                    break;
                case 3:
                    this.constructor_3(arguments[0], arguments[1], arguments[2]);
                    break;
                case 6:
                    this.constructor_3(arguments[0], arguments[1], arguments[2]);
                    break;
                default:
                    throw "Invalid overload call for: constructor";
            }
        }
        Object.defineProperty(DateTime.prototype, "Date", {
            get: function () {
                return this._Date;
            },
            set: function (value) {
                this._Date = value;
            },
            enumerable: true,
            configurable: true
        });
        DateTime.prototype.constructor_1 = function (p1) {
            switch (typeof p1) {
                case "string":
                    this._Date = new Date(p1);
                    this.InternalTicks = this.Date.valueOf() + 621355968000000000;
                    break;
                case "number":
                    this._Date = new Date(p1);
                    this.InternalTicks = p1;
                    break;
                case "object":
                    var date = p1;
                    this._Date = date;
                    this.InternalTicks = date.valueOf() + 621355968000000000;
                    break;
                default:
                    throw "Invalid overload call for: constructor";
            }
        };
        DateTime.prototype.constructor_3 = function (p1, p2, p3) {
            this.Date = new Date();
            this.Date.setFullYear(p1, p2, p3);
            this.InternalTicks = this.Date.valueOf() + 621355968000000000;
        };
        DateTime.prototype.lt = function (anotherDateTime) {
            return this._Date < anotherDateTime.Date;
        };
        DateTime.prototype.gt = function (anoterDateTime) {
            return this._Date > anoterDateTime.Date;
        };
        Object.defineProperty(DateTime, "Today", {
            get: function () {
                this._Today.Date = new Date();
                return this._Today;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime, "Now", {
            get: function () {
                this._Now.Date = new Date(Date.now());
                return this._Now;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "Ticks", {
            get: function () {
                return this.InternalTicks;
            },
            enumerable: true,
            configurable: true
        });
        DateTime.prototype.Subtract = function (param) {
            return new DateTime(this.InternalTicks - param.Ticks - 621355968000000000);
        };
        DateTime.prototype.Add = function (timeSpan) {
            return new DateTime(this.InternalTicks + timeSpan.Ticks);
        };
        DateTime.prototype.Equals = function (value) {
            throw "NotImplemented";
        };
        DateTime.prototype.AddSeconds = function (value) {
            var newDate = this._Date;
            newDate.setSeconds(newDate.getSeconds() + value);
            return new DateTime(newDate);
        };
        DateTime.prototype.AddMilliseconds = function (value) {
            var newDate = this._Date;
            // JWANG fix trend bug of Daylight Saving Time
            return new DateTime(newDate.getTime() + value);
        };
        DateTime.prototype.ToString = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            if (params.length == 0) {
                return this._Date.toDateString();
            }
            if (params.length == 1) {
                if (typeof (params[0]) === "string") {
                    return this.ToString_Format(params[0]);
                }
                else {
                    var CultureInfoParameter = lang.asTypeT(params[0], System.Globalization.CultureInfo);
                    if (CultureInfoParameter)
                        return this.ToString_Provider(params[0]);
                }
            }
            if (params.length == 2) {
                var CultureInfoParameter = lang.asTypeT(params[1], System.Globalization.CultureInfo);
                if (CultureInfoParameter)
                    return this.ToString_2(params[0], params[1]);
            }
            throw "Invalid arguments exception in DateTime.ToString";
        };
        DateTime.prototype.ToISOString = function () {
            var date = this._Date;
            if (date)
                return date.getFullYear() + "-" + this.z(date.getMonth() + 1) + "-" + this.z(date.getDate()) + "T" + this.z(date.getHours()) + ":" + this.z(date.getMinutes()) + ":" + this.z(date.getSeconds()) + "." + date.getMilliseconds() + "Z";
            else
                return null;
        };
        DateTime.prototype.ToString_Format = function (format) {
            return this._Date.toDateString();
        };
        DateTime.prototype.ToString_Provider = function (provider) {
            return this.ToString_2("", provider);
        };
        DateTime.prototype.z = function (s) {
            var res = '' + s;
            return res.length > 1 ? res : '0' + res;
        };
        DateTime.prototype.toLocaleDateTimeString = function (date, cultureName, id) {
            var format = System.DateTimeConventions.Format(cultureName, id);
            if (id == 0 || id == 1) {
                var y;
                var m;
                var d;
                if (cultureName.indexOf("ar-") == 0 && cultureName != "ar-YE" && CurrentBrowser.browserName() == "Safari") {
                    var formatter;
                    if (CurrentBrowser.browserName() == "IE") {
                        formatter = new Intl.DateTimeFormat("ar-SA-u-ca-islamic-nu-latn", { day: "numeric", month: "numeric", year: "numeric" });
                        var date1 = ((formatter.format(date)).split(" "))[0].split("/");
                        y = parseFloat(date1[2].replace(/[^0-9\r\n]|\u&#8207/, ""));
                        m = parseFloat(date1[1].replace(/[^0-9\r\n]|\u&#8207/, ""));
                        d = parseFloat(date1[0].replace(/[^0-9\r\n]|\u&#8207/, ""));
                    }
                    else {
                        formatter = new Intl.DateTimeFormat("en-US-u-ca-islamic", { day: "numeric", month: "numeric", year: "numeric" });
                        var date1 = ((formatter.format(date)).split(" "))[0].split("/");
                        y = System.Convert.ToFloat(date1[2]);
                        m = System.Convert.ToFloat(date1[0]);
                        d = System.Convert.ToFloat(date1[1]);
                    }
                }
                else {
                    y = date.getFullYear();
                    m = date.getMonth() + 1;
                    d = date.getDate();
                }
                var dw = date.getDay();
                format = format.replace(/yyyy/, y);
                format = format.replace(/yy/, y.toString().substr(2));
                format = format.replace(/MMMM/, System.DateTimeConventions.Format(cultureName, 4)[m - 1]);
                format = format.replace(/\bMM\b/, this.z(m));
                format = format.replace(/\bM\b/, m);
                format = format.replace(/dddd/, System.DateTimeConventions.Format(cultureName, 3)[dw]);
                format = format.replace(/\bdd\b/, this.z(d));
                format = format.replace(/\bd\b/, d);
            }
            else {
                var H = date.getHours();
                var mm = date.getMinutes();
                var s = date.getSeconds();
                var t = (H >= 12) ? System.DateTimeConventions.Format(cultureName, 6) : System.DateTimeConventions.Format(cultureName, 5);
                var h = (H % 12) ? H % 12 : 12;
                format = format.replace(/HH/, this.z(H));
                format = format.replace(/H/, H);
                format = format.replace(/hh/, this.z(h));
                format = format.replace(/h/, h.toString());
                format = format.replace(/mm/, this.z(mm));
                format = format.replace(/ss/, this.z(s));
                format = format.replace(/tt/, t);
            }
            return format;
        };
        DateTime.prototype.ToString_2 = function (format, provider) {
            if (format.length !== 1 && format.length !== 0) {
                throw "Not supported exception in DateTime.ToString(format: any, provider: CultureInfo),  ";
            }
            var _Date = (!this._Date) ? new Date() : this._Date;
            var cultureName = (provider && provider.Name) ? provider.Name : "en-US";
            var date_str = "";
            switch (format) {
                case "d":
                    date_str = this.toLocaleDateTimeString(_Date, cultureName, 0);
                    break;
                case "D":
                    date_str = this.toLocaleDateTimeString(_Date, cultureName, 1);
                    break;
                case "f":
                    throw "Not implemented exception in CultureInfo";
                    break;
                case "F":
                    date_str = _Date.toLocaleDateString(cultureName, this._options_F);
                    break;
                case "g":
                case "G":
                case "M":
                case "m":
                case "O":
                case "o":
                case "R":
                case "r":
                case "s":
                case "t":
                    throw "Not implemented exception in CultureInfo";
                    break;
                case "T":
                    date_str = this.toLocaleDateTimeString(_Date, cultureName, 2);
                    break;
                case "u":
                case "U":
                case "y":
                case "Y":
                    throw "Not implemented exception in CultureInfo";
                    break;
                default:
                    date_str = _Date.toLocaleDateString(cultureName, this._options_d) + " " + _Date.toLocaleTimeString(cultureName, this._options_T);
                    break;
            }
            return date_str;
        };
        DateTime.prototype.getT = function () {
            return "";
        };
        DateTime.prototype.ToUniversalTime = function () {
            var UTC = new Date(this.Date.getUTCFullYear(), this.Date.getUTCMonth(), this.Date.getUTCDate(), this.Date.getUTCHours(), this.Date.getUTCMinutes(), this.Date.getUTCSeconds());
            return new DateTime(UTC);
        };
        DateTime.prototype.ToLongTimeString = function () {
            return this._Date.toTimeString();
        };
        DateTime.prototype.ToISO8601String = function () {
            return this._Date.getFullYear() +
                "-" +
                this.z(this._Date.getMonth() + 1) +
                "-" +
                this.z(this._Date.getDate()) +
                "T" +
                this.z(this._Date.getHours()) +
                ":" +
                this.z(this._Date.getMinutes()) +
                ":" +
                this.z(this._Date.getSeconds()) +
                ".000" +
                (-this._Date.getTimezoneOffset() < 0 ? '-' : '+') +
                this.z(Math.abs(this._Date.getTimezoneOffset() / 60)) +
                ":00";
        };
        DateTime.prototype.ToLocalTime = function () {
            /*var newDate = new Date(this.Date.getTime()+this.Date.getTimezoneOffset()*60*1000);
            var offset = this.Date.getTimezoneOffset() / 60;
            var hours = this.Date.getHours();
            newDate.setHours(hours - offset);
            return new DateTime(newDate);   */
            var date = new Date();
            var localOffset = this.Date.getTimezoneOffset() * 60000;
            var localtime = this.Date.getTime();
            return new DateTime(new Date(localtime - localOffset));
        };
        DateTime.GetDST = function (theDateTime) {
            var jan = new Date(theDateTime.Date.getFullYear(), 0, 1);
            var jul = new Date(theDateTime.Date.getFullYear(), 6, 1);
            var DaylightMaxOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
            var DateTimeOffset = theDateTime.Date.getTimezoneOffset();
            var DaylightDatalogTimeFix = DaylightMaxOffset > DateTimeOffset ? DaylightMaxOffset - DateTimeOffset : 0;
            return DaylightDatalogTimeFix;
        };
        //2016/02/23 Jwang fix bug "Some zones failed to load historical data"
        DateTime.GetTm1970 = function (theDateTime) {
            var zoneOffset = theDateTime.Date.getTimezoneOffset() / 60;
            var zoneOffsetInt = parseInt(zoneOffset); // get the time zone integer
            var zoneOffsetDeci = (Math.abs(zoneOffset * 100 % 100)) * 60 / 100; // get the time zone decimal and do some formate.
            zoneOffsetDeci = (zoneOffsetDeci == 0) ? '00' : zoneOffsetDeci;
            var zoneOffsetStr;
            if (zoneOffsetInt >= 10) {
                zoneOffsetStr = '-' + zoneOffsetInt + ':' + zoneOffsetDeci;
            }
            else if (zoneOffsetInt >= 0) {
                zoneOffsetStr = '-0' + zoneOffsetInt + ':' + zoneOffsetDeci;
            }
            else if (zoneOffsetInt >= -9) {
                zoneOffsetStr = '+0' + Math.abs(zoneOffsetInt) + ':' + zoneOffsetDeci;
            }
            else {
                zoneOffsetStr = '+' + Math.abs(zoneOffsetInt) + ':' + zoneOffsetDeci;
            }
            return new Date('1970-01-01T00:00:00.000' + zoneOffsetStr).getTime();
        };
        DateTime.prototype.ToShortDateString = function () {
            return this._Date.toDateString();
        };
        DateTime.prototype.ToShortTimeString = function () {
            return this._Date.toTimeString();
        };
        DateTime.prototype.ToLocaleDateTimeString = function () {
            return this._Date.toLocaleDateString() + " " + this._Date.toLocaleTimeString();
        };
        DateTime.Parse = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            return new DateTime(arguments[0]);
        };
        DateTime.prototype.Year = function () {
            return this._Date.getFullYear();
        };
        DateTime.prototype.Month = function () {
            return this._Date.getMonth();
        };
        DateTime.prototype.Day = function () {
            return this._Date.getDay();
        };
        DateTime.prototype.Second = function () {
            return this._Date.getSeconds();
        };
        DateTime.prototype.Minute = function () {
            return this._Date.getMinutes();
        };
        DateTime.prototype.Hour = function () {
            return this._Date.getHours();
        };
        DateTime.prototype.Millisecond = function () {
            return this._Date.getMilliseconds();
        };
        /* GET Funtion for Now */
        DateTime._Today = new DateTime();
        /* GET Funtion for Now */
        DateTime._Now = new DateTime();
        return DateTime;
    })();
    System.DateTime = DateTime;
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Debug = (function () {
            function Debug() {
            }
            Debug.prototype.WriteLine = function (msg) {
                if (console && console.debug)
                    console.debug(msg);
            };
            Debug.prototype.Assert = function (data) {
                if (!data) {
                    this.WriteLine("Assertion Failed!");
                }
            };
            return Debug;
        })();
        Diagnostics.Debug = Debug;
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var StringBuilder = (function () {
            function StringBuilder() {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                this.String = "";
                if (arguments.length == 1) {
                    if (lang.getClassName(arguments[0]) == "number" && arguments[0] % 1 === 0) {
                        this.Capacity = arguments[0];
                    }
                    else {
                        this.String = "" + arguments[0];
                    }
                }
            }
            StringBuilder.prototype.Append = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                switch (arguments.length) {
                    case 1:
                        var newstring;
                        (arguments[0] instanceof StringBuilder) ? newstring = arguments[0].String : newstring = arguments[0];
                        this.String = this.String + "" + newstring;
                        if (this.Capacity !== undefined) {
                            this.Capacity = (this.String && this.String.length !== undefined ? this.String.length : 0);
                        }
                        break;
                    case 2:
                        var temp = "";
                        for (var i = 0; i < arguments[1]; i++) {
                            temp = temp + "" + arguments[0];
                        }
                        this.String += temp;
                        if (this.Capacity !== undefined) {
                            this.Capacity = this.String && this.String.length !== undefined ? this.String.length : 0;
                        }
                        break;
                }
            };
            StringBuilder.prototype.AppendFormat = function () {
                var param = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    param[_i - 0] = arguments[_i];
                }
                //AIS_TODO            throw "NotImplemented";
                var foo;
                return foo;
            };
            StringBuilder.prototype.ToString = function () {
                return "" + this.String;
            };
            StringBuilder.prototype.Remove = function (data1, data2) {
                var PA = this.String.split("", this.String.length);
                if (((data1 >= 0) && (data2 > 0)) && ((data1 + data2) <= PA.length)) {
                    var NS = "";
                    var count = 0;
                    while (count < PA.length) {
                        if ((count >= data1) && (count < (data1 + data2))) {
                        }
                        else {
                            NS = NS + PA[count];
                        }
                        count++;
                    }
                    this.String = NS;
                }
            };
            Object.defineProperty(StringBuilder.prototype, "Length", {
                get: function () {
                    return this.String.length;
                },
                enumerable: true,
                configurable: true
            });
            StringBuilder.prototype.Replace = function (oldValue, newValue) {
                var r = '(' + oldValue + ')';
                var reg = new RegExp(r, 'gm');
                this.String = this.String.replace(reg, newValue);
                return this;
            };
            StringBuilder.prototype.Insert = function (index, value) {
                this.String = this.String.substring(0, index) + value + this.String.substring(index);
                return this;
            };
            return StringBuilder;
        })();
        Text.StringBuilder = StringBuilder;
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var TimeSpan = (function () {
        function TimeSpan() {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            this._Days = 0;
            this._Hours = 0;
            this._Minutes = 0;
            this._Seconds = 0;
            this._Milliseconds = 0;
            this._Ticks = TimeSpan.EpochTicks;
            switch (arguments.length) {
                case 0:
                    this.constructor_0();
                    break;
                case 1:
                    this.constructor_1(arguments[0]);
                    break;
                case 5:
                    this.constructor_2(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                    break;
                default: throw "Invalid overload call for: constructor";
            }
        }
        Object.defineProperty(TimeSpan.prototype, "Days", {
            get: function () {
                var num = this._Ticks / (864000000000);
                return Math.round(num);
            },
            set: function (value) {
                this._Days = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Hours", {
            get: function () {
                var num = this._Ticks / (36000000000 % 24);
                return Math.round(num);
            },
            set: function (value) {
                this._Hours = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Minutes", {
            get: function () {
                var num = this._Ticks / (600000000 % 60);
                return Math.round(num);
            },
            set: function (value) {
                this._Minutes = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Seconds", {
            get: function () {
                var num = this._Ticks / (10000000 % 60);
                return Math.round(num);
            },
            set: function (value) {
                this._Seconds = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Milliseconds", {
            get: function () {
                if (Math.round(this._Ticks / 10000 % 1000))
                    return Math.round(this._Ticks / 10000 % 1000);
                else
                    return Math.round(this._Ticks / 10000);
            },
            set: function (value) {
                this._Milliseconds = value;
                if (this._Ticks == 0) {
                    this._Ticks = value * 10000;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Ticks", {
            get: function () {
                return this._Ticks;
            },
            set: function (data) {
                this._Ticks = data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalDays", {
            get: function () {
                return this._Ticks * 1.1574074074074074E-12;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalHours", {
            get: function () {
                return this._Ticks * 2.7777777777777777E-11;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalMinutes", {
            get: function () {
                return this._Ticks * 1.6666666666666667E-09;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalSeconds", {
            get: function () {
                return this._Ticks * 1E-07;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalMilliseconds", {
            get: function () {
                var num = this._Ticks * 0.0001;
                if (num > 922337203685477.0) {
                    return 922337203685477.0;
                }
                if (num < -922337203685477.0) {
                    return -922337203685477.0;
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        TimeSpan.prototype.constructor_0 = function () {
            this.Ticks = 0;
            this.TotalDays;
            this.TotalHours;
            this.TotalMinutes;
            this.TotalSeconds;
            this.TotalMilliseconds;
        };
        TimeSpan.prototype.constructor_1 = function (data) {
            this.Ticks = data;
            this.TotalDays;
            this.TotalHours;
            this.TotalMinutes;
            this.TotalSeconds;
            this.TotalMilliseconds;
        };
        TimeSpan.prototype.constructor_2 = function (days, hours, minutes, seconds, milliseconds) {
            this.Days += (days * TimeSpan.msecPerDay);
            this.Hours += (hours * TimeSpan.msecPerHour);
            this.Minutes += (minutes * TimeSpan.msecPerMinute);
            this.Seconds += (seconds * TimeSpan.msecPerSecond);
            this.Milliseconds += milliseconds;
            this.TotalDays;
            this.TotalHours;
            this.TotalMinutes;
            this.TotalSeconds;
            this.TotalMilliseconds;
        };
        /* FromMilliseconds function */
        TimeSpan.FromMilliseconds = function (value) {
            return TimeSpan.Interval(value, 1);
        };
        /* FromSeconds function */
        TimeSpan.FromSeconds = function (value) {
            return TimeSpan.Interval(value, 1000);
        };
        /* FromMinutes function */
        TimeSpan.FromMinutes = function (value) {
            return TimeSpan.Interval(value, 60000);
        };
        /* FromHours function */
        TimeSpan.FromHours = function (value) {
            return TimeSpan.Interval(value, 3600000);
        };
        /* FromDays function */
        TimeSpan.FromDays = function (value) {
            return new TimeSpan(value, 0, 0, 0, 0);
        };
        /* FromTicks function */
        TimeSpan.FromTicks = function (value) {
            return new TimeSpan(value);
        };
        /* Subtract function */
        TimeSpan.prototype.Subtract = function (value) {
            return new TimeSpan(this._Ticks - value.Ticks);
        };
        TimeSpan.Interval = function (value, scale) {
            var num = value * scale;
            if (num > 922337203685477.0 || num < -922337203685477.0) {
                console.log("Overflow_TimeSpanTooLong");
            }
            return new TimeSpan(num * 10000);
        };
        TimeSpan.TicksPerDay = 864000000000;
        TimeSpan.TicksPerHour = 36000000000;
        TimeSpan.TicksPerMinute = 600000000;
        TimeSpan.TicksPerSecond = 10000000;
        TimeSpan.TicksPerMillisecond = 10000;
        TimeSpan.EpochTicks = 621355968000000000;
        TimeSpan.msecPerDay = 86400000;
        TimeSpan.msecPerHour = 3600000;
        TimeSpan.msecPerMinute = 60000;
        TimeSpan.msecPerSecond = 1000;
        return TimeSpan;
    })();
    System.TimeSpan = TimeSpan;
})(System || (System = {}));
var System;
(function (System) {
    var StringComparer = (function () {
        function StringComparer() {
        }
        Object.defineProperty(StringComparer, "CurrentCulture", {
            get: function () {
                if (!StringComparer._CurrentCulture)
                    StringComparer._CurrentCulture = new StringComparer();
                return StringComparer._CurrentCulture;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StringComparer, "CurrentCultureIgnoreCase", {
            get: function () {
                if (!StringComparer._CurrentCultureIgnoreCase)
                    StringComparer._CurrentCultureIgnoreCase = new StringComparer();
                return StringComparer._CurrentCultureIgnoreCase;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StringComparer, "InvariantCulture", {
            get: function () {
                if (!StringComparer._InvariantCulture)
                    StringComparer._InvariantCulture = new StringComparer();
                return StringComparer._InvariantCulture;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StringComparer, "InvariantCultureIgnoreCase", {
            get: function () {
                if (!StringComparer._InvariantCultureIgnoreCase)
                    StringComparer._InvariantCultureIgnoreCase = new StringComparer();
                return StringComparer._InvariantCultureIgnoreCase;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StringComparer, "Ordinal", {
            get: function () {
                if (!StringComparer._Ordinal)
                    StringComparer._Ordinal = new StringComparer();
                return StringComparer._Ordinal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StringComparer, "OrdinalIgnoreCase", {
            get: function () {
                if (!StringComparer._OrdinalIgnoreCase)
                    StringComparer._OrdinalIgnoreCase = new StringComparer();
                return StringComparer._OrdinalIgnoreCase;
            },
            enumerable: true,
            configurable: true
        });
        StringComparer.prototype.Compare = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            if ((typeof (arguments[0]) == "any") && (typeof (arguments[1]) == "any"))
                return this.Compare_1(arguments[0], arguments[1]);
            else if ((typeof (arguments[0]) == "string") && (typeof (arguments[1]) == "string"))
                return this.Compare_2(arguments[0], arguments[1]);
            else
                throw "Invalid overload call for: constructor";
        };
        StringComparer.prototype.Compare_1 = function (x, y) {
            throw "NotImplemented";
        };
        StringComparer.prototype.Compare_2 = function (x, y) {
            throw "NotImplemented";
        };
        /* Create function implementation */
        StringComparer.Create = function (culture, ignoreCase) {
            throw "NotImplemented";
        };
        StringComparer.prototype.Equals = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            if ((typeof (arguments[0]) == "any") && (typeof (arguments[1]) == "any"))
                return this.Equals_1(arguments[0], arguments[1]);
            else if ((typeof (arguments[0]) == "string") && (typeof (arguments[1]) == "string"))
                return this.Equals_2(arguments[0], arguments[1]);
            else
                throw "Invalid overload call for: constructor";
        };
        StringComparer.prototype.Equals_1 = function (x, y) {
            throw "NotImplemented";
        };
        StringComparer.prototype.Equals_2 = function (x, y) {
            throw "NotImplemented";
        };
        StringComparer.prototype.GetHashCode = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            if (typeof (arguments[0]) == "any")
                return this.GetHashCode_1(arguments[0]);
            else if (typeof (arguments[0]) == "string")
                return this.GetHashCode_2(arguments[0]);
            else
                throw "Invalid overload call for: constructor";
        };
        StringComparer.prototype.GetHashCode_1 = function (x) {
            throw "NotImplemented";
        };
        StringComparer.prototype.GetHashCode_2 = function (x) {
            throw "NotImplemented";
        };
        return StringComparer;
    })();
    System.StringComparer = StringComparer;
})(System || (System = {}));
var System;
(function (System) {
    var Net;
    (function (Net) {
        (function (HttpStatusCode) {
            HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
            HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
            HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
            HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
            HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
            HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
            HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
            HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
            HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
            HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
            HttpStatusCode[HttpStatusCode["Ambiguous"] = 300] = "Ambiguous";
            HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
            HttpStatusCode[HttpStatusCode["Moved"] = 301] = "Moved";
            HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
            HttpStatusCode[HttpStatusCode["Redirect"] = 302] = "Redirect";
            HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
            HttpStatusCode[HttpStatusCode["RedirectMethod"] = 303] = "RedirectMethod";
            HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
            HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
            HttpStatusCode[HttpStatusCode["Unused"] = 306] = "Unused";
            HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
            HttpStatusCode[HttpStatusCode["RedirectKeepVerb"] = 307] = "RedirectKeepVerb";
            HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
            HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
            HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
            HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
            HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
            HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
            HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
            HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
            HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
            HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
            HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
            HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
            HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
            HttpStatusCode[HttpStatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
            HttpStatusCode[HttpStatusCode["RequestUriTooLong"] = 414] = "RequestUriTooLong";
            HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
            HttpStatusCode[HttpStatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
            HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
            HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
            HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
            HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
            HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
            HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
            HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
        })(Net.HttpStatusCode || (Net.HttpStatusCode = {}));
        var HttpStatusCode = Net.HttpStatusCode;
    })(Net = System.Net || (System.Net = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Xml;
    (function (Xml) {
        var Linq;
        (function (Linq) {
            var XElement = (function () {
                function XElement() {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i - 0] = arguments[_i];
                    }
                    if (params.length == 0) {
                        this.constructor_0();
                    }
                    else if (params.length == 1) {
                        this.constructor_1(params[0]);
                    }
                    else {
                        this.constructor_2(params[0], params[1]);
                    }
                }
                Object.defineProperty(XElement.prototype, "Document", {
                    get: function () {
                        return this._Document;
                    },
                    set: function (value) {
                        this._Document = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(XElement.prototype, "Stream", {
                    get: function () {
                        return this._Stream;
                    },
                    set: function (value) {
                        this._Stream = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                XElement.prototype.constructor_0 = function () {
                    try {
                        this._Document = document.implementation.createDocument("", "", null);
                    }
                    catch (e) {
                        this._Document = new ActiveXObject("Microsoft.XMLDOM");
                    }
                    this._Document.async = false;
                };
                XElement.prototype.constructor_1 = function (param) {
                };
                XElement.prototype.constructor_2 = function (param) {
                    var params = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        params[_i - 1] = arguments[_i];
                    }
                };
                XElement.prototype.Load = function (_stream) {
                    var parser = new DOMParser();
                    this._Document = parser.parseFromString(_stream, "text/xml");
                    return this._Document;
                };
                XElement.prototype.Save = function (_document) {
                    var serializer = new XMLSerializer();
                    this._Stream = serializer.serializeToString(_document);
                    return this._Stream;
                };
                return XElement;
            })();
            Linq.XElement = XElement;
        })(Linq = Xml.Linq || (Xml.Linq = {}));
    })(Xml = System.Xml || (System.Xml = {}));
})(System || (System = {}));
//# sourceMappingURL=Core.js.map