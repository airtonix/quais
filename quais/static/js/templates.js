(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['application.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<td><img src=\"";
  if (stack1 = helpers.vhost) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vhost; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/favicon.ico\" alt=\"\"></td>\n<td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td><a href=\"http://gitlab.j4lp.com/";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/commit/";
  if (stack1 = helpers.commit) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.commit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.truncate || depth0.truncate),stack1 ? stack1.call(depth0, depth0.commit, 12, options) : helperMissing.call(depth0, "truncate", depth0.commit, 12, options)))
    + "</a></td>\n<td>";
  if (stack2 = helpers.image) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.image; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n<td>";
  if (stack2 = helpers.container) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.container; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n<td>";
  if (stack2 = helpers.status) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.status; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n<td>\n    <div class=\"btn-group pull-right clearfix\">\n        <a href=\"#\" class=\"btn btn-small btn-warning\">Restart</a>\n        <a href=\"#\" class=\"btn btn-small btn-danger\">Stop</a>\n        <a href=\"#\" class=\"btn btn-small btn-default\">Rebuild</a>\n    </div>\n</td>";
  return buffer;
  });
})();