import _extends from "@swc/helpers/src/_extends.mjs";
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
var React = require("react");
var decorator = function decorator(props) {
    return /*#__PURE__*/ React.createElement(Component, _extends({}, props));
};
var decorator1 = function decorator1(props) {
    return /*#__PURE__*/ React.createElement(Component, _extends({}, props, {
        x: "hi"
    }));
};
export { };
