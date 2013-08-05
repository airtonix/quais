(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['application.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <span class=\"label label-success\">";
  if (stack1 = helpers.status) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.status; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <span class=\"label label-danger\">";
  if (stack1 = helpers.status) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.status; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <span class=\"label label-warning\">";
  if (stack1 = helpers.error) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.error; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"btn btn-small btn btn-belize-hole js-app-restart\">Restart</a>\n            <a href=\"#\" class=\"btn btn-small btn-alizarin js-app-stop\">Stop</a>\n        ";
  }

function program9(depth0,data) {
  
  
  return "\n            <a href=\"#\" class=\"btn btn-small btn btn-nephritis js-app-start\">Start</a>\n        ";
  }

  buffer += "<td><img src=\"http://fweddit.com/favicon.ico\" width=\"20\" alt=\"\"></td>\n<td><a href=\"http://";
  if (stack1 = helpers.vhost) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vhost; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n<td><a href=\"http://gitlab.j4lp.com/";
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
    + "</td>\n<td>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.is || depth0.is),stack1 ? stack1.call(depth0, depth0.status, "started", options) : helperMissing.call(depth0, "is", depth0.status, "started", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.is || depth0.is),stack1 ? stack1.call(depth0, depth0.status, "stopped", options) : helperMissing.call(depth0, "is", depth0.status, "stopped", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.is || depth0.is),stack1 ? stack1.call(depth0, depth0.status, "error", options) : helperMissing.call(depth0, "is", depth0.status, "error", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</td>\n<td>\n    <div class=\"btn-group btn-group-justified\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.is || depth0.is),stack1 ? stack1.call(depth0, depth0.status, "started", options) : helperMissing.call(depth0, "is", depth0.status, "started", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.is || depth0.is),stack1 ? stack1.call(depth0, depth0.status, "stopped", options) : helperMissing.call(depth0, "is", depth0.status, "stopped", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n</td>";
  return buffer;
  });
templates['image.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<td>";
  if (stack1 = helpers.repository) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repository; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.tag) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tag; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.truncate || depth0.truncate),stack1 ? stack1.call(depth0, depth0.image_id, 12, options) : helperMissing.call(depth0, "truncate", depth0.image_id, 12, options)))
    + "</td>\n<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.timeago || depth0.timeago),stack1 ? stack1.call(depth0, depth0.created, options) : helperMissing.call(depth0, "timeago", depth0.created, options)))
    + "</td>\n<td>";
  if (stack2 = helpers.size) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.size; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " (virtual ";
  if (stack2 = helpers.virtual_size) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.virtual_size; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ")</td>";
  return buffer;
  });
})();