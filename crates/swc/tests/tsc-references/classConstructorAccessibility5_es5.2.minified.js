import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Base = function() {
    "use strict";
    _class_call_check(this, Base);
}, Derived = function(Base1) {
    "use strict";
    _inherits(Derived, Base1);
    var _super = _create_super(Derived);
    function Derived() {
        return _class_call_check(this, Derived), _super.apply(this, arguments);
    }
    return Derived.make = function() {
        new Base();
    }, Derived;
}(Base), Unrelated = function() {
    "use strict";
    function Unrelated() {
        _class_call_check(this, Unrelated);
    }
    return Unrelated.fake = function() {
        new Base();
    }, Unrelated;
}();
