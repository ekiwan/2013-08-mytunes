var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
