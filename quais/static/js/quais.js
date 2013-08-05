// Generated by CoffeeScript 1.6.3
(function() {
  var $, AppView, Application, ApplicationList, ApplicationView, Image, ImageList, ImageView,
    _this = this;

  $ = jQuery;

  Application = Backbone.Model.extend({
    start: function() {
      var req,
        _this = this;
      return req = $.post('/api/start/' + this.get('id')).done(function() {
        _this.set('status', 'started');
        return $('#messages').notify({
          type: 'success',
          message: {
            text: 'The process has been started'
          }
        }).show();
      }).fail(function(data) {
        return $('#messages').notify({
          type: 'danger',
          message: {
            text: data.responseJSON['error']
          }
        }).show();
      });
    },
    restart: function() {
      var req,
        _this = this;
      return req = $.post('/api/restart/' + this.get('id')).done(function() {
        _this.set('status', 'started');
        return $('#messages').notify({
          type: 'success',
          message: {
            text: 'The process has been restarted'
          }
        }).show();
      }).fail(function(data) {
        return $('#messages').notify({
          type: 'danger',
          message: {
            text: data.responseJSON['error']
          }
        }).show();
      });
    },
    stop: function() {
      var req,
        _this = this;
      return req = $.post('/api/stop/' + this.get('id')).done(function() {
        _this.set('status', 'stopped');
        return $('#messages').notify({
          type: 'success',
          message: {
            text: 'The process has been stopped'
          }
        }).show();
      }).fail(function(data) {
        return $('#messages').notify({
          type: 'danger',
          message: {
            text: data.responseJSON['error']
          }
        }).show();
      });
    }
  });

  ApplicationList = Backbone.Collection.extend({
    model: Application,
    url: '/api/applications'
  });

  Image = Backbone.Model.extend();

  ImageList = Backbone.Collection.extend({
    model: Image,
    url: '/api/images',
    comparator: function(image) {
      return -image.get('created_timestamp');
    }
  });

  window.Applications = new ApplicationList;

  window.Images = new ImageList;

  ApplicationView = Backbone.View.extend({
    tagName: 'tr',
    template: Handlebars.templates['application.hbs'],
    events: {
      'click .js-app-restart': 'restart',
      'click .js-app-stop': 'stop',
      'click .js-app-start': 'start'
    },
    initialize: function() {
      return this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      window.model = this.model;
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    stop: function() {
      return _this.model.stop;
    },
    start: function() {
      return this.model.start();
    },
    restart: function() {
      return this.model.restart();
    }
  });

  ImageView = Backbone.View.extend({
    tagName: 'tr',
    template: Handlebars.templates['image.hbs'],
    initialize: function() {
      return this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      window.model = this.model;
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  AppView = Backbone.View.extend({
    el: $('.js-application'),
    initialize: function() {
      this.listenTo(Applications, 'add', this.addOneApplication);
      this.listenTo(Applications, 'reset', this.addAllApplications);
      this.listenTo(Applications, 'all', this.render);
      this.listenTo(Images, 'add', this.addOneImage);
      this.listenTo(Images, 'reset sort', this.addAllImages);
      this.listenTo(Images, 'all', this.render);
      Applications.fetch();
      return Images.fetch();
    },
    addOneApplication: function(app) {
      var view;
      view = new ApplicationView({
        model: app
      });
      return $('#application-list tbody').append(view.render().el);
    },
    addAllApplications: function() {
      return Applications.each(this.addOneApplication, this);
    },
    addOneImage: function(image) {
      var view;
      view = new ImageView({
        model: image
      });
      return $('#image-list tbody').append(view.render().el);
    },
    addAllImages: function() {
      $('#image-list tbody').empty();
      return Images.each(this.addOneImage, this);
    }
  });

  $(document).ready(function() {
    return window.App = new AppView;
  });

}).call(this);
