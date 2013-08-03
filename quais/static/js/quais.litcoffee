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


