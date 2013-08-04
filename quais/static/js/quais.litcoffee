    $ = jQuery

This is the literate coffeescript code for Quais application

Let's start by creating our models and collections

    Application = Backbone.Model.extend
        start: ->
            console.log('foo')

    ApplicationList = Backbone.Collection.extend
        model: Application
        url: '/api/applications'

Create our collection
    
    window.Applications = new ApplicationList

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
        stop: ->
            req = $.post('/api/stop/' + @model.get('id'))
                .done ->
                    $('#messages').notify
                        type: 'success'
                        message:
                            text: 'The process has been stopped'
                    .show()
                .fail (data) ->
                    $('#messages').notify
                        type: 'danger'
                        message:
                            text: data.responseJSON['error']
                    .show()
                    console.log(data.responseJSON)
                .always ->
                    console.log('always')
        start: ->
            req = $.post('/api/start/' + @model.get('id'))
                .done ->
                    $('#messages').notify
                        type: 'success'
                        message:
                            text: 'The process has been started'
                    .show()
                .fail (data) ->
                    $('#messages').notify
                        type: 'danger'
                        message:
                            text: data.responseJSON['error']
                    .show()
                    console.log(data.responseJSON)
                .always ->
        restart: ->
            req = $.post('/api/restart/' + @model.get('id'))
                .done ->
                    $('#messages').notify
                        type: 'success'
                        message:
                            text: 'The process has been restarted'
                    .show()
                .fail (data) ->
                    $('#messages').notify
                        type: 'danger'
                        message:
                            text: data.responseJSON['error']
                    .show()
                    console.log(data.responseJSON)
                .always ->
                    console.log('always')

And to finish it all, the main application view that binds to the content area

    AppView = Backbone.View.extend
        el: $('.js-application')
        initialize: ->
            @listenTo(Applications, 'add', @addOne);
            @listenTo(Applications, 'reset', @addAll);
            @listenTo(Applications, 'all', @render);
            Applications.fetch()
        render: ->
        addOne: (app) ->
            console.log(app)
            view = new ApplicationView({model: app})
            $('#application-list tbody').append(view.render().el)
        addAll: () ->
            Applications.each(@addOne, @)


Away we go...
    
    $(document).ready ->
        window.App = new AppView


