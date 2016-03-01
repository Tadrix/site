define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache'], function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.main'),
    data: {},

    initialize: function() {
      this.data = {
        main: {
          head: 'site',
          title: 'main title',
          content: 'Lorem ipsum 1'
        },
        about: {
          head: 'site / about',
          title: 'about title',
          content: 'Lorem ipsum 2'
        },
        contact: {
          head: 'site / contact',
          title: 'contact title',
          content: 'Lorem ipsum 3'
        }
      };
    },

    render: function(pageType){
      var compiledTemplate = Mustache.render( pageTemplate, this.data[pageType] );
      this.$el.html( compiledTemplate );
    }
  });
  return DefaultView;
});
