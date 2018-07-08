(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['detailView'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"detail-carousel-item\">\r\n                    <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n                </div>            \r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <p>"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"detail-container\">\r\n    <div id=\"detail-title\">\r\n        <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\r\n        <a id=\"detail-edit-button\" class=\"auth-only\" href=\"#/edit/hike/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">Edit Hike</a>\r\n    </div>\r\n    <div id=\"detail-carousel\">\r\n        <div id=\"carousel-container\">\r\n            <button class=\"carousel-button\" id=\"carousel-prev\">Previous</button>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.images : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <button class=\"carousel-button\" id=\"carousel-next\">Next</button>\r\n        </div>     \r\n        <div id=\"carousel-upload-container\">\r\n            <button id=\"carousel-upload-image-toggle\">Add Image</button>\r\n            <input id=\"carousel-upload-image\" type=\"file\"/>   \r\n        </div>        \r\n    </div>\r\n    <div id=\"detail-stats\"></div>\r\n    <div id=\"detail-map\"></div>\r\n    <div id=\"detail-description\">\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.description : stack1)) != null ? stack1.paragraphs : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
templates['detailViewEdit'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"detail-edit-description-wrapper\">\r\n                    <textarea cols=\"100\" rows=\"6\">"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n                </div>                \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div id=\"detail-edit\">\r\n    <h1>Editing Hike: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\r\n    <div id=\"detail-edit-main\">\r\n        <div id=\"detail-edit-title-container\" class=\"detail-edit-section\">\r\n            <h3>Title</h3>\r\n            <input type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" size=\"72\" />\r\n        </div>\r\n        <div id=\"detail-edit-area-container\" class=\"detail-edit-section\">\r\n            <h3>Area</h3>\r\n            <input type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.area : stack1), depth0))
    + "\" size=\"40\" />\r\n        </div>\r\n        <div id=\"detail-edit-distance-container\" class=\"detail-edit-section\">\r\n            <h3>Distance</h3>\r\n            <input type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.distance : stack1), depth0))
    + "\" size=\"20\" />\r\n        </div>\r\n        <div id=\"detail-edit-elevation-container\" class=\"detail-edit-section\">\r\n            <h3>Elevation</h3>\r\n            <input type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.elevationGain : stack1), depth0))
    + "\" size=\"20\" />\r\n        </div>\r\n        <div id=\"detail-edit-map-container\" class=\"detail-edit-section\">\r\n            <h3>Map</h3>\r\n            <h5>Click on the map to change the location.</h5>\r\n            <div id=\"detail-edit-map\"></div>\r\n        </div>\r\n        <div id=\"detail-edit-description-container\" class=\"detail-edit-section\">\r\n            <h3>Description</h3>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.hike : depth0)) != null ? stack1.description : stack1)) != null ? stack1.paragraphs : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <button id=\"detail-edit-add-paragraph\">Add Paragraph</button>\r\n        </div>\r\n    </div>\r\n    <div id=\"detail-edit-buttons\">\r\n        <button id=\"detail-edit-save\">Save</button>\r\n        <button id=\"detail-edit-cancel\">Cancel</button>\r\n    </div>\r\n</div>";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#/\">\r\n    <h3>Hikes Near You</h3>\r\n</a>\r\n<nav id=\"header-links\">\r\n    <ul id=\"header-links-list\">\r\n        <li id=\"header-link-create-hike\" class=\"auth-only\">\r\n            <a href=\"#/edit/hike/new\">Create Hike</a>\r\n        </li>\r\n        <li id=\"header-link-sign-in\" class=\"unauth-only\">\r\n            <a href=\"#/sign-in\">Sign In</a>\r\n        </li>\r\n        <li id=\"header-link-sign-out\" class=\"auth-only\">\r\n            <span>Sign Out</span>\r\n        </li>\r\n    </ul>    \r\n</nav>";
},"useData":true});
templates['mainTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\r\n                <td><a href=\"#/hike/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></td>\r\n                <td>"
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
templates['mainView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"main-hero\">\r\n    <img id=\"main-hero-image\" src=\"img/trail.jpg\"/>\r\n    <div id=\"main-hero-text\">\r\n        <h1 id=\"main-title\">Hikes Near You</h1>\r\n        <h3 id=\"main-subtitle\">A collection of the best hikes in your neck of the woods.</h3>\r\n    </div>    \r\n</div>\r\n<div id=\"main-content\">\r\n    <div id=\"main-search\">\r\n        <input type=\"search\" placeholder=\"Type a hike here...\">\r\n    </div>\r\n    <div id=\"hikes-table\">\r\n        "
    + ((stack1 = ((helper = (helper = helpers.mainTable || (depth0 != null ? depth0.mainTable : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"mainTable","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "    \r\n    </div>    \r\n</div>";
},"useData":true});
templates['signIn'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"firebaseui-auth-container\"></div>";
},"useData":true});
})();