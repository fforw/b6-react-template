var React = require("react/addons");
var ReactDOM = require("react-dom");

var bulk = require("bulk-require");

var map = bulk(__dirname, ["bulk/**/*.js"]);

window.onload(function ()
{
    var k = "key";

    ReactDOM.render(<div className="foo" complex={{
    [k] : function(a) { a*2 }
    }}/>, root);

});


