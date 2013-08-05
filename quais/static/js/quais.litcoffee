    $ = jQuery

This is the literate coffeescript code for Quais application

Let's start by creating our Application model and collection

    Application = Backbone.Model.extend
        start: ->
            req = $.post('/api/start/' + @get('id'))
                .done =>
                    @set('status', 'started')
                    $('#messages').notify
                        type: 'success'
                        message:
                            text: 'The process has been started'
                    .show()
                .fail (data) =>
                    $('#messages').notify
                        type: 'danger'
                        message:
                            text: data.responseJSON['error']
                    .show()
        restart: ->
            req = $.post('/api/restart/' + @get('id'))
                .done =>
                    @set('status', 'started')
                    $('#messages').notify
                        type: 'success'
                        message:
                            text: 'The process has been restarted'
                    .show()
                .fail (data) =>
                    $('#messages').notify
                        type: 'danger'
                        message:
                            text: data.responseJSON['error']
                    .show()
        stop: ->
            req = $.post('/api/stop/' + @get('id'))
                .done =>
                    @set('status', 'stopped')
                    $('#messages').notify
                        type: 'success'
                        message:
                            text: 'The process has been stopped'
                    .show()
                .fail (data) =>
                    $('#messages').notify
                        type: 'danger'
                        message:
                            text: data.responseJSON['error']
                    .show()

    ApplicationList = Backbone.Collection.extend
        model: Application
        url: '/api/applications'

And the same for Image:

    Image = Backbone.Model.extend()
    
    ImageList = Backbone.Collection.extend
        model: Image
        url: '/api/images'
        comparator: (image) ->
            return -image.get('created_timestamp')

Create our collection
    
    window.Applications = new ApplicationList
    window.Images = new ImageList

Then define our single application item view

    ApplicationView = Backbone.View.extend
        tagName: 'tr'
        template: Handlebars.templates['application.hbs']
        events:
            'click .js-app-restart': 'restart'
            'click .js-app-stop': 'stop'
            'click .js-app-start': 'start'
        initialize: ->
            @listenTo(@model, 'change', @render)
        render: ->
            window.model = @model
            @$el.html(@template(@model.toJSON()))
            return @
        stop: =>
            @model.stop()
        start: ->
            @model.start()
        restart: ->
            @model.restart()

And also the Image View
    
    ImageView = Backbone.View.extend
        tagName: 'tr'
        template: Handlebars.templates['image.hbs']
        initialize: ->
            @listenTo(@model, 'change', @render)
        render: ->
            window.model = @model
            @$el.html(@template(@model.toJSON()))
            return @

And to finish it all, the main application view that binds to the content area

    AppView = Backbone.View.extend
        el: $('.js-application')
        initialize: ->
            @listenTo(Applications, 'add', @addOneApplication);
            @listenTo(Applications, 'reset', @addAllApplications);
            @listenTo(Applications, 'all', @render);
            @listenTo(Images, 'add', @addOneImage);
            @listenTo(Images, 'reset sort', @addAllImages);
            @listenTo(Images, 'all', @render);
            Applications.fetch()
            Images.fetch()
        addOneApplication: (app) ->
            view = new ApplicationView({model: app})
            $('#application-list tbody').append(view.render().el)
        addAllApplications: () ->
            Applications.each(@addOneApplication, @)
        addOneImage: (image) ->
            view = new ImageView({model: image})
            $('#image-list tbody').append(view.render().el)
        addAllImages: () ->
            $('#image-list tbody').empty()
            Images.each(@addOneImage, @)

Away we go...
    
    $(document).ready ->
        window.App = new AppView


