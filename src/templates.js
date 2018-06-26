(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mainPage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"main-hero\">\r\n    <img id=\"main-hero-image\" src=\"img/trail.jpg\"/>\r\n    <div id=\"main-hero-text\">\r\n        <h1 id=\"main-title\">Hikes Near You</h1>\r\n        <h3 id=\"main-subtitle\">A collection of the best hikes in your neck of the woods.</h3>\r\n    </div>    \r\n</div>\r\n<div id=\"main-content\">\r\n    <div id=\"main-search\">\r\n        <input type=\"search\" placeholder=\"Type a hike here...\">\r\n    </div>\r\n    <div id=\"hikes-table\">\r\n        "
    + ((stack1 = ((helper = (helper = helpers.mainTable || (depth0 != null ? depth0.mainTable : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"mainTable","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "    \r\n    </div>    \r\n</div>";
},"useData":true});
templates['mainTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\r\n                <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = helpers.area || (depth0 != null ? depth0.area : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"area","hash":{},"data":data}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = helpers.distance || (depth0 != null ? depth0.distance : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"distance","hash":{},"data":data}) : helper)))
    + " mi</td>\r\n                <td>"
    + alias4(((helper = (helper = helpers.elevationGain || (depth0 != null ? depth0.elevationGain : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elevationGain","hash":{},"data":data}) : helper)))
    + " ft</td>\r\n            </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <tr class=\"empty-row\">\r\n                <td colspan=\"20\">Sorry, no hikes found.</td>\r\n            </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<table>\r\n    <colgroup>\r\n        <col span=\"8\">\r\n        <col span=\"6\">\r\n        <col span=\"3\">\r\n        <col span=\"3\">\r\n    </colgroup>\r\n    <thead>\r\n        <tr>\r\n            <td class=\"table-name\">Name</td>\r\n            <td class=\"table-area\">Area</td>\r\n            <td class=\"table-distance\">Distance</td>\r\n            <td class=\"table-elevation\">Elev. Gain</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>        \r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.hikes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.hikes : depth0)) != null ? stack1.length : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
})();